export interface Mentor {
  mentorId: number;
  title: string;
  category: string;
  major: string; // 준비 중인 직무
  content: string;
  grade: number;
  gapPeriodMonths: number;
  isMajor: boolean;
  userName: string;
  bookmarked: boolean;
  createdAt: string;
  likes: number; // 좋아요 수
  replies: Reply[]; // 답글 목록
}

export interface Reply {
  replyId: number;
  mentorId: number;
  userName: string;
  content: string;
  createdAt: string;
}
