import { type Emotion } from '@/types/emotion';

export function getEmotionSummaryFromChart(
  chartData: { emotion: Emotion | null }[],
) {
  const counts: Record<Emotion, number> = {
    기쁨: 0,
    평온: 0,
    불안: 0,
    슬픔: 0,
    화남: 0,
  };

  chartData.forEach(({ emotion }) => {
    if (emotion) counts[emotion]++;
  });

  const mostFrequent = Object.entries(counts).reduce((a, b) =>
    a[1] >= b[1] ? a : b,
  )[0] as Emotion;

  const positive = counts['기쁨'] + counts['평온'];
  const negative = counts['불안'] + counts['슬픔'] + counts['화남'];

  const pattern =
    positive > negative ? '긍정적' : negative > positive ? '부정적' : '균형';

  return { mostFrequent, pattern };
}
