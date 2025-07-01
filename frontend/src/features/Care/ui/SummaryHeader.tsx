import { useState, useRef, useEffect } from 'react';

import { ChevronLeft, ChevronDown, ChevronRight } from 'lucide-react';
import SelectMonthlyDropDown from './SelectedMonthlyDropDown';
import EmotionSummary from './Report/EmotionSummary';
import { type EmotionLog } from '@/types/emotion';

interface SummaryHeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  emotionLogs: EmotionLog[];
}
export function SummaryHeader({
  currentDate,
  setCurrentDate,
  emotionLogs,
}: SummaryHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const dropdownRef = useRef<HTMLDivElement>(null);

  const formatMonthly = (date: Date) => {
    return date.toLocaleString('en-KR', {
      month: 'long',
      year: 'numeric',
    });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // 이전 달로 이동
  const handlePrevMonth = () => {
    const prev = new Date(currentDate);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentDate(prev);
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + 1);
    setCurrentDate(next);
  };

  return (
    <div className="w-full flex flex-col gap-4 relative pb-4">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-start rounded-lg p-2 hover:bg-gray-100/60"
        >
          <div className="flex items-center gap-2">
            <h2 className="typo-subheading text-title select-none">
              {formatMonthly(currentDate)}
            </h2>
            <ChevronDown size={24} className="text-secondary" />
          </div>
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevMonth}
            className="rounded-full p-2 hover:bg-gray-100/60"
          >
            <ChevronLeft size={24} className="text-secondary" />
          </button>
          <button
            onClick={handleNextMonth}
            className="rounded-full p-2 hover:bg-gray-100/60"
          >
            <ChevronRight size={24} className="text-secondary" />
          </button>
        </div>
      </div>

      {showDropdown && (
        <SelectMonthlyDropDown
          ref={dropdownRef}
          currentDate={currentDate}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          setCurrentDate={setCurrentDate}
          setShowDropdown={setShowDropdown}
        />
      )}

      <div className="flex flex-col gap-1 px-2">
        <p className="text-main typo-text">
          한 달 동안 마음에 담은 감정들을 정리했어요.
        </p>
        <p className="text-main typo-text">
          내게 가장 자주 찾아온 감정은 무엇이었을까요?
        </p>
      </div>
      <div className="flex justify-center">
        <EmotionSummary logs={emotionLogs} currentDate={currentDate} />
      </div>
    </div>
  );
}
