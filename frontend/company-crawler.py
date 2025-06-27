import json
import time
import re
import os
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def clean_company_name(name):
    return re.sub(r'^(주식회사|\(주\))', '', name).strip()


def save_logo_image(logo_url, company_id):
    try:
        if logo_url.startswith('//'):
            logo_url = 'https:' + logo_url
        ext = os.path.splitext(logo_url.split('?')[0])[1] or '.jpg'
        path = f"public/data/logos/{company_id}{ext}"
        os.makedirs(os.path.dirname(path), exist_ok=True)
        img_data = requests.get(logo_url).content
        with open(path, 'wb') as f:
            f.write(img_data)
        return path
    except Exception as e:
        print(f"[{company_id}] 로고 저장 실패: {e}")
        return None


def parse_company_page(html, target_ceo):
    soup = BeautifulSoup(html, 'html.parser')

    def get_field(field_name):
        th = soup.find('th', string=field_name)
        if not th:
            return None
        td = th.find_next_sibling('td')
        value = td.select_one('div.value')
        return value.get_text(strip=True) if value else None

    ceo_name = get_field("대표자")
    if ceo_name is None or target_ceo not in ceo_name:
        return None

    return {
        "employeeCount": get_field("사원수"),
        "revenue": get_field("매출액"),
        "website": get_field("홈페이지"),
        "logoUrl": soup.select_one("div.logo img")["src"] if soup.select_one("div.logo img") else None
    }


def search_and_scrape(driver, company):
    name = clean_company_name(company["coNm"])
    company_id = company["id"]
    expected_ceo = company["reperNm"]

    try:
        driver.get("https://www.jobkorea.co.kr")
        time.sleep(1)
        search_input = driver.find_element(By.ID, "stext")
        search_input.clear()
        search_input.send_keys(name)
        search_input.send_keys(Keys.ENTER)
        time.sleep(2)

        # 기업정보 탭 클릭
        tabs = driver.find_elements(By.CSS_SELECTOR, "div#tabType a")
        corp_tab = next((tab for tab in tabs if "기업정보" in tab.text), None)
        if corp_tab:
            corp_tab.click()
            time.sleep(2)
        else:
            return None

        # 첫 번째 결과 클릭
        results = driver.find_elements(By.CSS_SELECTOR, ".post-list-info .coTit a")
        if not results:
            return None
        results[0].click()
        time.sleep(2)

        # 상세 페이지 파싱
        html = driver.page_source
        scraped = parse_company_page(html, expected_ceo)
        if not scraped:
            return None

        # 로고 저장
        logo_path = save_logo_image(scraped["logoUrl"], company_id) if scraped["logoUrl"] else None
        return {
            "employeeCount": scraped["employeeCount"],
            "revenue": scraped["revenue"],
            "website": scraped["website"],
            "logoPath": logo_path,
        }

    except Exception as e:
        print(f"[{company_id}] 에러: {e}")
        return None


def main():
    with open('public/data/companies.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    for company in data["companies"]:
        if company.get("crawlStatus") == "success":
            continue

        print(f"[{company['id']}] 처리중: {company['coNm']}")
        result = search_and_scrape(driver, company)

        if result:
            company.update(result)
            company["crawlStatus"] = "success"
            print(f"  ⮕ 완료")
        else:
            company["crawlStatus"] = "not_found"
            print(f"  ⮕ 실패 또는 정보 없음")

        time.sleep(2)

    driver.quit()

    with open('public/data/companies.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("🔄 모든 기업 업데이트 완료")


if __name__ == "__main__":
    main()
