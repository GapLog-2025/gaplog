import { type TagType } from '@/components/Tag';

export type Emotion = '기쁨' | '평온' | '불안' | '슬픔' | '화남';

export type EmotionLog = {
  careId: number;
  createdAt: string; // ISO8601
  emotion: Emotion;
  title: string;
  content: string;
  userName: string;
};

export const emotionColorMap: Record<Emotion, TagType> = {
  기쁨: 'yellow',
  평온: 'green',
  불안: 'primary',
  슬픔: 'skyblue',
  화남: 'pink',
};
