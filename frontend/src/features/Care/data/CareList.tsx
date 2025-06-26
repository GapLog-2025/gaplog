import { type Emotion } from '@/types/emotion';

type EmotionLog = {
  emotion: Emotion;
  date: string;
  title: string;
  content: string;
};

// export const RecentCareData = [];

export const RecentCareData: EmotionLog[] = [
  {
    emotion: '기쁨',
    date: '0000-00-00',
    title: '감정 일기 제목 1',
    content: '감정 일기 내용이 이곳에 들어갑니다.',
  },
  {
    emotion: '불안',
    date: '0000-00-00',
    title: '감정 일기 제목 2',
    content: '감정 일기 내용이 이곳에 들어갑니다.',
  },
];
