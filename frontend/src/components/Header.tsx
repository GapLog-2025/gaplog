import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  House,
  BookOpen,
  MessageSquare,
  Building,
  Heart,
  MapPin,
} from 'lucide-react';

import { ActionButton, MoveButton } from './Button';

const tabs = [
  { name: '홈', path: '/', icon: <House /> },
  { name: '공백기 후기', path: '/gap-review', icon: <BookOpen /> },
  { name: '멘토에게 질문하기', path: '/mentoring', icon: <MessageSquare /> },
  { name: '강소 기업', path: '/companies', icon: <Building /> },
  { name: '마음 챙김', path: '/care', icon: <Heart /> },
  { name: '취업 로드맵', path: '/roadmap', icon: <MapPin /> },
];

function Header() {
  // header 반응형 설정을 위한 변수 선언
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // 일정 높이 이하면 가려짐
      if (currentY <= 40) {
        setIsNavVisible(true);
      } else if (currentY > lastScrollY) {
        // 아래로 스크롤 : 탭 숨김
        setIsNavVisible(false);
      } else {
        // 위로 스크롤 : 탭 보임
        setIsNavVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();
  return (
    // 최상단 고정 헤더
    <header className="fixed top-0 left-0 w-full z-[999] bg-white border-b border-border shadow-sm">
      {/* 로고 & 로그인 & 회원가입 */}
      <div className="w-full px-10 pt-10 pb-5">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/gaplog_icon.png" alt="갭로그 로고" />
            <span className="typo-subtitle text-black">갭로그</span>
          </NavLink>
          <div className="flex gap-4">
            <ActionButton onClick={() => navigate('/login')}>
              로그인
            </ActionButton>
            <MoveButton onClick={() => navigate('/signup')}>
              회원가입
            </MoveButton>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <nav
        className={`
    w-full border-t border-border whitespace-nowrap bg-white overflow-hidden transition-all duration-200
    ${isNavVisible ? 'max-h-[56px]' : 'max-h-0'}
  `}
      >
        <div className="flex gap-5 px-10 max-w-[1440px] min-w-[1024px] mx-auto h-[56px] items-center">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex justify-center items-center gap-3 py-3 px-4 ${
                  isActive
                    ? 'mt-[3px] border-b-[3px] border-primary-active text-primary-active'
                    : 'text-secondary hover:text-primary-active'
                }`
              }
            >
              {tab.icon}
              <span className="typo-strong leading-non">{tab.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
