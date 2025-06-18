import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
  plugins: [],
};

export default config;
