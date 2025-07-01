export type Emotion = '기쁨' | '평온' | '불안' | '슬픔' | '화남';
export type EmotionTagType =
  | 'yellow'
  | 'pink'
  | 'green'
  | 'skyblue'
  | 'primary';

export type EmotionLog = {
  careId: number;
  createdAt: string; // ISO8601
  emotion: Emotion;
  title: string;
  content: string;
  userName: string;
};

export const emotionColorMap: Record<Emotion, EmotionTagType> = {
  기쁨: 'yellow',
  평온: 'green',
  불안: 'primary',
  슬픔: 'skyblue',
  화남: 'pink',
};

export const emotionColorHexMap: Record<EmotionTagType, string> = {
  yellow: '#F59E0C',
  pink: '#EC4899',
  green: '#22C55E',
  skyblue: '#06B6D4',
  primary: '#8B5CF6',
};

export const themeColorMap: Record<
  EmotionTagType,
  {
    background: string;
    point: string;
    text: string;
  }
> = {
  primary: {
    background: 'bg-primary-primary-background',
    point: 'bg-primary',
    text: 'text-primary',
  },
  skyblue: {
    background: 'bg-point-blue-background ',
    point: 'bg-skyblue',
    text: 'text-point-blue-text',
  },
  yellow: {
    background: 'bg-point-yellow-background',
    point: 'bg-yellow',
    text: 'text-point-yellow-text',
  },
  green: {
    background: 'bg-success-background',
    point: 'bg-green',
    text: 'text-success-text',
  },
  pink: {
    background: 'bg-danger-background',
    point: 'bg-pink',
    text: 'text-danger-text',
  },
};
