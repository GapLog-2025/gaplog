type Industry = {
  name: string;
  count: number;
};

const industries: Industry[] = [
  { name: '전문, 과학 및 기술 서비스업', count: 50 },
  { name: '도매 및 소매업', count: 35 },
  { name: '정보통신업', count: 82 },
  { name: '사업시설 관리, 사업 지원 및 임대 서비스업', count: 2 },
  { name: '수도, 하수 및 폐기물 처리, 원료 재생업', count: 1 },
  { name: '교육 서비스업', count: 1 },
  { name: '보건업 및 사회복지 서비스업', count: 2 },
  { name: '운수 및 창고업', count: 1 },
  { name: '예술, 스포츠 및 여가관련 서비스업', count: 1 },
  { name: '건설업', count: 1 },
];

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

const sortedIndustries = [...industries].sort((a, b) => b.count - a.count);

export default function PopularIndustryCard() {
  return (
    <div className="rounded-xl border bg-white p-6 border-gray-200">
      <h2 className="text-md font-semibold text-title mb-4">인기 산업군</h2>
      <ul className="space-y-2">
        {sortedIndustries.slice(0, 5).map(({ name, count }) => (
          <li key={name} className="flex justify-between items-center">
            <span className="text-sm text-secondary font-medium">{name}</span>
            <span
              className="text-white text-sm px-2 py-0.5 rounded-full w-[50px] text-center font-normal"
              style={{ backgroundColor: colors[name] || colors['기타'] }}
            >
              {count}개
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
