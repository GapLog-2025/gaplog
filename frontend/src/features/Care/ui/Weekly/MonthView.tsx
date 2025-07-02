import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthViewProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  onSelectDate: (date: Date) => void;
  onChangeView: () => void;
}

export default function MonthView({
  currentDate,
  setCurrentDate,
  onSelectDate,
  onChangeView,
}: MonthViewProps) {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const startOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dates: (number | null)[] = [
    ...Array(startOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handlePrev = () => {
    const prev = new Date(currentDate);
    prev.setMonth(month - 1);
    setCurrentDate(prev);
  };

  const handleNext = () => {
    const next = new Date(currentDate);
    next.setMonth(month + 1);
    setCurrentDate(next);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="rounded-full p-2 hover:bg-primary-primary-background"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={onChangeView}
          className="typo-strong text-title py-2 px-4 rounded-lg hover:bg-primary-primary-background"
        >
          {year}년 {month + 1}월
        </button>
        <button
          onClick={handleNext}
          className="rounded-full p-2 hover:bg-primary-primary-background"
        >
          <ChevronRight size={22} />
        </button>
      </div>
      <div className="grid grid-cols-7 typo-small text-main">
        {days.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 typo-text text-title">
        {dates.map((d, i) => (
          <button
            key={i}
            disabled={!d}
            onClick={() => d && onSelectDate(new Date(year, month, d))}
            className={`py-1 rounded ${d ? 'hover:bg-primary-primary-background' : ''}`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
