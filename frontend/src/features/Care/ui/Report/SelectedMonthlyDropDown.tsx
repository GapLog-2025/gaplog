import { ChevronLeft, ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';

interface SelectMonthlyDropDownProps {
  currentDate: Date;
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  setCurrentDate: (date: Date) => void;
  setShowDropdown: (show: boolean) => void;
}

// forwardRef로 컴포넌트 래핑
const SelectMonthlyDropDown = forwardRef<
  HTMLDivElement,
  SelectMonthlyDropDownProps
>(
  (
    {
      currentDate,
      selectedYear,
      setSelectedYear,
      setCurrentDate,
      setShowDropdown,
    },
    ref,
  ) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return (
      <div
        ref={ref}
        className="absolute top-12 left-1 z-10 bg-background shadow-lg rounded-lg border p-4 flex flex-col gap-6"
      >
        {/* 연도 선택 헤더 */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedYear((prev) => prev - 1)}
            className="p-1 hover:bg-primary-primary-background rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="typo-subheading text-title select-none">
            {selectedYear}
          </span>
          <button
            onClick={() => setSelectedYear((prev) => prev + 1)}
            className="p-1 hover:bg-primary-primary-background rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 월 선택 */}
        <div className="grid grid-cols-4 gap-2">
          {months.map((month, index) => {
            const isSelected =
              currentDate.getFullYear() === selectedYear &&
              currentDate.getMonth() === index;

            return (
              <button
                key={month}
                className={`py-2 px-3 rounded text-left hover:bg-gray-100 ${
                  isSelected
                    ? 'text-primary typo-strong bg-primary-primary-background'
                    : 'text-main typo-text'
                }`}
                onClick={() => {
                  const newDate = new Date(selectedYear, index, 1);
                  setCurrentDate(newDate);
                  setShowDropdown(false);
                }}
              >
                {month}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

export default SelectMonthlyDropDown;
