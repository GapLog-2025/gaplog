import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomaPage';
import GapReviewPage from '@/pages/GapReviewPage';
import MentorPage from '@/pages/MentorPage';
import CarePage from '@/pages/CarePage';
import CompanyPage from '@/pages/CompanyPage';
import RoadmapPage from '@/pages/Roadmap';
import MyPage from '@/pages/MyPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import Jinyoung from '@/pages/Test/Jinyoung';
import Gimhyn from '@/pages/Test/GimHyn';
import Sinijini from '@/pages/Test/Sinijini';
export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 테스트 코드 작성을 위한 라우터 */}
      <Routes>
        <Route path="/jinyoung" element={<Jinyoung />} />
        <Route path="/gimhyn" element={<Gimhyn />} />
        <Route path="/sinijini" element={<Sinijini />} />
      </Routes>
      {/* 유저 확인 로직 반영 전 라우터 작성 -25.06.14 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/gap-review" element={<GapReviewPage />} />
        <Route path="/mentoring" element={<MentorPage />} />
        <Route path="/care" element={<CarePage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
