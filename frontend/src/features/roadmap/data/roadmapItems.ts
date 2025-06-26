export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  completed: boolean;
  tasks: Array<{
    name: string;
    completed: boolean;
  }>;
  resources: string[];
}

export const timelineData: Record<string, TimelineItem[]> = {
  frontend: [
    {
      id: '1',
      period: '1개월차',
      title: '기초 역량 쌓기',
      description: '웹개발 기초부터 시작하여 처음의 역량을 높이 끌어올립니다.',
      completed: true,
      tasks: [
        { name: 'HTML 이해하기', completed: true },
        { name: '웹의 역할 이해하기', completed: true },
        { name: '웹의 기본 이해하기', completed: true }
      ],
      resources: ['생활코딩', '노마드', '부트코딩']
    },
    {
      id: '2',
      period: '2개월차',
      title: '직무 역량 강화',
      description: '프론트엔드의 핵심인 자바 스크립트 이용하여 응용 능력을 익힙니다.',
      completed: false,
      tasks: [
        { name: '프로그래밍 언어 이해 (JavaScript, Python 등)', completed: false },
        { name: '프레임워크 학습 (React, Node.js 등)', completed: false }
      ],
      resources: ['Github', 'Udemy', 'Codecademy']
    },
    {
      id: '3',
      period: '3개월차',
      title: '포트폴리오 준비',
      description: '지금 역량을 보여줄 수 있는 포트폴리오를 준비해 보겠습니다.',
      completed: false,
      tasks: [
        { name: '개인 프로젝트 진행하기', completed: false },
        { name: 'Github 프로필 정리하기', completed: false },
        { name: '기술 블로그 포스팅하기', completed: false }
      ],
      resources: ['Github Pages', 'Notion', 'Velog']
    },
    {
      id: '4',
      period: '4개월차',
      title: '취업 지원서 준비',
      description: '이력서, 자기소개서 및 취업 전략을 실습하여 서류를 준비해 보겠습니다.',
      completed: false,
      tasks: [
        { name: '이력서 작성하기', completed: false },
        { name: '자기소개서 작성하기', completed: false },
        { name: 'LinkedIn 프로필 정리해하기', completed: false }
      ],
      resources: ['이력서 템플릿', '잡코리아 PWD', 'LinkedIn']
    },
    {
      id: '5',
      period: '5개월차',
      title: '면접 준비 및 지원',
      description: '기업 연구와 학습한 능력하여 면접 준비를 포기적으로 지원합니다.',
      completed: false,
      tasks: [
        { name: '기업 기업 연구하기', completed: false },
        { name: '모의 면접 진행하기', completed: false },
        { name: '기술/실무 면접 준비하기', completed: false }
      ],
      resources: ['면접 질문 모음', '기업 분석 자료', '면접후기']
    }
  ],
  backend: [
    {
      id: '1',
      period: '1개월차',
      title: '프로그래밍 언어 선택 및 기초 학습',
      description: 'Node.js, Python, Java 등 백엔드 개발에 사용되는 언어 중 하나를 선택하여 기초를 학습합니다.',
      completed: true,
      tasks: [
        { name: 'Python/Java/Node.js 중 선택', completed: true },
        { name: '기본 문법 학습', completed: true }
      ],
      resources: ['생활코딩', '점프 투 파이썬', 'Node.js 튜토리얼']
    },
    {
      id: '2',
      period: '2개월차',
      title: '데이터베이스 기초 학습',
      description: 'SQL, NoSQL 데이터베이스의 기초와 데이터 모델링을 학습합니다.',
      completed: false,
      tasks: [
        { name: 'SQL 기초 문법 학습', completed: false },
        { name: 'MySQL/PostgreSQL 실습', completed: false }
      ],
      resources: ['W3Schools SQL', 'MySQL 튜토리얼', 'PostgreSQL 문서']
    }
  ],
  designer: [
    {
      id: '1',
      period: '1개월차',
      title: '디자인 툴 익히기',
      description: 'Figma, Adobe XD 등 디자인 툴의 기본 사용법을 익힙니다.',
      completed: true,
      tasks: [
        { name: 'Figma 기초 기능 학습', completed: true },
        { name: 'Adobe XD 기본 사용법', completed: true }
      ],
      resources: ['Figma 공식 튜토리얼', 'Adobe XD 가이드', '디자인 기초']
    }
  ]
};