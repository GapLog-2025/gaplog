import { emotionLogs } from '../data/CareList';
import { emotionColorMap } from '@/types/emotion';

interface MonthlyEmotionCalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function MonthlyEmotionCalendar({
  currentDate,
  selectedDate,
  setSelectedDate,
}: MonthlyEmotionCalendarProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const dates: (Date | null)[] = [];
  for (let i = 0; i < startDay; i++) dates.push(null);
  for (let d = 1; d <= totalDays; d++) dates.push(new Date(year, month, d));

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="font-semibold text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, idx) => {
          const isSelected =
            date && selectedDate && isSameDay(date, selectedDate);

          const emotionOnDate = emotionLogs.filter(
            (log) =>
              log.createdAt.split('T')[0] === formatDate(date ?? new Date()),
          );

          const badgeColor =
            emotionOnDate.length > 0
              ? `bg-${emotionColorMap[emotionOnDate[0].emotion]}`
              : '';

          return (
            <div
              key={idx}
              className={`relative h-16 flex items-center justify-center rounded-lg cursor-pointer ${date ? 'hover:bg-gray-100' : ''}`}
              onClick={() => date && setSelectedDate(date)}
            >
              {date && (
                <>
                  {isSelected ? (
                    <div className="bg-gd-point-main flex justify-center items-center w-10 h-10 rounded-full">
                      <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-title typo-strong">
                        {date.getDate()}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center w-12 h-12 rounded-full">
                      <div className="w-8 h-8 flex justify-center items-center text-secondary typo-text">
                        {date.getDate()}
                      </div>
                    </div>
                  )}
                  <span
                    className={`absolute top-1 right-1 w-2 h-2 rounded-full ${badgeColor}`}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
