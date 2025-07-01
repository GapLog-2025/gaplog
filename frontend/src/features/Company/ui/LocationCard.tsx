import { useMemo, useState } from 'react';

type Region = {
  name: string;
  count: number;
};

const regions: Region[] = [
  { name: '서울', count: 109 },
  { name: '경기', count: 78 },
  { name: '대구', count: 17 },
  { name: '부산', count: 13 },
  { name: '대전', count: 13 },
  { name: '경남', count: 9 },
  { name: '충남', count: 10 },
  { name: '인천', count: 5 },
  { name: '울산', count: 5 },
  { name: '충북', count: 5 },
  { name: '광주', count: 4 },
  { name: '강원', count: 3 },
  { name: '전남', count: 3 },
  { name: '경북', count: 3 },
  { name: '제주', count: 2 },
  { name: '전북', count: 1 },
];

export default function LocationCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleItems = 8; // 처음에 보여줄 아이템 수

  function getRandomColor(seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 60%)`;
  }

  const sortedRegions = useMemo(
    () => [...regions].sort((a, b) => b.count - a.count),
    [],
  );

  const regionColors = useMemo(() => {
    const colors: Record<string, string> = {};
    sortedRegions.forEach(({ name }) => {
      colors[name] = getRandomColor(name);
    });
    return colors;
  }, [sortedRegions]);

  const visibleRegions = isExpanded
    ? sortedRegions
    : sortedRegions.slice(0, maxVisibleItems);

  const shouldShowButton = sortedRegions.length > maxVisibleItems;

  return (
    <div className="rounded-xl border bg-white p-6 border-gray-200 relative">
      <h2 className="text-md font-semibold text-gray-900 mb-4">인기 지역</h2>

      {/* 내용 영역 */}
      <div className="overflow-hidden">
        <ul className="space-y-2">
          {visibleRegions.map(({ name, count }) => (
            <li key={name} className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{name}</span>
              <span
                className="text-white font-normal text-sm px-2 py-0.5 rounded-full w-[53px] text-center"
                style={{ backgroundColor: regionColors[name] }}
              >
                {count}개
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 하단 버튼 */}
      {shouldShowButton && (
        <div
          className={`${!isExpanded ? 'absolute bottom-0 left-0 w-full h-20' : 'mt-4'} flex items-end justify-center`}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm text-primary-active font-medium ${!isExpanded ? 'pb-2' : ''} hover:text-primary transition-colors`}
          >
            {isExpanded ? '접기' : '모든지역 보기'}
          </button>
        </div>
      )}
    </div>
  );
}
