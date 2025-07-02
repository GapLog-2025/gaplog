// types/gapReview.ts
export interface UserProfile {
  avatar?: string;
  bio?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
}

export interface GapActivity {
  label: string;
  type: 'education' | 'project' | 'experience' | 'skill' | 'certification' | 'volunteer' | 'travel' | 'rest';
  duration: string;
  platform?: string;
  description?: string;
  skills?: string[];
  achievement?: string;
}

export interface GapSummary {
  beforeGap: string;
  duringGap: GapActivity[];
  afterGap: string;
}

export interface Budget {
  total: number;
  breakdown: Array<{
    category: string;
    amount: number;
    description: string;
  }>;
}

export interface JobResult {
  company: string;
  position: string;
  salary?: string;
  applicationCount: number;
  interviewCount: number;
  timeline: string;
}

export interface Attachment {
  type: 'portfolio' | 'certificate' | 'project' | 'resume';
  title: string;
  url: string;
  description?: string;
}

export interface GapReview {
  gapReviewsId: number;
  title: string;
  userName: string;
  userProfile?: UserProfile;
  category: string;
  major: string;
  isMajor: boolean;
  grade: number;
  gapPeriodMonths: number;
  bookmarked: boolean;
  createdAt: string;
  updatedAt?: string;
  
  // 상세 내용
  content?: string;
  summary: GapSummary;
  
  // 학습 도구 및 리소스
  learningTools: string[];
  budget?: Budget;
  
  // 어려움과 인사이트
  difficulties: string[];
  insights: string[];
  advice: string;
  
  // 메타데이터
  views?: number;
  likes?: number;
  comments?: number;
  tags?: string[];
  
  // 취업 결과
  jobResult?: JobResult;
  
  // 첨부 파일
  attachments?: Attachment[];
}

export interface ReviewStats {
  totalReviews: number;
  averageGapPeriod: number;
  successRate: number;
  averageSalary: number;
  topCategories: string[];
  topSkills: string[];
}

export interface ReviewFilters {
  categories: string[];
  gapPeriods: string[];
  grades: string[];
  majors: string[];
  budgets: string[];
}