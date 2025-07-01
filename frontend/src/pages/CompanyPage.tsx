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
import { regionList } from '@/features/Company/data/regionList';

const ITEMS_PER_PAGE = 9;

export default function CompanyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSubRegion, setSelectedSubRegion] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['LocalCompanies'],
    queryFn: getCompaniesFromLocal,
  });

  // 선택된 지역의 하위 지역들
  const subRegions = useMemo(() => {
    if (!selectedRegion) return [];
    const region = regionList.find((r) => r.code === selectedRegion);
    return region?.subRegions || [];
  }, [selectedRegion]);

  // 필터링된 회사 데이터
  const filteredCompanies = useMemo(() => {
    if (!data?.companies) return [];

    if (activeTab === 0) {
      return data.companies;
    } else if (activeTab === 1) {
      // 지역별 모아보기
      if (!selectedRegion) return data.companies;
      return data.companies.filter((company: Company) => {
        if (selectedSubRegion) {
          return company.regionCd === selectedSubRegion;
        } else {
          const region = regionList.find((r) => r.code === selectedRegion);
          if (!region) return false;
          if (company.regionCd === selectedRegion) return true;
          return region.subRegions.some((sub) => sub.code === company.regionCd);
        }
      });
    }

    return data.companies;
  }, [data?.companies, activeTab, selectedRegion, selectedSubRegion]);

  // 페이지네이션 계산
  const paginatedData = useMemo(() => {
    const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const companies = filteredCompanies.slice(startIndex, endIndex);

    return { companies, totalPages };
  }, [filteredCompanies, currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    setCurrentPage(1);

    // 탭 변경 시 필터 초기화
    if (tabIndex !== 1) {
      setSelectedRegion('');
      setSelectedSubRegion('');
    }
  };

  const handleRegionChange = (regionCode: string) => {
    setSelectedRegion(regionCode);
    setSelectedSubRegion(''); // 상위 지역 변경 시 하위 지역 초기화
    setCurrentPage(1);
  };

  const handleSubRegionChange = (subRegionCode: string) => {
    setSelectedSubRegion(subRegionCode);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="flex gap-4 items-center mb-2">
        <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
          <Building2 className="text-white" />
        </div>
        <h1 className="typo-heading text-title pt-1">강소기업 모아보기</h1>
      </div>

      <CompanyTab activeTab={activeTab} onTabChange={handleTabChange} />

      {/* 지역별 필터 */}
      {activeTab === 1 && (
        <div className="flex w-full mx-2 justify-end">
          <div className="mr-2">
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => handleRegionChange(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            >
              <option value="">시/도</option>
              {regionList.map((region) => (
                <option key={region.code} value={region.code}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mr-4">
            <select
              id="subRegion"
              value={selectedSubRegion}
              onChange={(e) => handleSubRegionChange(e.target.value)}
              disabled={!selectedRegion || subRegions.length === 0}
              className="border w-24 rounded px-2 py-1 disabled:opacity-50"
            >
              <option value="">군/구</option>
              {subRegions.map((subRegion) => (
                <option key={subRegion.code} value={subRegion.code}>
                  {subRegion.name.substring(3)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {isLoading && <LoadingSpinner />}
      {isError && <div>오류가 발생했습니다.</div>}

      {filteredCompanies && (
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
