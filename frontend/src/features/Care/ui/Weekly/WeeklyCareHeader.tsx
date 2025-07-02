import { useState, useRef, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { MoveButton } from '@/components/Button';
import WeeklyDateDropdown from './WeeklyDateDropdown';

interface WeeklyCareHeaderProps {
  currentDate: Date;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export function WeeklyCareHeader({
  currentDate,
  selectedDate,
  setSelectedDate,
}: WeeklyCareHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="w-full flex flex-col gap-4 relative pb-4">
      <div className="flex justify-between items-center w-full pl-2">
        <h2 className="typo-subheading text-title select-none">
          주간 감정 일기
        </h2>
        <div className="relative" ref={dropdownRef}>
          <MoveButton onClick={() => setShowDropdown((prev) => !prev)}>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              날짜 선택
            </div>
          </MoveButton>
          {/* 날짜 선택 드롭 다운 */}
          {showDropdown && (
            <div className="absolute top-full right-0 z-10 mt-2">
              <WeeklyDateDropdown
                selectedDate={selectedDate ?? currentDate}
                setSelectedDate={(date) => {
                  setSelectedDate(date);
                  setShowDropdown(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      {/* 설명 */}
      <div className="flex flex-col gap-1 px-2">
        <p className="text-main typo-text">
          이번 주 감정일기를 한눈에 모아봤어요!
        </p>
        <p className="text-main typo-text">
          어떤 하루를 보냈는지, 나만 볼 수 있는 공간에서 편하게 돌아보세요.
        </p>
      </div>
    </div>
  );
}
