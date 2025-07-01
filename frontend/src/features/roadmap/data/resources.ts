type ResourceItem = {
  title: string;
  platform: string;
  description: string;
  link: string;
};


export const resources: Record<'itCareerRoadmap' | 'backend' | 'designer', ResourceItem[]> = {
  itCareerRoadmap: [
    {
      title: '생활코딩 - HTML',
      platform: 'YouTube',
      description: 'HTML의 기본 구조와 태그를 쉽게 설명해주는 입문자용 강의입니다. 44개의 짧은 영상으로 구성되어 있습니다.',
      link: 'https://www.youtube.com/watch?v=OGFgdro160I&list=PLuHgQVnccGMDUzDDCKW-pCZQY-MMCX5yB',
    },
    {
      title: '드림코딩 - HTML/CSS/JavaScript',
      platform: 'YouTube',
      description: 'HTML/CSS/JavaScript 관련 초보자도 따라할 수 있는 실습 중심의 프론트엔드 종합 강의입니다.',
      link: 'https://www.youtube.com/watch?v=v2Aw9f-MK5s&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y',
    },
    {
      title: '조코딩 - Node.js 백엔드 기초 끝내기',
      platform: 'YouTube',
      description: 'Node.js, npm 모듈 기초, express 프레임워크로 자바스크립트 API를 구현하는 강의입니다.',
      link: 'https://www.youtube.com/watch?v=Tt_tKhhhJqY',
    },
  ],
  backend: [
    {
      title: 'Node.js 교과서',
      platform: '책',
      description: 'Node.js를 이용한 서버 개발을 배울 수 있는 책입니다.',
      link: 'https://www.yes24.com/Product/Goods/1000000000000',
    },
    {
      title: 'SQL 튜토리얼',
      platform: '웹',
      description: '기초부터 고급까지 SQL을 학습할 수 있는 자료입니다.',
      link: 'https://www.w3schools.com/sql/',
    },
    {
      title: 'Spring Boot 가이드',
      platform: '웹',
      description: 'Spring Boot 프레임워크 학습을 위한 공식 가이드입니다.',
      link: 'https://spring.io/guides/gs/spring-boot/',
    },
  ],
  designer: [
    {
      title: 'Figma 공식 튜토리얼',
      platform: '웹',
      description: '디자인 협업 도구인 Figma의 사용법을 배울 수 있습니다.',
      link: 'https://www.figma.com/resources/learn-design/',
    },
    {
      title: 'Interaction Design Foundation',
      platform: '웹',
      description: 'UX/UI 디자인 관련 학습 플랫폼입니다.',
      link: 'https://www.interaction-design.org/',
    },
    {
      title: 'Adobe XD 가이드',
      platform: '웹',
      description: 'Adobe XD를 활용한 프로토타이핑 방법을 학습할 수 있습니다.',
      link: 'https://helpx.adobe.com/kr/xd/tutorials.html',
    },
  ],
} as const;