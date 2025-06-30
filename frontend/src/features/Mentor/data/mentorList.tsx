import { type Mentor } from '@/types/mentor';

export const sampleMentorList: Mentor[] = [
  {
    mentorId: 1,
    title: 'IT/개발 직무 준비 중입니다. 조언 부탁드려요!',
    category: 'IT/개발',
    major: '프론트엔드 개발',
    content:
      '프론트엔드 개발로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 2.0,
    gapPeriodMonths: 36,
    isMajor: true,
    userName: '홍길동',
    bookmarked: true,
    createdAt: '2025-06-30T09:11:45.361Z',
    likes: 33,
    replies: [
      {
        replyId: 1,
        mentorId: 1,
        userName: '현직디자이너',
        content:
          '프론트엔드 개발 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-30T08:11:45.361Z',
      },
      {
        replyId: 2,
        mentorId: 1,
        userName: '시니어개발자',
        content:
          '프론트엔드 개발 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-30T07:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 2,
    title: '디자인 직무 준비 중입니다. 조언 부탁드려요!',
    category: '디자인',
    major: 'UX/UI 디자이너',
    content:
      'UX/UI 디자이너로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 3.0,
    gapPeriodMonths: 12,
    isMajor: false,
    userName: '포폴고민중',
    bookmarked: false,
    createdAt: '2025-06-29T09:11:45.361Z',
    likes: 41,
    replies: [],
  },
  {
    mentorId: 3,
    title: '마케팅/광고 직무 준비 중입니다. 조언 부탁드려요!',
    category: '마케팅/광고',
    major: '디지털 마케터',
    content:
      '디지털 마케터로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 4.0,
    gapPeriodMonths: 36,
    isMajor: true,
    userName: '공백마케터',
    bookmarked: false,
    createdAt: '2025-06-28T09:11:45.361Z',
    likes: 17,
    replies: [
      {
        replyId: 1,
        mentorId: 3,
        userName: '부트캠프선배',
        content:
          '디지털 마케터 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-28T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 4,
    title: '경영/사무 직무 준비 중입니다. 조언 부탁드려요!',
    category: '경영/사무',
    major: '경영지원',
    content:
      '경영지원로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 2.5,
    gapPeriodMonths: 6,
    isMajor: false,
    userName: '사무취준생',
    bookmarked: false,
    createdAt: '2025-06-27T09:11:45.361Z',
    likes: 36,
    replies: [
      {
        replyId: 1,
        mentorId: 4,
        userName: '취업컨설턴트',
        content:
          '경영지원 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-27T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 5,
    title: '무역/유통 직무 준비 중입니다. 조언 부탁드려요!',
    category: '무역/유통',
    major: '해외영업',
    content:
      '해외영업로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 3.0,
    gapPeriodMonths: 36,
    isMajor: false,
    userName: '무역도전러',
    bookmarked: false,
    createdAt: '2025-06-26T09:11:45.361Z',
    likes: 44,
    replies: [
      {
        replyId: 1,
        mentorId: 5,
        userName: '시니어개발자',
        content:
          '해외영업 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-26T08:11:45.361Z',
      },
      {
        replyId: 2,
        mentorId: 5,
        userName: 'HR매니저',
        content:
          '해외영업 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-26T07:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 6,
    title: '영업 직무 준비 중입니다. 조언 부탁드려요!',
    category: '영업',
    major: 'B2B 영업',
    content:
      'B2B 영업로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 4.0,
    gapPeriodMonths: 12,
    isMajor: true,
    userName: '세일즈마인드',
    bookmarked: true,
    createdAt: '2025-06-25T09:11:45.361Z',
    likes: 50,
    replies: [
      {
        replyId: 1,
        mentorId: 6,
        userName: '현직디자이너',
        content:
          'B2B 영업 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-25T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 7,
    title: '생산/제조 직무 준비 중입니다. 조언 부탁드려요!',
    category: '생산/제조',
    major: '생산관리',
    content:
      '생산관리로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 2.0,
    gapPeriodMonths: 6,
    isMajor: false,
    userName: '생산직이직자',
    bookmarked: false,
    createdAt: '2025-06-24T09:11:45.361Z',
    likes: 29,
    replies: [
      {
        replyId: 1,
        mentorId: 7,
        userName: '부트캠프선배',
        content:
          '생산관리 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-24T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 8,
    title: '건설 직무 준비 중입니다. 조언 부탁드려요!',
    category: '건설',
    major: '건축설계',
    content:
      '건축설계로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 2.5,
    gapPeriodMonths: 12,
    isMajor: true,
    userName: '건설입문러',
    bookmarked: false,
    createdAt: '2025-06-23T09:11:45.361Z',
    likes: 24,
    replies: [
      {
        replyId: 1,
        mentorId: 8,
        userName: '취업컨설턴트',
        content:
          '건축설계 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-23T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 9,
    title: '금융 직무 준비 중입니다. 조언 부탁드려요!',
    category: '금융',
    major: '금융컨설턴트',
    content:
      '금융컨설턴트로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 3.0,
    gapPeriodMonths: 36,
    isMajor: true,
    userName: '금융도전기',
    bookmarked: true,
    createdAt: '2025-06-22T09:11:45.361Z',
    likes: 46,
    replies: [
      {
        replyId: 1,
        mentorId: 9,
        userName: 'HR매니저',
        content:
          '금융컨설턴트 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-22T08:11:45.361Z',
      },
    ],
  },
  {
    mentorId: 10,
    title: 'IT/개발 직무 준비 중입니다. 조언 부탁드려요!',
    category: 'IT/개발',
    major: '백엔드 개발',
    content:
      '백엔드 개발로 진로를 준비 중인데, 공백기 동안 무엇을 준비해야 할지 고민입니다.',
    grade: 2.5,
    gapPeriodMonths: 36,
    isMajor: false,
    userName: '홍길동',
    bookmarked: false,
    createdAt: '2025-06-21T09:11:45.361Z',
    likes: 20,
    replies: [
      {
        replyId: 1,
        mentorId: 10,
        userName: '시니어개발자',
        content:
          '백엔드 개발 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-21T08:11:45.361Z',
      },
      {
        replyId: 2,
        mentorId: 10,
        userName: '현직디자이너',
        content:
          '백엔드 개발 관련 경험 공유드립니다. 공백기에는 프로젝트 경험이 중요해요.',
        createdAt: '2025-06-21T07:11:45.361Z',
      },
    ],
  },
];

export const sampleTopMentorList: Mentor[] = [...sampleMentorList].sort(
  (a, b) => b.likes - a.likes,
);
