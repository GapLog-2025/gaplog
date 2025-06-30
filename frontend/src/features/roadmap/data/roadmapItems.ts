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
      title: '웹개발 기초 익히기',
      description: '비전공자라도 이해할 수 있도록 웹의 구조와 HTML/CSS를 중심으로 학습을 시작합니다.',
      completed: false,
      tasks: [
        { name: '웹의 구조와 동작 방식 이해하기', completed: false },
        { name: 'HTML 태그와 시맨틱 구조 익히기', completed: false },
        { name: 'CSS 기본 문법과 레이아웃 이해하기', completed: false },
      ],
      resources: ['생활코딩', '드림코딩', '코딩애플']
    },
    {
      id: '2',
      period: '2개월차',
      title: 'JavaScript & DOM',
      description: '프론트엔드의 핵심인 JavaScript 문법과 DOM 조작을 익히고 기초 프로젝트를 시작합니다.',
      completed: false,
      tasks: [
        { name: 'JavaScript 기초 문법 익히기 (변수, 함수, 조건문)', completed: false },
        { name: 'DOM(Document Object Model) 조작 연습', completed: false },
        { name: '작은 웹 페이지 만들기 (ex. Todo 리스트)', completed: false },
      ],  
      resources: ['JavaScript', 'DOM', '미니프로젝트']
    },
    {
      id: '3',
      period: '3개월차',
      title: 'React와 SPA 이해',
      description: '프론트엔드 개발에서 가장 많이 쓰이는 React를 통해 컴포넌트 기반 개발을 경험합니다.',
      completed: false,
      tasks: [
        { name: 'React 기초 개념 학습 (JSX, 컴포넌트, 상태)', completed: false },
        { name: '기초 프로젝트 만들기 (ex. 날씨 앱, 계산기)', completed: false },
        { name: 'React Router 및 상태 관리 기초', completed: false },
      ],
      resources: ['React', '프로젝트']
    },
    {
      id: '4',
      period: '4개월차',
      title: '프로젝트 및 포트폴리오 제작',
      description: '나만의 프로젝트를 직접 기획하고 제작하며 GitHub와 블로그를 통해 공개합니다.',
      completed: false,
      tasks: [
        { name: 'React 기반 개인 프로젝트 제작', completed: false },
        { name: 'Git & GitHub를 통한 버전관리 실습', completed: false },
        { name: '기술 블로그에 프로젝트 과정 정리', completed: false },
      ],
      resources: ['Github', '포트폴리오', '기술 블로그']
    },
    {
      id: '5',
      period: '5개월차',
      title: '서류 및 면접 준비',
      description: '이력서와 자기소개서를 준비하고, 비전공자의 장점을 살릴 수 있는 면접 전략을 학습합니다.',
      completed: false,
      tasks: [
        { name: '이력서/자기소개서 작성 및 피드백 받기', completed: false },
        { name: '모의 면접 준비 및 실습', completed: false },
        { name: '프론트엔드 면접 질문 대비', completed: false },
      ],
      resources: ['면접 질문 모음', '기업 분석 자료', '면접 특강']
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