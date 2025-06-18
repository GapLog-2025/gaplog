import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// 텍스트 스타일 타입 선언
type TypoStyle = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
  textDecoration?: string;
};

// tailwind 활용 테마 및 스타일링 설정
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        primary: '#8B5CF6',
        'primary-active': '#A855F7',
        'primary-action': '#9333EA',
        'primary-primary-background': '#F3E8FF',
        background: '#F9FAFB',
        border: '#E2E8F0',
        white: '#FFFFFF',
        black: '#020817',
        title: '#111827',
        secondary: '#4B5563',
        main: '#6B7280',
        disabled: '#9CA3AF',
        'point-blue-background': '#CFFAFE',
        'point-blue-text': '#0E7490',
        'point-yellow-background': '#FEF3C7',
        'point-yellow-text': '#B4530A',
        'danger-background': '#FCE7F3',
        'danger-text': '#BE185D',
        'success-background': '#DCFCE7',
        'success-text': '#198240',
        'info-background': '#DBEAFE',
        'info-text': '#1E4ED8',
        yellow: '#F59E0C',
        pink: '#EC4899',
        green: '#22C55E',
        skyblue: '#06B6D4',
      },
      backgroundImage: {
        // 그라데이션 배경 정의
        'gd-point-purple': 'linear-gradient(to right, #F3E8FF, #FCE8F4)',
        'gd-point-blue': 'linear-gradient(to right, #DAEAFE, #CFFAFE)',
        'gd-point-main': 'linear-gradient(to right, #AB55F3, #DF4AAB)',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      // 1) 텍스트 스타일 맵
      const typography: Record<string, TypoStyle> = {
        'title-hero': {
          fontSize: '72px',
          lineHeight: '120%', // 120%
          letterSpacing: '-0.03em', // -3%
          fontWeight: theme('fontWeight.bold'),
        },
        title: {
          fontSize: '48px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: theme('fontWeight.bold'),
        },
        subtitle: {
          fontSize: '48px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: theme('fontWeight.bold'),
        },
        heading: {
          fontSize: '24px',
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: theme('fontWeight.medium'),
        },
        subheading: {
          fontSize: '20px',
          lineHeight: '120%',
          letterSpacing: '0em',
          fontWeight: theme('fontWeight.medium'),
        },
        text: {
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: theme('fontWeight.regular'),
        },
        link: {
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: theme('fontWeight.regular'),
          textDecoration: 'underline',
        },
        strong: {
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: theme('fontWeight.bold'),
        },
        small: {
          fontSize: '14px',
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: theme('fontWeight.regular'),
        },
      };

      // 2) matchUtilities로 typo-<key> 클래스 자동 생성
      matchUtilities(
        {
          typo: (value) => {
            const style = value as TypoStyle;
            return {
              fontSize: style.fontSize,
              lineHeight: style.lineHeight,
              letterSpacing: style.letterSpacing,
              fontWeight: style.fontWeight,
              ...(style.textDecoration && {
                textDecoration: style.textDecoration,
              }),
            };
          },
        },
        {
          values: typography,
          type: ['any'],
        },
      );
    }),
  ],
};

export default config;
