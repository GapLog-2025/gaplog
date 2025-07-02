import {
  type Emotion,
  type EmotionLog,
  emotionColorMap,
  themeColorMap,
} from '@/types/emotion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeeklyCalendarProps {
  weekDates: Date[];
  selectedDate: Date;
  emotionLogs: EmotionLog[];
  onSelectDate: (date: Date) => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}

function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getWeekdayKor(date: Date) {
  return ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
}

function getEmotionForDate(date: Date, logs: EmotionLog[]): Emotion | '미작성' {
  const targetDateStr = formatDate(date);
  const log = logs.find(
    (log) => formatDate(new Date(log.createdAt)) === targetDateStr,
  );
  return log?.emotion ?? '미작성';
}

export default function WeeklyCalendar({
  weekDates,
  selectedDate,
  emotionLogs,
  onSelectDate,
  onPrevWeek,
  onNextWeek,
}: WeeklyCalendarProps) {
  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
  return (
    <div className="w-full flex flex-col gap-2">
      {/* Title + Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-icon">
            <i className="lucide lucide-calendar" />
          </span>
          <p className="typo-subheading text-title">주간 캘린더</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onPrevWeek}
            className="p-1 rounded hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNextWeek}
            className="p-1 rounded hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Dates */}
      <div className="flex gap-4 justify-center overflow-auto py-2">
        {weekDates.map((date) => {
          const day = date.getDate();
          const weekday = getWeekdayKor(date);
          const emotion = getEmotionForDate(date, emotionLogs);
          const isSelected = isSameDate(date, selectedDate);
          const tagType =
            emotion !== '미작성' ? emotionColorMap[emotion] : undefined;
          const theme = tagType ? themeColorMap[tagType] : undefined;

          return (
            <button
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              className={`flex flex-col items-center justify-centers w-24 h-24 rounded-xl shadow-lg p-4
                ${isSelected ? 'border-2 border-primary-active' : ''}
                ${emotion !== '미작성' ? `${theme?.point} text-white border` : 'bg-background text-secondary border border-border'}
              `}
            >
              <p className="typo-small">{weekday}</p>
              <p className="typo-strong">{day}</p>
              <p className="typo-text">{emotion}</p>
            </button>
          );
        })}
      </div>

      {/* Tip */}
      <p className="typo-small text-main text-right pt-2">
        * 날짜를 클릭하면 해당 일기로 이동합니다.
      </p>
    </div>
  );
}
