// 강소기업 페이지
export interface Company {
  id: number;
  coNm: string;
  busiNo: string;
  reperNm: string;
  superIndTpCd: string;
  superIndTpNm: string;
  indTpCd: string;
  indTpNm: string;
  regionCd: string;
  regionNm: string;
  employeeCount: number | null;
  revenue: number | null;
  averageSalary: number | null;
  logoPath: string | null;
  website: string | null;
  establishedYear: number | null;
  crawledAt: string;
  crawlStatus: string;
  lastUpdated: string;
}

export interface CompaniesData {
  metadata: {
    totalCount: number;
    lastApiSync: string;
    version: string;
    description: string;
  };
  companies: Company[];
}
