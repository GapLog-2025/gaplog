import { useNavigate } from 'react-router-dom';
import Divider from '@/components/Divider';
import Tag from '@/components/Tag';
import {
  type EmotionLog,
  themeColorMap,
  emotionColorMap,
} from '@/types/emotion';
import { BookDashed, ArrowRight } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
import formatMinutesToTimeString from '@/utils/formatMinutesToTimeString';

interface WeeklyDiaryListProps {
  weekDates: Date[];
  emotionLogs: EmotionLog[];
}

export default function WeeklyDiaryList({
  weekDates,
  emotionLogs,
}: WeeklyDiaryListProps) {
  const navigate = useNavigate();

  const formatDateToYMD = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate(),
    ).padStart(2, '0')}`;

  const weekDateStrings = weekDates.map(formatDateToYMD);

  const filteredLogs = emotionLogs.filter((log) =>
    weekDateStrings.includes(formatDateToYMD(new Date(log.createdAt))),
  );

  if (filteredLogs.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-4 typo-subheading text-secondary ">
        <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-200 rounded-full ">
          <BookDashed size={48} className="text-main" />
        </div>
        <p className="leading-none">작성된 감정 일기가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {filteredLogs.map((log) => {
        const dateObj = new Date(log.createdAt);
        const day = dateObj.getDate();
        const weekday = ['일', '월', '화', '수', '목', '금', '토'][
          dateObj.getDay()
        ];

        const tagType = emotionColorMap[log.emotion];
        const theme = themeColorMap[tagType];

        return (
          <button
            key={log.careId}
            className="group relative flex gap-8 p-8 rounded-lg border border-border shadow-sm bg-white text-start hover:shadow-lg"
            onClick={() => navigate(`/care/${log.careId}`)}
          >
            {/* Hover 시 오른쪽 상단 아이콘 */}
            <div className="absolute top-4 right-4 flex flex-col items-center gap-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={20} />
              <p className="typo-small leading-none">이동하기</p>
            </div>

            {/* 날짜 정보 */}
            <div
              className={`w-12 h-12 flex flex-col items-center justify-center rounded-full ${theme.point} text-white p-10 shadow-lg`}
            >
              <span className="typo-subheading leading-none">{day}</span>
              <span className="typo-strong">{weekday}</span>
            </div>

            <div className="flex flex-col gap-4 p-2 pr-10">
              <div className="flex flex-col gap-2">
                {/* 일기 내용 */}
                <p className="typo-subheading text-title line-clamp-1">
                  {log.title}
                </p>
                <div className="w-fit">
                  <Tag type={tagType} label={log.emotion} />
                </div>
              </div>
              <p className="typo-text text-secondary line-clamp-2 ">
                {log.content}
              </p>

              <Divider />

              {/* 다이어리 관련 태그 */}

              <div className="flex gap-6 items-center">
                <div className="flex gap-4 typo-text text-main">
                  <p className="typo-strong">날씨</p>
                  <WeatherIcon
                    weather={log.weather}
                    size={20}
                    className="text-main typo-text"
                  />
                </div>
                <div className="flex gap-4 typo-text text-main">
                  <p className="typo-strong">수면 시간</p>
                  <p>{formatMinutesToTimeString(log.sleeptime)}</p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
