// 강소기업 페이지
import Layout from '@/components/Layout';
import CompanyTab from '@/features/Company/CompanyTab';
import CompanyCard from '@/features/Company/CompanyCard';
import { useQuery } from '@tanstack/react-query';
import { getCompaniesFromLocal } from '@/api/companyAPI';
import { Grid, Pagination, Box } from '@mui/material';
import type { Company } from '@/types/companies';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Building2 } from 'lucide-react';
import { useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 12;

export default function CompanyPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['LocalCompanies'],
    queryFn: getCompaniesFromLocal,
  });

  // 페이지네이션 계산
  const paginatedData = useMemo(() => {
    if (!data?.companies) return { companies: [], totalPages: 0 };

    const totalPages = Math.ceil(data.companies.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const companies = data.companies.slice(startIndex, endIndex);

    return { companies, totalPages };
  }, [data?.companies, currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="flex gap-4 items-center mb-2">
        <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
          <Building2 className="text-white" />
        </div>
        <h1 className="typo-heading text-title pt-1">강소기업 모아보기</h1>
      </div>

      <CompanyTab />

      {isLoading && <LoadingSpinner />}
      {isError && <div>오류가 발생했습니다.</div>}

      {data?.companies && (
        <>
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              minHeight: '600px',
            }}
          >
            {paginatedData.companies.map((company: Company, index: number) => (
              <Grid size={4} key={`${currentPage}-${index}`}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>

          {paginatedData.totalPages > 1 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
                mb: 2,
              }}
            >
              <Pagination
                count={paginatedData.totalPages}
                page={currentPage}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={1}
              />
            </Box>
          )}
        </>
      )}
    </Layout>
  );
}
