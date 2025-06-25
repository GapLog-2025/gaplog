import Divider from './Divider';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="mt-40 bg-[#F3F4F6] w-full px-20 py-10 select-none">
      <div className="w-full flex justify-between">
        {/* 서비스 안내 */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <img src="/gaplog_icon.png" alt="gaplog 로고" width={32} />
            <p className="typo-subheading text-title leading-none">갭로그</p>
          </div>
          <Divider />
          <p className="w-[460px] typo-text text-secondary">
            공백기, 낮은 학점, 비전공, 경력 단절 등으로 인해 취업과 커리어
            설계에 심리적 위축을 겪는 청년들을 위한 플랫폼
          </p>
        </div>
        {/* footer-nav content*/}
        <div className="flex gap-10">
          {/* 서비스 footer nav */}
          <div className="flex flex-col gap-4">
            <p className="typo-strong text-title">서비스</p>
            <div className="flex flex-col gap-2 typo-text text-main">
              <button
                onClick={() => navigate('/gap-review')}
                className="text-left p-0 m-0 w-full"
              >
                공백기 후기
              </button>
              <button
                onClick={() => navigate('/mentoring')}
                className="text-left p-0 m-0 w-full"
              >
                멘토링
              </button>
              <button
                onClick={() => navigate('/companies')}
                className="text-left p-0 m-0 w-full"
              >
                강소기업
              </button>
              <button
                onClick={() => navigate('/care')}
                className="text-left p-0 m-0 w-full"
              >
                마음 챙김
              </button>
            </div>
          </div>
          {/* 개발팀 footer nav */}
          <div className="flex flex-col gap-4">
            <p className="typo-strong text-title">개발팀</p>
            <div className="flex flex-col gap-2 typo-text text-main">
              <button
                onClick={() => navigate('/about/service')}
                className="text-left p-0 m-0 w-full"
              >
                서비스 소개
              </button>
              <button
                onClick={() => navigate('/about/mentoring')}
                className="text-left p-0 m-0 w-full"
              >
                팀 정보
              </button>
              <button
                onClick={() => navigate('/about/companies')}
                className="text-left p-0 m-0 w-full"
              >
                문의하기
              </button>
            </div>
          </div>
          {/* 고객센터 footer nav */}
          <div className="flex flex-col gap-4">
            <p className="typo-strong text-title">고객센터</p>
            <div className="flex flex-col gap-2 typo-text text-main">
              <button
                onClick={() => navigate('/support/faq')}
                className="text-left p-0 m-0 w-full"
              >
                자주 묻는 질문
              </button>
              <button
                onClick={() => navigate('/support/terms')}
                className="text-left p-0 m-0 w-full"
              >
                이용약관
              </button>
              <button
                onClick={() => navigate('/support/privacy"')}
                className="text-left p-0 m-0 w-full"
              >
                개인정보처리
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
