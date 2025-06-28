import { type GapReview } from '@/types/gapReview';

export const reviewData = {
  tags: ['태그1', '태그2', '태그3'],
  title: '카드 제목이 여기에 들어갑니다',
  description: `이 영역에는 카드의 설명이나 안내 문구가 들어갑니다.
이 영역에는 카드의 설명이나 안내 문구가 들어갑니다.
이 영역에는 카드의 설명이나 안내 문구가 들어갑니다.`,
  name: '닉네임',
  job: '직무',
  date: '2025년 06월 24일',
};

export const topReviewData = [
  { name: '닉네임1', job: '직무1', title: '인기 후기 게시글 제목1' },
  { name: '닉네임2', job: '직무2', title: '인기 후기 게시글 제목2' },
  { name: '닉네임3', job: '직무3', title: '인기 후기 게시글 제목3' },
];

export const sampleReviews: GapReview[] = [
  {
    gapReviewsId: 1,
    title: '비전공자로 시작한 프론트엔드 개발자 도전기',
    major: '프론트엔드 개발자',
    isMajor: false,
    category: 'IT/개발',
    content:
      '비전공자로 시작해서 8개월간 꾸준히 준비했어요. 처음엔 무엇을 해야 할지 막막했지만, 온라인 부트캠프와 사이드 프로젝트로 실력을 쌓았습니다. 저처럼 막막한 분들에게 도움이 되었으면 좋겠어요.',
    grade: 3.7,
    gapPeriodMonths: 8,
    userName: '코딩초보',
    bookmarked: false,
    createdAt: '2024-12-15T09:30:00.000Z',
  },
  {
    gapReviewsId: 2,
    title: '육아와 병행한 개발자 취업 준비기',
    major: '백엔드 개발자',
    isMajor: true,
    category: 'IT/개발',
    content:
      '아이를 돌보면서 개발 공부를 병행하는 건 쉽지 않았어요. 매일 2시간씩 시간을 쪼개어 학습했고, 결국 1년 반의 시간 끝에 원하던 회사에 합격할 수 있었습니다.',
    grade: 2.5,
    gapPeriodMonths: 18,
    userName: '개발맘',
    bookmarked: true,
    createdAt: '2025-01-22T15:10:00.000Z',
  },
  {
    gapReviewsId: 3,
    title: '전직 마케터에서 UX 디자이너로 커리어 전환',
    major: '디자인',
    isMajor: false,
    category: 'IT/개발',
    content:
      '마케팅 분야에서 일하다가 사용자의 흐름과 경험에 흥미를 느껴 UX로 전향했어요. 포트폴리오 준비에 많은 시간이 걸렸지만, 결국 원하는 직무로 이직에 성공했습니다.',
    grade: 4.0,
    gapPeriodMonths: 10,
    userName: 'UX지망생',
    bookmarked: false,
    createdAt: '2025-03-05T11:00:00.000Z',
  },
  {
    gapReviewsId: 4,
    title: '번아웃을 이겨낸 후 대기업 마케팅 부서 입사까지의 여정',
    major: '마케팅/광고',
    isMajor: true,
    category: '마케팅/광고',
    content:
      '번아웃으로 공백기를 가지게 되었지만, 그 시간을 자기 이해와 재충전에 집중했어요. 이후 마케팅 관련 자격증과 블로그 운영을 병행하며 다시 취업에 성공했어요.',
    grade: 3.5,
    gapPeriodMonths: 6,
    userName: '마케팅러버',
    bookmarked: true,
    createdAt: '2025-06-01T13:20:00.000Z',
  },
  {
    gapReviewsId: 5,
    title: '전공을 바꿔 개발자로 다시 시작한 1년간의 기록',
    major: 'IT/개발',
    isMajor: false,
    category: 'IT/개발',
    content:
      '디자인 전공이었지만 코딩에 흥미를 느껴 프론트엔드 개발을 시작했어요. 공백기 동안 온라인 강의와 프로젝트 경험을 쌓아 결국 스타트업 개발자로 입사했어요.',
    grade: 3.2,
    gapPeriodMonths: 12,
    userName: '개발초보탈출',
    bookmarked: false,
    createdAt: '2025-06-10T10:00:00.000Z',
  },
];

export const sampleTopReviews: GapReview[] = [
  {
    gapReviewsId: 2,
    title: '육아와 병행한 개발자 취업 준비기',
    major: '백엔드 개발자',
    isMajor: true,
    category: 'IT/개발',
    content:
      '아이를 돌보면서 개발 공부를 병행하는 건 쉽지 않았어요. 매일 2시간씩 시간을 쪼개어 학습했고, 결국 1년 반의 시간 끝에 원하던 회사에 합격할 수 있었습니다.',
    grade: 3.0,
    gapPeriodMonths: 18,
    userName: '개발맘',
    bookmarked: true,
    createdAt: '2025-01-22T15:10:00.000Z',
  },
  {
    gapReviewsId: 1,
    title: '비전공자로 시작한 프론트엔드 개발자 도전기',
    major: '프론트엔드 개발자',
    isMajor: false,
    category: 'IT/개발',
    content:
      '비전공자로 시작해서 8개월간 꾸준히 준비했어요. 처음엔 무엇을 해야 할지 막막했지만, 온라인 부트캠프와 사이드 프로젝트로 실력을 쌓았습니다. 저처럼 막막한 분들에게 도움이 되었으면 좋겠어요.',
    grade: 3.7,
    gapPeriodMonths: 8,
    userName: '코딩초보',
    bookmarked: false,
    createdAt: '2024-12-15T09:30:00.000Z',
  },
  {
    gapReviewsId: 5,
    title: '전공을 바꿔 개발자로 다시 시작한 1년간의 기록',
    major: 'IT/개발',
    isMajor: false,
    category: 'IT/개발',
    content:
      '디자인 전공이었지만 코딩에 흥미를 느껴 프론트엔드 개발을 시작했어요. 공백기 동안 온라인 강의와 프로젝트 경험을 쌓아 결국 스타트업 개발자로 입사했어요.',
    grade: 3.2,
    gapPeriodMonths: 12,
    userName: '개발초보탈출',
    bookmarked: false,
    createdAt: '2025-06-10T10:00:00.000Z',
  },
  {
    gapReviewsId: 4,
    title: '번아웃을 이겨낸 후 대기업 마케팅 부서 입사까지의 여정',
    major: '마케팅/광고',
    isMajor: true,
    category: '마케팅/광고',
    content:
      '번아웃으로 공백기를 가지게 되었지만, 그 시간을 자기 이해와 재충전에 집중했어요. 이후 마케팅 관련 자격증과 블로그 운영을 병행하며 다시 취업에 성공했어요.',
    grade: 4.5,
    gapPeriodMonths: 6,
    userName: '마케팅러버',
    bookmarked: true,
    createdAt: '2025-06-01T13:20:00.000Z',
  },
  {
    gapReviewsId: 3,
    title: '전직 마케터에서 UX 디자이너로 커리어 전환',
    major: '디자인',
    isMajor: false,
    category: 'IT/개발',
    content:
      '마케팅 분야에서 일하다가 사용자의 흐름과 경험에 흥미를 느껴 UX로 전향했어요. 포트폴리오 준비에 많은 시간이 걸렸지만, 결국 원하는 직무로 이직에 성공했습니다.',
    grade: 4.0,
    gapPeriodMonths: 10,
    userName: 'UX지망생',
    bookmarked: false,
    createdAt: '2025-03-05T11:00:00.000Z',
  },
];
