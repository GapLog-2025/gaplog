// 강소기업 조회 api
// 현재 프론트엔드에서 직접 고용24로 쏘는 방식이라 추후 백엔드 거치게 변경해야함
export async function getSmallGiantsList() {
  const apiKey = import.meta.env.VITE_SMALLGIANTS_API_KEY;
  const url = `https://www.work24.go.kr/cm/openApi/call/wk/callOpenApiSvcInfo216L31.do?authKey=${apiKey}&returnType=XML&startPage=1&display=10`;

  const res = await fetch(url);
  const text = await res.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'application/xml');

  // XML에서 데이터 추출
  const smallGiantsListElement = xmlDoc.querySelector('smallGiantsList');

  if (!smallGiantsListElement) {
    throw new Error('smallGiantsList 요소를 찾을 수 없습니다.');
  }

  // 메타 정보 추출
  const total = parseInt(
    smallGiantsListElement.querySelector('total')?.textContent || '0',
  );
  const startPage = parseInt(
    smallGiantsListElement.querySelector('startPage')?.textContent || '1',
  );
  const display = parseInt(
    smallGiantsListElement.querySelector('display')?.textContent || '10',
  );

  // smallGiant 요소들 추출
  const smallGiantElements =
    smallGiantsListElement.querySelectorAll('smallGiant');

  const smallGiants = Array.from(smallGiantElements).map((element) => ({
    coNm: element.querySelector('coNm')?.textContent || '',
    busiNo: element.querySelector('busiNo')?.textContent || '',
    reperNm: element.querySelector('reperNm')?.textContent || '',
    superIndTpCd: element.querySelector('superIndTpCd')?.textContent || '',
    superIndTpNm: element.querySelector('superIndTpNm')?.textContent || '',
    indTpCd: element.querySelector('indTpCd')?.textContent || '',
    indTpNm: element.querySelector('indTpNm')?.textContent || '',
    regionCd: element.querySelector('regionCd')?.textContent || '',
    regionNm: element.querySelector('regionNm')?.textContent || '',
  }));

  return {
    total,
    startPage,
    display,
    smallGiants,
  };
}

//
export async function getCompaniesFromLocal() {
  const response = await fetch('/data/companies.json');
  if (!response.ok) {
    throw new Error('로컬 데이터를 가져오는데 실패했습니다');
  }
  return response.json();
}
