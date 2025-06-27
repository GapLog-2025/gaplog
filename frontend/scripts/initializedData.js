// scripts/initializedData.js
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// ES6 모듈에서 __dirname 사용하기 위한 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 환경변수 로드
dotenv.config();
console.log(
  '🔑 API Key 확인:',
  process.env.VITE_SMALLGIANTS_API_KEY ? '로드됨' : '로드 안됨',
);
console.log(
  '🔑 API Key 길이:',
  process.env.VITE_SMALLGIANTS_API_KEY?.length || 0,
);

class SmallGiantsDataInitializer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.dataDir = path.join(this.projectRoot, 'public', 'data');
    this.logosDir = path.join(this.dataDir, 'logos');
    this.companiesFile = path.join(this.dataDir, 'companies.json');
    this.apiKey = process.env.VITE_SMALLGIANTS_API_KEY;

    console.log('🔧 프로젝트 루트:', this.projectRoot);
    console.log('📁 데이터 디렉토리:', this.dataDir);
    console.log('🖼️ 로고 디렉토리:', this.logosDir);
  }

  // API에서 전체 데이터 한 번에 가져오기
  async getAllSmallGiants() {
    // 먼저 총 개수를 확인하기 위해 첫 페이지만 호출
    const firstPageUrl = `https://www.work24.go.kr/cm/openApi/call/wk/callOpenApiSvcInfo216L31.do?authKey=${this.apiKey}&returnType=XML&startPage=1&display=10`;

    console.log('📡 총 데이터 개수 확인 중...');
    const firstResponse = await fetch(firstPageUrl);
    const firstText = await firstResponse.text();
    const firstPageData = this.parseXML(firstText);

    const totalCount = firstPageData.total;
    console.log(`📊 전체 데이터 개수: ${totalCount}개`);

    // 전체 데이터를 한 번에 가져오기 (display를 총 개수로 설정)
    const allDataUrl = `https://www.work24.go.kr/cm/openApi/call/wk/callOpenApiSvcInfo216L31.do?authKey=${this.apiKey}&returnType=XML&startPage=1&display=${totalCount}`;

    console.log(`📡 전체 ${totalCount}개 데이터 한 번에 가져오기...`);
    const response = await fetch(allDataUrl);
    const text = await response.text();

    const xmlData = this.parseXML(text);
    return xmlData;
  }

  // 간단한 XML 파싱 (정규식 사용)
  parseXML(xmlText) {
    const getTextContent = (xml, tagName) => {
      const regex = new RegExp(`<${tagName}>(.*?)</${tagName}>`, 'g');
      const matches = [];
      let match;
      while ((match = regex.exec(xml)) !== null) {
        matches.push(match[1]);
      }
      return matches;
    };

    const getSingleTextContent = (xml, tagName) => {
      const regex = new RegExp(`<${tagName}>(.*?)</${tagName}>`);
      const match = xml.match(regex);
      return match ? match[1] : '';
    };

    // 메타 정보 추출
    const total = parseInt(getSingleTextContent(xmlText, 'total') || '0');
    const startPage = parseInt(
      getSingleTextContent(xmlText, 'startPage') || '1',
    );
    const display = parseInt(getSingleTextContent(xmlText, 'display') || '100');

    // smallGiant 섹션들 추출
    const smallGiantSections =
      xmlText.match(/<smallGiant>.*?<\/smallGiant>/gs) || [];

    const smallGiants = smallGiantSections.map((section) => ({
      coNm: getSingleTextContent(section, 'coNm'),
      busiNo: getSingleTextContent(section, 'busiNo'),
      reperNm: getSingleTextContent(section, 'reperNm'),
      superIndTpCd: getSingleTextContent(section, 'superIndTpCd'),
      superIndTpNm: getSingleTextContent(section, 'superIndTpNm'),
      indTpCd: getSingleTextContent(section, 'indTpCd'),
      indTpNm: getSingleTextContent(section, 'indTpNm'),
      regionCd: getSingleTextContent(section, 'regionCd'),
      regionNm: getSingleTextContent(section, 'regionNm'),
    }));

    return { total, startPage, display, smallGiants };
  }

  // 모든 회사 데이터 가져오기 (단순화)
  async fetchAllCompanies() {
    console.log('🚀 API에서 전체 데이터 가져오기 시작...');

    try {
      const apiData = await this.getAllSmallGiants();
      console.log(
        `🎉 총 ${apiData.smallGiants.length}개 회사 데이터 수집 완료!`,
      );
      console.log(
        `📈 API 응답 메타정보: 총 ${apiData.total}개, 표시 ${apiData.display}개`,
      );

      return apiData.smallGiants;
    } catch (error) {
      console.error('❌ API 데이터 가져오기 실패:', error.message);
      throw error;
    }
  }

  // API 데이터를 확장된 구조로 변환
  transformApiData(companies) {
    // 중복 제거 (사업자번호 기준)
    const uniqueCompanies = companies.filter(
      (company, index, self) =>
        index === self.findIndex((c) => c.busiNo === company.busiNo),
    );

    console.log(
      `🔍 중복 제거: ${companies.length}개 → ${uniqueCompanies.length}개`,
    );

    return uniqueCompanies.map((company, index) => ({
      // 기본 API 데이터
      id: index + 1,
      coNm: company.coNm,
      busiNo: company.busiNo,
      reperNm: company.reperNm,
      superIndTpCd: company.superIndTpCd,
      superIndTpNm: company.superIndTpNm,
      indTpCd: company.indTpCd,
      indTpNm: company.indTpNm,
      regionCd: company.regionCd,
      regionNm: company.regionNm,

      // 크롤링으로 추가할 데이터 필드들
      employeeCount: null, // 사원수
      revenue: null, // 매출액 (단위: 억원)
      averageSalary: null, // 평균연봉 (단위: 만원)
      logoPath: null, // 로고 이미지 파일명

      // 추가 정보 필드들
      website: null, // 회사 홈페이지
      establishedYear: null, // 설립연도

      // 메타 정보
      crawledAt: null, // 크롤링 완료 시점
      crawlStatus: 'pending', // pending, completed, failed
      lastUpdated: new Date().toISOString(),
    }));
  }

  // 데이터 저장
  async saveData(companies) {
    const jsonData = {
      metadata: {
        totalCount: companies.length,
        lastApiSync: new Date().toISOString(),
        version: '1.0',
        description: '강소기업 데이터 - API 기본 정보 + 크롤링 확장 필드',
      },
      companies: companies,
    };

    try {
      // 디렉토리가 없으면 생성
      if (!fs.existsSync(this.dataDir)) {
        fs.mkdirSync(this.dataDir, { recursive: true });
        console.log('📁 데이터 디렉토리 생성됨');
      }

      if (!fs.existsSync(this.logosDir)) {
        fs.mkdirSync(this.logosDir, { recursive: true });
        console.log('🖼️ 로고 디렉토리 생성됨');
      }

      // JSON 파일 저장
      fs.writeFileSync(
        this.companiesFile,
        JSON.stringify(jsonData, null, 2),
        'utf8',
      );
      console.log(`💾 ${this.companiesFile} 파일 저장 완료!`);

      return jsonData;
    } catch (error) {
      console.error('❌ 파일 저장 실패:', error);
      throw error;
    }
  }

  // 메인 실행 함수
  async initialize() {
    try {
      console.log('🎯 강소기업 데이터 초기화 시작!');
      console.log('⚙️ API Key:', this.apiKey ? '설정됨' : '❌ 설정되지 않음');

      if (!this.apiKey) {
        throw new Error(
          'VITE_SMALLGIANTS_API_KEY 환경변수가 설정되지 않았습니다.',
        );
      }

      console.log('📡 API 호출 시작.....');
      // 1. API에서 전체 데이터 가져오기
      const allCompanies = await this.fetchAllCompanies();

      // 2. 확장된 구조로 변환 (중복 제거 포함)
      const transformedData = this.transformApiData(allCompanies);

      // 3. 파일로 저장
      const savedData = await this.saveData(transformedData);

      console.log('✨ 초기화 완료!');
      console.log(`📊 총 ${savedData.companies.length}개 회사 데이터 저장됨`);
      console.log(`📄 파일 위치: ${this.companiesFile}`);

      return savedData;
    } catch (error) {
      console.error('💥 초기화 실패:', error.message);
      process.exit(1);
    }
  }

  // 딜레이 함수 (더 이상 필요 없음)
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// 스크립트 실행
async function main() {
  console.log('🚀 main 함수 시작');
  const initializer = new SmallGiantsDataInitializer();
  await initializer.initialize();
}

// 항상 실행
main().catch((error) => {
  console.error('💥 에러 발생:', error);
  process.exit(1);
});
