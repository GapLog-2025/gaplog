import { useState } from 'react';
import { Heart, PenSquare } from 'lucide-react';
import useHandleBack from './hook/handleback';
import { useNavigate } from 'react-router-dom';
import CareWriteForm from './ui/CareWriteForm';
import { type Emotion, type WeatherType } from '@/types/emotion';
import { ActionButton, MoveButton } from '@/components/Button';

export default function CareWriteSection() {
  const handleBack = useHandleBack();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [emotion, setEmotion] = useState<Emotion | undefined>(undefined);
  const [weather, setWeather] = useState<WeatherType | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sleepHour, setSleepHour] = useState(0);
  const [sleepMinute, setSleepMinute] = useState(0);

  const isFormValid =
    date &&
    emotion &&
    weather &&
    title.trim().length > 0 &&
    content.trim().length > 0;

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-6">
        {/* 상단 제목 */}
        <div className="flex gap-4 items-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
            <Heart className="text-white" />
          </div>
          <h1 className="typo-heading text-title leading-none">마음 챙김</h1>
        </div>
        <div className="flex items-center justify-between">
          <MoveButton onClick={handleBack}>뒤로가기</MoveButton>
          <ActionButton
            onClick={() => {
              // 임시 이동 로직
              if (!isFormValid) return;
              navigate('/care');
            }}
            className={`${
              !isFormValid
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : ''
            }`}
          >
            <div className="flex gap-3 items-center">
              <PenSquare />
              <span className="leading-none">감정 일기 작성하기</span>
            </div>
          </ActionButton>
        </div>
      </div>
      <CareWriteForm
        date={date}
        onDateChange={setDate}
        emotion={emotion as Emotion}
        onEmotionChange={setEmotion}
        weather={weather as WeatherType}
        onWeatherChange={setWeather}
        title={title}
        content={content}
        onTitleChange={setTitle}
        onContentChange={setContent}
        sleepHour={sleepHour}
        sleepMinute={sleepMinute}
        onSleepHourChange={setSleepHour}
        onSleepMinuteChange={setSleepMinute}
      />
    </section>
  );
}
