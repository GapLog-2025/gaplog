import { ChevronLeft, ChevronRight } from 'lucide-react';

interface YearViewProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  onSelectMonth: (month: number) => void;
  onChangeView: () => void;
}

export default function YearView({
  currentDate,
  setCurrentDate,
  onSelectMonth,
  onChangeView,
}: YearViewProps) {
  const year = currentDate.getFullYear();
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center text-secondary">
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
          {year}
        </button>
        <button
          onClick={handleNext}
          className="rounded-full p-2 hover:bg-primary-primary-background"
        >
          <ChevronRight size={22} />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center typo-small text-main">
        {months.map((label, idx) => (
          <button
            key={label}
            onClick={() => onSelectMonth(idx)}
            className="py-1 rounded hover:bg-gray-100"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
