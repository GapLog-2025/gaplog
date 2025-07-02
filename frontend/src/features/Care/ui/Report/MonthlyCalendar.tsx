import { useMemo } from 'react';
import { emotionLogs } from '../../data/CareList';
import { emotionColorMap } from '@/types/emotion';
import { Calendar } from 'lucide-react';

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

  // 날짜 배열 생성
  const dates: (Date | null)[] = useMemo(() => {
    const result: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) result.push(null);
    for (let d = 1; d <= totalDays; d++) result.push(new Date(year, month, d));
    return result;
  }, [year, month]);

  // 해당 월의 감정 로그 총합
  const totalEmotionLogsInMonth = useMemo(() => {
    return emotionLogs.filter((log) => {
      const logDate = new Date(log.createdAt);
      return logDate.getFullYear() === year && logDate.getMonth() === month;
    }).length;
  }, [year, month]);

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between items-end pb-3">
        <div className="flex items-center gap-3">
          <Calendar size={28} className="text-primary" />
          <h3 className="typo-subheading text-main">월간 캘린더</h3>
        </div>
        <p className="typo-strong text-secondary leading-none">
          {totalEmotionLogsInMonth}일 기록
        </p>
      </div>

      {/* 요일 */}
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="typo-strong text-black">
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 박스 */}
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, idx) => {
          const isSelected =
            date && selectedDate && isSameDay(date, selectedDate);

          const dateKey = date ? formatDate(date) : '';
          const emotionOnDate = emotionLogs.filter(
            (log) => log.createdAt.split('T')[0] === dateKey,
          );

          const badgeColor =
            emotionOnDate.length > 0
              ? `bg-${emotionColorMap[emotionOnDate[0].emotion]}`
              : '';

          return (
            <div
              key={idx}
              className={`relative h-14 flex items-center justify-center rounded-lg cursor-pointer ${
                date ? 'hover:bg-gray-100' : ''
              }`}
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
