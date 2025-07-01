import { type Emotion, type EmotionLog } from '@/types/emotion';

const getEmotionScore = (emotion: Emotion | null): number => {
  switch (emotion) {
    case '기쁨':
      return 6;
    case '평온':
      return 5;
    case '불안':
      return 4;
    case '슬픔':
      return 3;
    case '화남':
      return 1;
    default:
      return 0;
  }
};

export default function getTwoWeekChartData(
  baseDate: Date,
  logs: EmotionLog[],
) {
  const data = [];

  const formatShortDate = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  for (let i = -13; i <= 0; i++) {
    const target = new Date(baseDate);
    target.setDate(baseDate.getDate() + i);

    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, '0');
    const dd = String(target.getDate()).padStart(2, '0');
    const ymd = `${yyyy}-${mm}-${dd}`;

    const matched = logs.find((log) => log.createdAt.split('T')[0] === ymd);

    data.push({
      x: formatShortDate(target),
      y: getEmotionScore(matched?.emotion ?? null),
      emotion: matched?.emotion ?? null,
    });
  }

  return data;
}
