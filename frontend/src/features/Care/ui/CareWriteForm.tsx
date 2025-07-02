import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import {
  CalendarDays,
  Smile,
  CloudSun,
  Type,
  FileText,
  Moon,
} from 'lucide-react';
import {
  type Emotion,
  type WeatherType,
  emotionColorMap,
  themeColorMap,
} from '@/types/emotion';
import WeatherIcon from './Weekly/WeatherIcon';

interface CareWriteFormProps {
  date: string;
  onDateChange: (v: string) => void;
  emotion: Emotion;
  onEmotionChange: (v: Emotion) => void;
  weather: WeatherType;
  onWeatherChange: (v: WeatherType) => void;
  title: string;
  content: string;
  onTitleChange: (v: string) => void;
  onContentChange: (v: string) => void;
  sleepHour: number;
  sleepMinute: number;
  onSleepHourChange: (v: number) => void;
  onSleepMinuteChange: (v: number) => void;
}

const emotionOptions: Emotion[] = ['기쁨', '평온', '불안', '슬픔', '화남'];
const weatherOptions: WeatherType[] = [
  '맑음',
  '흐림',
  '비',
  '번개',
  '눈',
  '바람',
];

export default function CareWriteForm({
  date,
  onDateChange,
  emotion,
  onEmotionChange,
  weather,
  onWeatherChange,
  title,
  content,
  onTitleChange,
  onContentChange,
  sleepHour,
  sleepMinute,
  onSleepHourChange,
  onSleepMinuteChange,
}: CareWriteFormProps) {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-6">
          {/* 왼쪽 카드: 날짜 + 수면시간 */}
          <Card className="flex-2">
            <CardHeader>
              <h1 className="typo-subheading text-title">기본 정보</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 py-8">
              {/* 날짜 입력 */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 typo-text text-title">
                  <CalendarDays size={20} className="text-primary" />
                  날짜
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => onDateChange(e.target.value)}
                  className="border border-border rounded px-4 py-2 focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* 수면 시간 */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 typo-text text-title">
                  <Moon size={20} className="text-primary" />
                  수면 시간
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={24}
                    value={sleepHour}
                    onChange={(e) => onSleepHourChange(Number(e.target.value))}
                    className="w-20 border border-border rounded px-3 py-2 text-sm text-center"
                    placeholder="0"
                  />
                  <span className="text-sm text-gray-600">시간</span>
                  <input
                    type="number"
                    min={0}
                    max={59}
                    value={sleepMinute}
                    onChange={(e) =>
                      onSleepMinuteChange(Number(e.target.value))
                    }
                    className="w-20 border border-border rounded px-3 py-2 text-sm text-center"
                    placeholder="0"
                  />
                  <span className="text-sm text-gray-600">분</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 오른쪽 카드: 감정 + 날씨 */}
          <Card className="flex-1">
            <CardHeader>
              <h1 className="typo-subheading text-title">상세 정보</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 py-8">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 typo-text text-title">
                  <Smile size={20} className="text-primary" />
                  감정
                </label>
                <div className="flex flex-wrap gap-4">
                  {emotionOptions.map((item) => {
                    const tagType = emotionColorMap[item];
                    const theme = themeColorMap[tagType];
                    const isSelected = emotion === item;

                    return (
                      <button
                        key={item}
                        onClick={() => onEmotionChange(item)}
                        className={`px-6 py-2 rounded-full border flex items-center justify-center
            transition-all text-sm font-medium
            ${
              isSelected
                ? `${theme.point} text-white border-transparent`
                : 'border-border text-gray-600 hover:bg-gray-100'
            }
          `}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 날씨 */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 typo-text text-title">
                  <CloudSun size={20} className="text-primary" />
                  날씨
                </label>
                <div className="flex flex-wrap gap-4">
                  {weatherOptions.map((item) => {
                    const isSelected = weather === item;

                    return (
                      <button
                        key={item}
                        onClick={() => onWeatherChange(item)}
                        className={`px-4 py-2 rounded-full border flex items-center gap-2
            transition-all typo-small
            ${
              isSelected
                ? 'bg-primary text-white border-transparent'
                : 'border-border text-gray-600 hover:bg-gray-100'
            }
          `}
                      >
                        <WeatherIcon weather={item} size={18} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 제목 */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <Type size={24} className="text-primary" /> 제목
          </h1>
        </CardHeader>
        <CardContent>
          <textarea
            ref={titleRef}
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="오늘의 마음을 요약하는 제목을 입력해주세요"
            rows={1}
            className="w-full overflow-hidden resize-none px-4 py-4 border border-border rounded focus:outline-none focus:border-primary leading-nomal typo-heading text-title"
          />
        </CardContent>
      </Card>

      {/* 내용 */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <FileText size={24} className="text-primary" /> 내용
          </h1>
        </CardHeader>
        <CardContent>
          <textarea
            ref={contentRef}
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="마음의 상태를 자유롭게 표현해주세요"
            rows={4}
            className="w-full overflow-hidden resize-none p-4 border border-border rounded focus:outline-none focus:border-primary leading-nomal typo-text text-black whitespace-pre-wrap"
          />
        </CardContent>
      </Card>
    </div>
  );
}
