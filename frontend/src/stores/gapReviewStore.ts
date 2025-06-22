// 임시 store 코드 예시 입니다.

import { create } from "zustand";

type EmotionState = {
  mood: "happy" | "sad" | "angry" | null;
  setMood: (mood: EmotionState["mood"]) => void;
};

export const useEmotionStore = create<EmotionState>((set) => ({
  mood: null,
  setMood: (mood) => set({ mood }),
}));
