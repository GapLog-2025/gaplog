// 강소기업 페이지
import Layout from '@/components/Layout';
import CompanyTab from '@/features/Company/CompanyTab';
import CompanyCard from '@/features/Company/CompanyCard';
import { useQuery } from '@tanstack/react-query';
import { getCompaniesFromLocal } from '@/api/companyAPI';
import { Grid } from '@mui/material';
import type { Company } from '@/types/companies';

export default function CompanyPage() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['smallGiants'],
  //   queryFn: getSmallGiantsList,
  // });
  const { data, isLoading, isError } = useQuery({
    queryKey: ['LocalCompanies'],
    queryFn: getCompaniesFromLocal,
  });

  return (
    <Layout>
      <h1>강소기업 모아보기</h1>
      <CompanyTab></CompanyTab>
      {isLoading && <div>로딩 중</div>}
      {isError && <div>오류가 발생했습니다.</div>}
      {data?.companies && (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {data.companies.map((company: Company, index: number) => (
            <Grid size={4} key={index}>
              <CompanyCard company={company} />
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
