interface UserProfile {
  avatar?: string;
  bio?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
}

interface GapActivity {
  label: string;
  type: 'education' | 'project' | 'experience' | 'skill' | 'certification' | 'volunteer' | 'travel' | 'rest';
  duration: string;
  platform?: string;
  description?: string;
  skills?: string[];
  achievement?: string;
}

interface GapSummary {
  beforeGap: string;
  duringGap: GapActivity[];
  afterGap: string;
}

interface Budget {
  total: number;
  breakdown: Array<{
    category: string;
    amount: number;
    description: string;
  }>;
}

interface JobResult {
  company: string;
  position: string;
  salary?: string;
  applicationCount: number;
  interviewCount: number;
  timeline: string;
}

interface Attachment {
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
  content?: string;
  summary: GapSummary;
  learningTools: string[];
  budget?: Budget;
  difficulties: string[];
  insights: string[];
  advice: string;
  views?: number;
  likes?: number;
  comments?: number;
  tags?: string[];
  jobResult?: JobResult;
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


export const sampleReviews: GapReview[] = [
  {
    gapReviewsId: 1,
    title: '26살 심리학과 졸업생의 UX 디자이너 전향기 - 1년 반의 여정',
    userName: '디자인은공감이다',
    content: `심리학을 전공했지만 사용자 경험에 관심이 생겨 디자인 분야로 전향을 결심했습니다.

        공백기 동안 패스트캠퍼스 UX/UI 디자인 부트캠프를 수강하며 디자인 씽킹과 사용자 리서치 방법론을 체계적으로 학습했습니다. 

        개인 프로젝트로 반려동물 커뮤니티 앱을 기획부터 프로토타입까지 전 과정을 진행하면서, 실제 사용자 인터뷰와 테스트를 통해 UX 설계 역량을 키웠습니다.

        6개월간의 스타트업 UX 인턴십을 통해 실무 경험을 쌓았고, 사용자 이탈률을 15% 개선하는 성과를 거두었습니다.

        결과적으로 네이버 계열사 UX팀에 합격할 수 있었으며, 이 과정에서 가장 중요했던 것은 완벽한 포트폴리오보다는 사용자 관점에서 문제를 해결하는 사고 과정을 체계적으로 보여주는 것이었습니다.`,

    userProfile: {
      avatar: '/avatars/user1.jpg',
      bio: '사용자의 마음을 읽는 디자이너가 되고 싶어요',
      location: '서울, 한국',
      linkedIn: 'linkedin.com/in/uxdesigner'
    },
    category: '디자인',
    major: 'UX/UI 디자이너',
    isMajor: false,
    grade: 3.5,
    gapPeriodMonths: 18,
    bookmarked: false,
    createdAt: '2024-11-02T13:15:00.000Z',
    views: 1247,
    likes: 89,
    comments: 23,
    tags: ['비전공자', 'UX디자인', '포트폴리오', '부트캠프', '커리어전환'],

    summary: {
      beforeGap: '심리학 전공으로 졸업했지만 사용자 경험에 관심이 생겨 디자인 분야로의 전향을 결심했습니다.',
      duringGap: [
        {
          label: 'UX/UI 디자인 부트캠프',
          type: 'education',
          duration: '4개월',
          platform: '패스트캠퍼스',
          description: '디자인 씽킹, 사용자 리서치, 프로토타이핑 등 전반적인 UX 프로세스 학습',
          skills: ['Figma', 'Adobe XD', 'Sketch', '사용자 리서치', '와이어프레임'],
          achievement: '최종 프로젝트 우수상 수상'
        },
        {
          label: '개인 프로젝트 - 반려동물 커뮤니티 앱',
          type: 'project',
          duration: '3개월',
          description: '사용자 인터뷰부터 프로토타입까지 전 과정을 혼자 진행한 프로젝트',
          skills: ['사용자 인터뷰', 'IA 설계', '프로토타이핑', 'A/B 테스트'],
          achievement: '실제 반려동물 카페와 협업 제안 받음'
        },
        {
          label: '스타트업 UX 인턴십',
          type: 'experience',
          duration: '6개월',
          platform: '테크 스타트업 A사',
          description: '실제 서비스의 UX 개선 업무 담당',
          skills: ['Google Analytics', 'Hotjar', '데이터 분석', 'A/B 테스트'],
          achievement: '사용자 이탈률 15% 개선'
        },
        {
          label: '해외 여행 및 자기성찰',
          type: 'travel',
          duration: '1개월',
          description: '동남아시아 배낭여행을 통한 다양한 문화 경험과 휴식',
          achievement: '새로운 관점과 에너지 충전'
        }
      ],
      afterGap: '중견 IT 기업 UX팀 합격 (연봉 4200만원, 포트폴리오 기반 3차 면접 통과)'
    },

    learningTools: ['Figma', 'Adobe XD', 'Notion', '패스트캠퍼스', 'UX 아카이브', 'Coursera', 'Medium'],
    
    budget: {
      total: 850000,
      breakdown: [
        { category: '부트캠프 수강료', amount: 500000, description: '패스트캠퍼스 UX/UI 디자인 부트캠프' },
        { category: '디자인 도구 구독료', amount: 120000, description: 'Figma Pro, Adobe CC 6개월' },
        { category: '도서 및 자료', amount: 80000, description: 'UX 관련 서적 10권' },
        { category: '네트워킹 이벤트', amount: 100000, description: '디자인 컨퍼런스, 밋업 참가비' },
        { category: '여행 경비', amount: 50000, description: '자기성찰 여행 (숙박 제외)' }
      ]
    },

    difficulties: [
      '비전공자라는 불안감과 포트폴리오 퀄리티에 대한 걱정이 컸습니다.',
      '인턴십 초기에 디자인 용어와 개발 지식 부족으로 소통에 어려움을 겪었어요.',
      '공백기 중반에 찾아온 번아웃과 진로에 대한 회의감을 극복하기 어려웠습니다.',
      '경제적 부담과 가족의 걱정 섞인 시선이 심리적 압박이 되었어요.'
    ],

    insights: [
      'UX 디자인은 정답이 아니라 사용자 관점의 "질문"에서 출발한다는 걸 깨달았어요.',
      '실제 사용자 피드백을 받고 개선하는 경험이 포트폴리오보다 더 중요했습니다.',
      '심리학 전공 배경이 사용자 리서치에서 큰 강점이 되었어요.',
      '완벽한 결과물보다는 사고 과정을 잘 정리해서 보여주는 것이 면접에서 효과적이었습니다.'
    ],

    advice: '공백기 동안 무조건 "뭔가 해야 한다"는 압박보다는, 내가 어떤 경험에서 의미를 느끼는지 스스로 정리하는 시간이 중요해요. 특히 디자인 직무는 "나의 시선"을 잘 녹여내는 것이 가장 큰 강점이 됩니다. 그리고 혼자 고민하지 말고 현직자들과 적극적으로 네트워킹하세요!',

    jobResult: {
      company: '네이버 계열사',
      position: 'UX Designer',
      salary: '4200만원',
      applicationCount: 23,
      interviewCount: 8,
      timeline: '지원 시작부터 최종 합격까지 3개월'
    },

    attachments: [
      {
        type: 'portfolio',
        title: 'UX 포트폴리오 - 반려동물 커뮤니티 앱',
        url: '/portfolio/pet-community-app.pdf',
        description: '사용자 리서치부터 최종 프로토타입까지 전 과정 정리'
      },
      {
        type: 'certificate',
        title: 'Google UX Design Certificate',
        url: '/certificates/google-ux-cert.pdf'
      }
    ]
  },

  {
    gapReviewsId: 2,
    title: '육아맘의 개발자 도전기 - 아이와 함께한 2년간의 학습 여정',
    userName: '개발맘코더',
        content: `둘째 출산 후 육아를 위해 퇴사한 후, 새벽 시간을 활용해 개발 공부를 시작했습니다.

코드스테이츠 온라인 부트캠프를 통해 Java와 Spring Boot를 체계적으로 학습하며, 매일 새벽 4-6시라는 제한된 시간 안에서도 꾸준히 공부할 수 있었습니다.

육아 경험을 바탕으로 육아 정보 공유 플랫폼을 개발하여 실제 서비스로 런칭하기까지 했고, 1000명이 넘는 사용자가 가입해주셨습니다.

오픈소스 프로젝트에도 꾸준히 기여하며 개발 커뮤니티와 소통했고, 이런 경험들이 면접에서 좋은 평가를 받았습니다.

육아와 학습을 병행하는 것은 쉽지 않았지만, 오히려 제한된 시간으로 인해 집중도와 효율성이 높아졌다고 생각합니다.`,
    // .
    userProfile: {
      avatar: '/avatars/user2.jpg',
      bio: '두 아이 엄마이자 백엔드 개발자 지망생',
      location: '경기도, 한국',
      github: 'github.com/devmom'
    },
    category: 'IT/개발',
    major: '백엔드 개발자',
    isMajor: true,
    grade: 2.8,
    gapPeriodMonths: 24,
    bookmarked: true,
    createdAt: '2025-01-22T15:10:00.000Z',
    views: 2156,
    likes: 156,
    comments: 67,
    tags: ['육아병행', '백엔드개발', '온라인학습', '자기주도학습', '경력단절'],

    summary: {
      beforeGap: '컴퓨터공학과 졸업 후 SI 회사에서 3년 근무하다가 육아를 위해 퇴사했습니다.',
      duringGap: [
        {
          label: '육아 및 가사',
          type: 'rest',
          duration: '6개월',
          description: '둘째 출산 후 육아에 전념하며 체력 회복과 가족 시간 보냄',
          achievement: '육아와 개발 공부 병행 노하우 터득'
        },
        {
          label: '온라인 부트캠프 - Java 백엔드',
          type: 'education',
          duration: '8개월',
          platform: '코드스테이츠',
          description: '매일 새벽 4-6시, 아이들 자는 시간을 활용한 학습',
          skills: ['Java', 'Spring Boot', 'MySQL', 'AWS', 'Git'],
          achievement: '부트캠프 내 프로젝트 대상 수상'
        },
        {
          label: '개인 프로젝트 - 육아 정보 공유 플랫폼',
          type: 'project',
          duration: '4개월',
          description: '육아 경험을 바탕으로 한 커뮤니티 플랫폼 개발',
          skills: ['Spring Boot', 'JPA', 'React', 'MySQL', 'Docker'],
          achievement: '실제 서비스 런칭 및 1000명 가입'
        },
        {
          label: '오픈소스 기여 활동',
          type: 'project',
          duration: '6개월',
          description: '육아 관련 오픈소스 프로젝트에 꾸준히 기여',
          skills: ['Git', 'GitHub', '코드 리뷰', '문서화'],
          achievement: '메이저 오픈소스 프로젝트 컨트리뷰터 등록'
        }
      ],
      afterGap: '중소기업 백엔드 개발자로 원격 근무 조건으로 합격 (연봉 3800만원)'
    },

    learningTools: ['인프런', '유데미', 'GitHub', 'Stack Overflow', '벨로그', '코딩테스트 대비 사이트'],
    
    budget: {
      total: 650000,
      breakdown: [
        { category: '온라인 강의', amount: 300000, description: '부트캠프 및 추가 강의' },
        { category: '클라우드 서비스', amount: 150000, description: 'AWS, 도메인 등 서버 비용' },
        { category: '도서', amount: 100000, description: '개발 관련 서적' },
        { category: '개발 도구', amount: 100000, description: 'IntelliJ, 노션 프로 등' }
      ]
    },

    difficulties: [
      '육아와 학습의 균형을 맞추는 것이 가장 어려웠어요. 특히 아이가 아플 때는 공부를 못하는 날이 많았습니다.',
      '새벽 시간 학습으로 인한 체력 고갈과 집중력 저하가 심했어요.',
      '기술 스택의 빠른 변화를 따라가기 어려웠고, 실무 경험 부족에 대한 불안감이 컸습니다.',
      '면접 일정을 잡기 어려웠고, 육아로 인한 제약 사항을 설명하는 것이 부담스러웠어요.'
    ],

    insights: [
      '제한된 시간으로 인해 오히려 집중도와 효율성이 높아졌어요.',
      '육아 경험이 프로젝트 기획과 사용자 관점 이해에 큰 도움이 되었습니다.',
      '완벽하게 준비하려 하지 말고, 꾸준히 조금씩이라도 하는 것이 중요해요.',
      '온라인 커뮤니티의 도움과 격려가 혼자 공부하는 데 큰 힘이 되었습니다.'
    ],

    advice: '육아와 병행하는 분들께 말씀드리고 싶은 건, 자신만의 루틴을 만드는 것이 정말 중요해요. 저는 새벽 시간을 활용했지만, 각자 상황에 맞는 시간대를 찾으시면 됩니다. 그리고 완벽주의를 버리고 꾸준함에 집중하세요. 가족의 지지와 이해도 꼭 구하시고요!',

    jobResult: {
      company: '에듀테크 스타트업',
      position: 'Backend Developer',
      salary: '3800만원',
      applicationCount: 15,
      interviewCount: 6,
      timeline: '4개월'
    },

    attachments: [
      {
        type: 'portfolio',
        title: '육아 정보 공유 플랫폼',
        url: '/portfolio/parenting-platform.pdf',
        description: '실제 서비스 개발 과정 및 기술 스택 정리'
      },
      {
        type: 'project',
        title: '오픈소스 기여 내역',
        url: 'https://github.com/devmom/contributions'
      }
    ]
  },

  {
    gapReviewsId: 3,
    title: '번아웃 극복 후 대기업 마케터로 재기한 이야기',
    userName: '마케팅러버',
        content: `광고대행사에서 5년간 근무하던 중 심한 번아웃을 겪어 퇴사를 결심했습니다.

먼저 심리 상담을 통해 번아웃 치료에 집중했고, 건강한 일과 삶의 균형에 대해 다시 생각해보는 시간을 가졌습니다.

회복 과정에서 디지털 마케팅 자격증을 취득하며 새로운 기술을 익혔고, 개인 블로그를 운영하며 마케팅 인사이트를 꾸준히 발행했습니다.

프리랜서로 마케팅 컨설팅을 진행하면서 실무 감각을 유지했고, 5개 기업의 마케팅 성과를 평균 200% 향상시키는 결과를 얻었습니다.

이런 경험들이 포트폴리오가 되어 CJ ENM 디지털 마케팅팀에 합격할 수 있었습니다. 번아웃은 단순한 피로가 아니라 치료가 필요한 상태라는 것을 인정하고 전문가의 도움을 받는 것이 중요합니다.`,
    // 
    userProfile: {
      avatar: '/avatars/user3.jpg',
      bio: '데이터로 말하는 마케터',
      location: '서울, 한국'
    },
    category: '마케팅/광고',
    major: '디지털 마케팅',
    isMajor: true,
    grade: 3.8,
    gapPeriodMonths: 8,
    bookmarked: true,
    createdAt: '2025-06-01T13:20:00.000Z',
    views: 892,
    likes: 67,
    comments: 18,
    tags: ['번아웃극복', '디지털마케팅', '데이터분석', '대기업취업', '멘탈케어'],

    summary: {
      beforeGap: '광고대행사에서 5년간 근무하다가 과로와 스트레스로 번아웃 증후군을 겪게 되어 퇴사를 결심했습니다.',
      duringGap: [
        {
          label: '심리 상담 및 치료',
          type: 'rest',
          duration: '2개월',
          description: '번아웃 증후군 치료와 정신건강 회복에 집중',
          achievement: '건강한 일과 삶의 균형 관점 확립'
        },
        {
          label: '디지털 마케팅 자격증 취득',
          type: 'certification',
          duration: '3개월',
          platform: '구글, 페이스북',
          description: 'Google Ads, Facebook Blueprint, GA4 자격증 취득',
          skills: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEO'],
          achievement: '구글 애널리틱스 개인 인증 자격증(IQ) 취득'
        },
        {
          label: '개인 블로그 운영',
          type: 'project',
          duration: '6개월',
          description: '마케팅 인사이트와 데이터 분석 내용을 담은 블로그 운영',
          skills: ['콘텐츠 마케팅', '블로그 운영', 'SEO', '데이터 분석'],
          achievement: '월 방문자 1만명 달성, 마케팅 업계 인플루언서로 성장'
        },
        {
          label: '프리랜서 마케팅 컨설팅',
          type: 'experience',
          duration: '4개월',
          description: '중소기업 대상 디지털 마케팅 컨설팅 진행',
          skills: ['마케팅 전략 수립', '광고 운영', '성과 분석', '고객 소통'],
          achievement: '5개 기업 마케팅 성과 평균 200% 향상'
        }
      ],
      afterGap: '대기업 계열사 디지털 마케팅팀 합격 (연봉 5000만원, 워라밸 보장 조건)'
    },

    learningTools: ['Google Analytics Academy', 'Facebook Blueprint', 'HubSpot Academy', 'Coursera', '마케팅 관련 도서'],
    
    budget: {
      total: 450000,
      breakdown: [
        { category: '심리 상담비', amount: 200000, description: '번아웃 치료 및 상담' },
        { category: '자격증 응시료', amount: 100000, description: '구글, 페이스북 자격증' },
        { category: '도서 및 강의', amount: 100000, description: '마케팅 관련 학습 자료' },
        { category: '블로그 운영비', amount: 50000, description: '도메인, 호스팅 비용' }
      ]
    },

    difficulties: [
      '번아웃으로 인한 우울감과 자신감 상실을 극복하는 것이 가장 어려웠어요.',
      '공백기에 대한 주변의 시선과 재취업에 대한 불안감이 컸습니다.',
      '빠르게 변하는 디지털 마케팅 트렌드를 따라잡기 위한 학습량이 방대했어요.',
      '프리랜서 일을 하면서 불안정한 수입으로 인한 경제적 스트레스가 있었습니다.'
    ],

    insights: [
      '번아웃은 단순한 피로가 아니라 치료가 필요한 상태라는 걸 인정하고 받아들이는 것이 중요해요.',
      '쉬는 것도 일의 일부라는 걸 깨달았고, 건강한 일과 삶의 균형을 찾는 방법을 배웠어요.',
      '개인 브랜딩을 통해 전문성을 어필하는 것이 취업에 큰 도움이 되었습니다.',
      '과거 경험과 새로운 스킬을 결합했을 때 더 큰 시너지가 생긴다는 걸 느꼈어요.'
    ],

    advice: '번아웃을 겪고 계신 분들께 꼭 말씀드리고 싶은 건, 절대 혼자 견디려 하지 마세요. 전문가의 도움을 받는 것을 부끄러워할 필요 없어요. 그리고 공백기를 단순한 쉬는 시간이 아니라 재충전과 성장의 기회로 만들어보세요. 저처럼 새로운 스킬을 익히거나 개인 프로젝트를 하는 것도 좋은 방법이에요.',

    jobResult: {
      company: 'CJ ENM',
      position: 'Digital Marketing Manager',
      salary: '5000만원',
      applicationCount: 12,
      interviewCount: 4,
      timeline: '2개월'
    },

    attachments: [
      {
        type: 'portfolio',
        title: '마케팅 블로그 포트폴리오',
        url: '/portfolio/marketing-blog.pdf',
        description: '6개월간의 블로그 운영 성과 및 인사이트'
      },
      {
        type: 'certificate',
        title: 'Google Analytics IQ',
        url: '/certificates/ga-iq.pdf'
      }
    ]
  },

  {
    gapReviewsId: 4,
    title: '비전공자 프론트엔드 개발자 8개월 취업 성공기',
    userName: '코딩초보탈출',
        content: `영어영문학과를 졸업한 후 개발에 흥미를 느껴 진로를 변경했습니다.

HTML, CSS, JavaScript 기초부터 차근차근 학습하며 노마드코더와 유데미 강의를 통해 웹 개발의 기초를 다졌습니다.

React 라이브러리에 집중하며 Todo 앱, 날씨 앱 등 5개의 개인 프로젝트를 완성했고, 온라인으로 만난 동료들과 함께 여행 계획 서비스를 개발하여 실제 배포까지 완료했습니다.

코딩테스트 대비를 통해 알고리즘 실력을 키웠고, 프로그래머스 레벨 2 문제를 70% 이상 해결할 수 있게 되었습니다.

비전공자라는 불안감이 있었지만, 포트폴리오를 통해 문제 해결 과정을 체계적으로 정리하여 보여주었고, 결국 카카오페이지에 프론트엔드 개발자로 합격할 수 있었습니다.`,
    // 
    userProfile: {
      avatar: '/avatars/user4.jpg',
      bio: '문과에서 개발자로 전향한 새내기 개발자',
      location: '부산, 한국',
      github: 'github.com/newbie-dev'
    },
    category: 'IT/개발',
    major: '프론트엔드 개발자',
    isMajor: false,
    grade: 3.2,
    gapPeriodMonths: 8,
    bookmarked: false,
    createdAt: '2025-05-15T14:30:00.000Z',
    views: 1456,
    likes: 98,
    comments: 34,
    tags: ['비전공자', '프론트엔드', '온라인학습', '포트폴리오', '취업성공'],

    summary: {
      beforeGap: '영어영문학과 졸업 후 취업 준비를 하던 중 개발에 흥미를 느껴 진로를 변경했습니다.',
      duringGap: [
        {
          label: 'HTML/CSS/JavaScript 기초 학습',
          type: 'education',
          duration: '2개월',
          platform: '노마드코더, 유데미',
          description: '웹 개발 기초부터 차근차근 학습',
          skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap'],
          achievement: '개인 포트폴리오 웹사이트 제작'
        },
        {
          label: 'React 심화 학습',
          type: 'education',
          duration: '3개월',
          platform: '인프런, 공식 문서',
          description: 'React 라이브러리 집중 학습 및 프로젝트 진행',
          skills: ['React', 'Redux', 'React Router', 'Styled Components'],
          achievement: 'Todo 앱, 날씨 앱 등 5개 프로젝트 완성'
        },
        {
          label: '팀 프로젝트 - 여행 계획 서비스',
          type: 'project',
          duration: '2개월',
          description: '온라인으로 만난 동료들과 함께 진행한 협업 프로젝트',
          skills: ['React', 'Node.js', 'MongoDB', 'Git', '협업'],
          achievement: '실제 배포까지 완료, GitHub 스타 50개 획득'
        },
        {
          label: '코딩테스트 대비',
          type: 'skill',
          duration: '1개월',
          description: '알고리즘 문제 해결 능력 향상',
          skills: ['JavaScript 알고리즘', '자료구조', '문제해결'],
          achievement: '프로그래머스 레벨 2 문제 70% 해결'
        }
      ],
      afterGap: '중견 IT 기업 프론트엔드 개발자로 합격 (연봉 3500만원, 신입 개발자 과정 지원)'
    },

    learningTools: ['노마드코더', '인프런', '유데미', 'MDN 문서', 'GitHub', '프로그래머스', 'Notion'],
    
    budget: {
      total: 400000,
      breakdown: [
        { category: '온라인 강의', amount: 250000, description: '노마드코더, 인프런, 유데미 강의' },
        { category: '도서', amount: 80000, description: '개발 관련 서적 5권' },
        { category: '서버 비용', amount: 50000, description: '프로젝트 배포용 서버' },
        { category: '기타', amount: 20000, description: '카페 공부 등 기타 비용' }
      ]
    },

    difficulties: [
      '비전공자라는 콤플렉스와 개발 지식 부족에 대한 불안감이 컸어요.',
      '혼자 공부하다 보니 막히는 부분이 있을 때 해결하기 어려웠습니다.',
      '취업 시장에서 신입 개발자에게 요구하는 수준을 파악하기 어려웠어요.',
      '면접에서 CS 지식 부족이 드러날까봐 걱정이 많았습니다.'
    ],

    insights: [
      '완벽하게 모든 걸 알고 시작하려 하지 말고, 일단 만들어보면서 배우는 게 효과적이에요.',
      '포트폴리오는 양보다 질이 중요하고, 구현 과정과 문제 해결 경험을 잘 정리하는 게 핵심이에요.',
      '온라인 커뮤니티 활동과 네트워킹이 취업에 실질적인 도움이 되었어요.',
      '비전공자의 다양한 경험이 개발할 때 색다른 관점을 제공할 수 있다는 걸 깨달았어요.'
    ],

    advice: '비전공자분들께 말씀드리고 싶은 건, 기초를 탄탄히 하는 것이 정말 중요해요. 급하게 프레임워크부터 배우지 마시고 HTML, CSS, JavaScript를 제대로 이해하고 넘어가세요. 그리고 포트폴리오는 완벽한 서비스보다는 내가 어떤 문제를 어떻게 해결했는지 보여주는 것이 중요합니다!',

    jobResult: {
      company: '카카오페이지',
      position: 'Frontend Developer',
      salary: '3500만원',
      applicationCount: 18,
      interviewCount: 5,
      timeline: '2개월'
    },

    attachments: [
      {
        type: 'portfolio',
        title: '개인 프로젝트 모음집',
        url: '/portfolio/frontend-projects.pdf',
        description: 'Todo 앱, 날씨 앱 등 5개 프로젝트 소개'
      },
      {
        type: 'project',
        title: '여행 계획 서비스 - GitHub',
        url: 'https://github.com/newbie-dev/travel-planner'
      }
    ]
  }
];


// 현재 데이터 + 누락된 exports 추가
export const sampleTopReviews: GapReview[] = [
  sampleReviews[1], 
  sampleReviews[3], 
  sampleReviews[0], 
  sampleReviews[2]  
];

export const reviewStats: ReviewStats = {
  totalReviews: sampleReviews.length,
  averageGapPeriod: 14,
  successRate: 92,
  averageSalary: 4200,
  topCategories: ['IT/개발', '디자인', '마케팅/광고', '데이터/분석'],
  topSkills: ['Python', 'React', 'Figma', 'SQL', 'JavaScript']
};

export const reviewFilters: ReviewFilters = {
  categories: ['IT/개발', '디자인', '마케팅/광고', '데이터/분석', '기획', '영업', '인사', '재무', '기타'],
  gapPeriods: ['6개월 이하', '1년 이하', '2년 이하', '3년 이하'],
  grades: ['2.0 이상', '2.5 이상', '3.0 이상', '3.5 이상', '4.0 이상'],
  majors: ['전공자', '비전공자'],
  budgets: ['50만원 이하', '100만원 이하', '200만원 이하', '300만원 이하', '300만원 초과']
};

// topReviewData도 추가 (TopReviewCard.tsx에서 사용)
export const topReviewData = [
  { name: '디자인은공감이다', job: 'UX디자이너', title: '26살 심리학과 졸업생의 UX 디자이너 전향기' },
  { name: '개발맘코더', job: '백엔드개발자', title: '육아맘의 개발자 도전기 - 아이와 함께한 2년간의 학습 여정' },
  { name: '마케팅러버', job: '디지털마케팅', title: '번아웃 극복 후 대기업 마케터로 재기한 이야기' },
];