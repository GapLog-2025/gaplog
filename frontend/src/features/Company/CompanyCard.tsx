import { Card, CardContent, Box, Chip, Avatar, Stack } from '@mui/material';
import {
  Business,
  Person,
  LocationOn,
  Group,
  Language,
} from '@mui/icons-material';
import type { Company } from '@/types/companies';

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  // 회사명 첫 글자로 아바타 생성
  const getCompanyInitial = (name: string) => {
    let cleanedName = name.replace('(주)', '').replace('주식회사', '').trim();
    return cleanedName.charAt(0);
  };

  // 업종에 따른 색상 지정
  const getIndustryColor = () => {
    const colors: Record<string, string> = {
      제조업: '#8B5CF6',
      '전문, 과학 및 기술 서비스업': '#F59E0C',
      '도매 및 소매업': '#EC4899',
      정보통신업: '#22C55E',
      '사업시설 관리, 사업 지원 및 임대 서비스업': '#06B6D4',
      '수도, 하수 및 폐기물 처리, 원료 재생업': '#0891b2',
      '교육 서비스업': '#ca8a04',
      '보건업 및 사회복지 서비스업': '#db2777',
      '운수 및 창고업': '#ea580c',
      '예술, 스포츠 및 여가관련 서비스업': '#e11d48',
      건설업: '#d97706',
      기타: '#9c27b0',
    };
    return colors[company.superIndTpNm] || colors['기타'];
  };

  const truncateWebsite = (url: string) => {
    if (url.length <= 15) return url;
    return url.substring(0, 15) + '...';
  };

  return (
    <Card
      sx={{
        margin: 1,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: company.logoPath ? 'transparent' : getIndustryColor(),
              width: 48,
              height: 48,
              mr: 1,
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            src={company.logoPath || undefined}
          >
            {!company.logoPath && getCompanyInitial(company.coNm)}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <p className="text-lg text-title font-medium">{company.coNm}</p>

            <Chip
              label={company.superIndTpNm}
              size="small"
              sx={{
                bgcolor: getIndustryColor(),
                color: 'white',
                fontSize: '0.6rem',
                maxWidth: '100%',
                '& .MuiChip-label': {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                },
              }}
            />
          </Box>
        </Box>

        <Stack sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Person sx={{ fontSize: 18 }} className="mr-1 text-secondary" />
            <p className="text-md text-title">
              <span>대표자:</span> {company.reperNm}
            </p>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Business sx={{ fontSize: 18 }} className="mr-1 text-secondary" />
            <p className="text-md text-title">
              <span>업종:</span> {company.indTpNm}
            </p>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ fontSize: 18 }} className="mr-1 text-secondary" />
            <p className="text-md text-title">
              <span>지역:</span> {company.regionNm}
            </p>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Group sx={{ fontSize: 18 }} className="mr-1 text-secondary" />
            <p className="text-md text-title">
              <span>직원 수:</span> {company.employeeCount || '-'}명
            </p>
          </Box>

          {company.website && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Language sx={{ fontSize: 18 }} className="mr-1 text-secondary" />
              <p className="text-md text-title">
                <span>홈페이지:</span>{' '}
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-title hover:text-primary hover:underline cursor-pointer"
                  title={company.website}
                >
                  {truncateWebsite(company.website)}
                </a>
              </p>
            </Box>
          )}
        </Stack>

        <div className="mt-auto">
          <hr className="my-1" />
          <span className="text-disabled text-sm">
            사업자번호: {company.busiNo}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
