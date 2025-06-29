import { TagButton } from '@/components/Button';
import { X, RotateCcw } from 'lucide-react';

export default function FilterList({
  selectedTags,
  setSelectedTags,
}: {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  //선택된 태그 리스트 초기화
  // 태그 리스트
  const categoryTags = [
    'IT/개발',
    '디자인',
    '마케팅/광고',
    '경영/사무',
    '무역/유통',
    '영업',
    '생산/제조',
    '건설',
    '금융',
  ];
  const etcTags = ['전공자', '비전공자'];
  const gapPeriodTags = ['6개월 이하', '1년 이하', '3년 이하'];
  const gradeTags = ['2.0이하', '2.5이상', '3.0이상', '3.5이상', '4.0이상'];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="flex flex-col gap-4 px-5">
      {/* 카테고리 태그 */}
      <div className="w-full flex gap-5 items-center">
        <span className="typo-strong text-black">카테고리</span>
        <div className="flex gap-1">
          {categoryTags.map((tag) => (
            <TagButton
              key={tag}
              isActive={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </div>
      </div>

      {/* 기타 & 공백기간 태그 */}
      <div className="w-full flex gap-12">
        {/* 기타 */}
        <div className="flex gap-5 items-center">
          <span className="typo-strong text-black">공백기간</span>
          <div className="flex gap-1">
            {etcTags.map((tag) => (
              <TagButton
                key={tag}
                isActive={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>
        </div>
        {/* 공백기간 */}
        <div className="flex gap-5 items-center">
          <span className="typo-strong text-black">태그</span>
          <div className="flex gap-1">
            {gapPeriodTags.map((tag) => (
              <TagButton
                key={tag}
                isActive={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>
        </div>
      </div>

      {/* 학점 태그 */}
      <div className="w-full flex gap-12 items-center">
        <span className="typo-strong text-black">학점</span>
        <div className="flex gap-1">
          {gradeTags.map((tag) => (
            <TagButton
              key={tag}
              isActive={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </div>
      </div>

      {/* 선택된 태그 리스트 */}
      {selectedTags.length > 0 && (
        <div className="flex items-center gap-5">
          <button
            className="w-[28px] h-[28px] flex items-center justify-center rounded-full hover:bg-gray-100"
            onClick={() => setSelectedTags([])}
          >
            <RotateCcw size={18} className="text-main" />
          </button>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <TagButton
                key={tag}
                isActive={true}
                onClick={() =>
                  setSelectedTags((prev) => prev.filter((t) => t !== tag))
                }
              >
                {tag}
                <X size={14} />
              </TagButton>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
