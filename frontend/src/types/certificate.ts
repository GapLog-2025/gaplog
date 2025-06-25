export type CertificateProps = {
  name: string; // 자격증 이름
  description: string; // 자격증 설명
  url: string; // 상세 정보 URL
  examDate: string; // 시험일
  applyPeriod: {
    start: string;
    end: string;
  };
  popularity: number; // 인기도 (%)
};
