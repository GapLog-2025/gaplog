import { useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';

import { MessageSquare, PenSquare } from 'lucide-react';
import { ActionButton } from '@/components/Button';
import SearchAndSortBar from '../../components/SearchAndSortBar';
import FilterList from '../../components/FilterList';

import NoDataContent from '../GapReview/ui/GapReviewList/NoDataContent';

import { sampleMentorList } from './data/mentorList';
import {
  filterMentorsByTags,
  matchMentorByKeyword,
} from './utils/filterMentor';

import MentorCard from './ui/MentorCard';

const colorThemes = ['primary', 'skyblue', 'yellow', 'green'] as const;
const ITEMS_PER_PAGE = 4;

export default function MentorListSection() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOption, setSortOption] = useState('최신순');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // 필터/정렬/검색 적용된 전체 데이터
  const filteredData = useMemo(() => {
    let base = sortOption === '최신순' ? sampleMentorList : sampleMentorList;

    if (selectedTags.length > 0) {
      base = filterMentorsByTags(base, selectedTags);
    }

    if (searchKeyword.trim()) {
      const keyword = searchKeyword.trim().toLowerCase();
      base = base.filter((review) => matchMentorByKeyword(review, keyword));
    }

    return base;
  }, [sortOption, selectedTags, searchKeyword]);

  // 필터/검색 변경 시 페이지 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption, selectedTags, searchKeyword]);

  // 현재 페이지 데이터만 추출
  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  return (
    <section className="w-full flex flex-col gap-10">
      {/* 제목 */}
      <div className="w-full flex justify-between">
        <div className="flex gap-4 items-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
            <MessageSquare className="text-white" />
          </div>
          <h1 className="typo-heading text-title leading-none">
            멘토에게 질문하기
          </h1>
        </div>
        <ActionButton onClick={() => navigate('/mentoring/write')}>
          <div className="flex gap-3 items-center">
            <PenSquare />
            <span className="leading-none">질문하기</span>
          </div>
        </ActionButton>
      </div>

      {/* 검색 & 정렬 & 필터 */}
      <SearchAndSortBar
        sortOption={sortOption}
        onSearch={setSearchKeyword}
        onSortChange={setSortOption}
        onFilterToggle={setIsFilterOpen}
      />

      {isFilterOpen && (
        <FilterList
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}

      {/* 멘토 관련 리스트 */}
      <div className="flex flex-col gap-6">
        {currentPageData.length > 0 ? (
          currentPageData.map((mentor, i) => (
            <MentorCard
              key={mentor.mentorId}
              article={mentor}
              type={colorThemes[i % colorThemes.length]}
            />
          ))
        ) : (
          <NoDataContent
            onClick={() => {
              setSearchKeyword('');
              setSelectedTags([]);
            }}
          />
        )}
      </div>
    </section>
  );
}
