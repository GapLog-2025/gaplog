import { useParams } from 'react-router-dom';
import { emotionLogs } from './data/CareList';
import useHandleBack from './hook/handleback';
import { MoveButton, EditButton, DeleteButton } from '@/components/Button';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { themeColorMap, emotionColorMap } from '@/types/emotion';
import Tag from '@/components/Tag';
import WeatherIcon from './ui/Weekly/WeatherIcon';
import formatMinutesToTimeString from '@/utils/formatMinutesToTimeString';

export default function CareDetailSection() {
  const { id } = useParams();
  const careId = parseInt(id ?? '', 10);
  const log = emotionLogs.find((item) => item.careId === careId);

  const handleback = useHandleBack();

  if (!log) return <p>존재하지 않는 기록입니다.</p>;

  const dateObj = new Date(log.createdAt);
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleDateString('ko-KR', { weekday: 'short' }); // '월', '화' 등
  const tagType = emotionColorMap[log.emotion];
  const theme = themeColorMap[tagType];

  return (
    <section className="w-full flex flex-col gap-5">
      {/* 상단 제목 */}
      <div className="flex gap-4 items-center mb-2">
        <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
          <Heart className="text-white" />
        </div>
        <h1 className="typo-heading text-title leading-none">마음 챙김</h1>
      </div>

      {/* 버튼 */}
      <div className="flex justify-between items-center">
        <MoveButton onClick={handleback}>뒤로가기</MoveButton>
        <div className="flex gap-3">
          <EditButton />
          <DeleteButton />
        </div>
      </div>

      {/* 내용 카드 */}
      <Card className="flex flex-col p-8">
        <CardHeader className="flex gap-4 p-4 pr-10 items-end">
          <div
            className={`w-12 h-12 flex flex-col items-center justify-center rounded-full ${theme.point} text-white p-10 shadow-lg`}
          >
            <span className="typo-subheading leading-none">{day}</span>
            <span className="typo-strong">{weekday}</span>
          </div>
          <div className="flex flex-col gap-2 p-2">
            {/* 일기 내용 */}
            <p className="typo-subheading text-title line-clamp-1">
              {log.title}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-fit">
                <Tag type={tagType} label={log.emotion} />
              </div>
              <div className="flex gap-6 items-center">
                {/* Tag */}
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
          </div>
        </CardHeader>
        <CardContent className="mt-4 p-4 typo-text text-title">
          {log.content}
        </CardContent>
      </Card>
    </section>
  );
}
