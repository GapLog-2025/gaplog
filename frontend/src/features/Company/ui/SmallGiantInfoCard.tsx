import { Circle } from 'lucide-react';

export default function SmallGiantInfoCard() {
  const abilities = [
    '임금 등 보수',
    '고용 안정',
    '일생활 균형',
    '교육 훈련',
    '혁신 역량',
  ];
  return (
    <div className="rounded-xl border bg-white p-6 border-gray-200">
      <h2 className="text-md font-semibold text-md text-title mb-4">
        청년일자리 강소기업이란?
      </h2>
      <p className="text-sm/6 text-secondary mb-4">
        고용노동부가 선정한 임금, 일생활균형, 고용안정이 우수하여 청년들이
        근무할만한 중소기업을 의미합니다. 고용노동부에서는 좋은 일자리로의
        취업을 유도하기 위해 2016년부터 매년 강소기업을 선정해오고 있습니다.
        선정 기준은 다음과 같습니다.
      </p>
      <ul className="text-secondary font-medium text-sm">
        {abilities.map((item, index) => (
          <li key={index} className="flex gap-3 items-center my-1">
            <Circle className="w-1.5 h-1.5 text-primary fill-current" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
