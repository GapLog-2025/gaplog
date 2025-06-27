import { create } from 'zustand';

// 임시 로그인 저장소

interface User {
  id: string;
  name: string;
  email: string;
  isMentor: boolean;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // 임시 목업 데이터
  user: {
    id: 'temp-id',
    name: '홍길동',
    email: 'test@example.com',
    isMentor: true,
  },
  isLoggedIn: true,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
