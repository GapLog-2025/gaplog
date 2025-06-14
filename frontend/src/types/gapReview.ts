// 임시 types 코드 예시입니다.

export type MoodType = "happy" | "sad" | "angry" | "neutral";

export interface EmotionLog {
  id: string;
  date: string;
  mood: MoodType;
  note: string;
}
