import { useMemo } from 'react';
import { type Emotion, type EmotionLog } from '@/types/emotion';
import { emotionColorMap, themeColorMap } from '@/types/emotion';

interface EmotionSummaryProps {
  logs: EmotionLog[];
  currentDate: Date;
}

export default function EmotionSummary({
  logs,
  currentDate,
}: EmotionSummaryProps) {
  // 현재 달과 같은 로그만 필터링
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const logDate = new Date(log.createdAt);
      return (
        logDate.getFullYear() === currentDate.getFullYear() &&
        logDate.getMonth() === currentDate.getMonth()
      );
    });
  }, [logs, currentDate]);

  const emotionCounts = useMemo(() => {
    const counts: Record<Emotion, number> = {
      기쁨: 0,
      평온: 0,
      불안: 0,
      슬픔: 0,
      화남: 0,
    };

    filteredLogs.forEach((log) => {
      if (log.emotion) {
        counts[log.emotion]++;
      }
    });

    return counts;
  }, [filteredLogs]);

  const total = Object.values(emotionCounts).reduce((sum, val) => sum + val, 0);

  const emotionPercents = (
    Object.entries(emotionCounts) as [Emotion, number][]
  ).map(([emotion, count]) => ({
    emotion,
    percent: total === 0 ? 0 : Math.round((count / total) * 100),
    color: emotionColorMap[emotion],
  }));

  return (
    <div className="flex flex-wrap gap-6 px-2 pt-4 items-center">
      {emotionPercents.map(({ emotion, percent, color }) => {
        const theme = themeColorMap[color];

        return (
          <div key={emotion} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${theme.point}`} />
            <div
              className={`${theme.background} px-2 py-1 rounded-full typo-small ${theme.text} shadow-lg`}
            >
              <span className="font-semibold pr-1">{emotion}</span>
              <span>{percent}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
