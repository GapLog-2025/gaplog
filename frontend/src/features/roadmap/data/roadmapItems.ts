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
  itCareerRoadmap:[
    {
      id: '1',
      period: '1개월차',
      title: 'IT 기초 및 웹 개발 구조 이해',
      description: '웹의 동작 원리와 클라이언트-서버 모델, 버전관리, 협업 툴 등 IT 공통 기초를 다집니다.',
      completed: false,
      tasks: [
        { name: '웹의 구조와 클라이언트-서버 모델 이해', completed: false },
        { name: 'Git/GitHub 기초 및 버전관리 실습', completed: false },
        { name: 'HTML/CSS 기본 구조 익히기', completed: false }
      ],
      resources: ['생활코딩', 'Git 문서', '드림코딩', 'Notion 협업툴']
    },
    {
      id: '2',
      period: '2개월차',
      title: '프로그래밍 언어 및 프론트엔드 개발',
      description: 'JavaScript와 DOM, React 기초를 통해 프론트엔드 개발 역량을 키웁니다.',
      completed: false,
      tasks: [
        { name: 'JavaScript 기본 문법 익히기', completed: false },
        { name: 'DOM 조작 및 이벤트 핸들링 실습', completed: false },
        { name: 'React 컴포넌트 및 상태 관리 학습', completed: false }
      ],
      resources: ['JavaScript Info', 'React 공식문서', '코딩애플']
    },
    {
      id: '3',
      period: '3개월차',
      title: '백엔드 개발의 기초 다지기',
      description: 'Node.js, Express, 데이터베이스(SQL/NoSQL)까지 백엔드 주요 기술을 익힙니다.',
      completed: false,
      tasks: [
        { name: 'Node.js 기반 서버 구축 실습', completed: false },
        { name: 'REST API 설계 및 Postman 테스트', completed: false },
        { name: 'SQL / NoSQL 기초 문법 및 CRUD 실습', completed: false }
      ],
      resources: ['Node.js 공식문서', 'Express 튜토리얼', 'MySQL/PostgreSQL', 'MongoDB 문서']
    },
    {
      id: '4',
      period: '4개월차',
      title: '풀스택 프로젝트 제작',
      description: '프론트와 백엔드를 연동한 웹 서비스를 직접 기획, 개발, 배포까지 진행합니다.',
      completed: false,
      tasks: [
        { name: 'React + Express 연동 프로젝트 제작', completed: false },
        { name: 'MongoDB/MySQL 등 DB 연동 구현', completed: false },
        { name: 'GitHub 및 블로그에 프로젝트 기록', completed: false }
      ],
      resources: ['Render/Netlify/Vercel', 'GitHub Pages', '기술 블로그']
    },
    {
      id: '5',
      period: '5개월차',
      title: '배포 및 인프라 기초',
      description: '배포 및 운영 환경 이해를 위해 Docker, 클라우드 기초, CI/CD 흐름 등을 학습합니다.',
      completed: false,
      tasks: [
        { name: 'Docker로 개발환경 구성 실습', completed: false },
        { name: 'GitHub Actions 등 CI/CD 파이프라인 이해', completed: false },
        { name: 'AWS S3, EC2 등 클라우드 기초 사용', completed: false }
      ],
      resources: ['Docker 튜토리얼', 'AWS 클라우드 기초', 'DevOps 강의']
    },
    {
      id: '6',
      period: '6개월차',
      title: '포트폴리오 및 취업 준비',
      description: '이력서, 자기소개서, 면접 준비와 함께 실무를 반영한 포트폴리오를 정리합니다.',
      completed: false,
      tasks: [
        { name: '포트폴리오 정리 및 배포', completed: false },
        { name: '이력서 및 자기소개서 피드백', completed: false },
        { name: 'IT 면접 및 코딩테스트 준비', completed: false }
      ],
      resources: ['이력서 가이드', '면접 질문 모음', '백준/프로그래머스', 'TIL 블로그']
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