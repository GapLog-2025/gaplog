import { NavLink } from 'react-router-dom';
import {
  Search,
  House,
  BookOpen,
  MessageSquare,
  Building,
  Heart,
  MapPin,
} from 'lucide-react';
import React from 'react';

// tabs
const tabs = [
  { name: '홈', path: '/', icon: <House /> },
  { name: '공백기 후기', path: '/gap-review', icon: <BookOpen /> },
  { name: '멘토에게 질문하기', path: '/mentoring', icon: <MessageSquare /> },
  { name: '강소 기업', path: '/companies', icon: <Building /> },
  { name: '마음 챙김', path: '/care', icon: <Heart /> },
  { name: '취업 로드맵', path: '/roadmap', icon: <MapPin /> },
];

function Header() {
  return (
    <header className="w-full bg-white mx-auto">
      {/* 홈 로고 & 통합 검색 */}
      <div className="w-full border-b border-border">
        <div className="mx-auto flex justify-between items-center max-w-[1440px] pt-10 pb-5">
          {/* 로고 부분 */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/gaplog_icon.png" alt="갭로그 로고" />
            <span className="typo-subtitle text-black">갭로그</span>
          </NavLink>

          {/* 통합 검색 */}
          <button className="flex items-center gap-2 text-main hover:text-primary-active">
            {/* color에 "currentColor"를 주고, className의 text-* 으로 색상을 제어 */}
            <Search size={20} color="currentColor" />
            <span className="typo-subheading">통합검색</span>
          </button>
        </div>
      </div>
      {/* 네비게이션 탭 */}
      <nav className="w-full border-b border-border ">
        <div className="max-w-[1440px] flex gap-5 mx-auto">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex justify-center items-center gap-3 py-3 px-4  ${
                  isActive
                    ? 'mt-[3px] border-b-[3px] border-primary-active text-primary-active'
                    : 'text-secondary hover:text-primary-active'
                }`
              }
            >
              {tab.icon}
              <span className="typo-strong">{tab.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
