import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ForumIcon from '@mui/icons-material/Forum';
import MapIcon from '@mui/icons-material/Map';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { useNavigate } from 'react-router-dom';

export default function Service() {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* 서비스 소개 헤더 */}
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-100 text-purple-600 font-bold px-4 py-2 rounded-full mb-4">
          갭로그 서비스 소개
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          공백기도{" "}
          <span className="bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            소중한 경험
          </span>
          으로
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          갭로그는 공백기, 낮은 학점, 비전공, 경력 단절 등으로 인해 취업과 커리어 설계에 심리적 위축을 겪는 청년들에게
          회복과 도전의 실마리를 제공하는 공감 기반 커리어 콘텐츠 플랫폼입니다.
        </p>
      </div>

      {/* 주요 기능 소개 */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          갭로그 주요 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 공백기 후기 공유 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <ForumIcon sx={{ fontSize: 32, color: '#9c27b0' }} />
            </div>
            <h3 className="text-xl font-bold mb-4">공백기 후기 공유</h3>
            <p className="text-gray-600">
              비슷한 경험을 가진 선배들의 극복 사례와 취업 성공 스토리를 통해 용기와 인사이트를 얻을 수 있습니다.
            </p>
          </div>

          {/* 맞춤형 취업 로드맵 */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MapIcon sx={{ fontSize: 32, color: '#00acc1' }} />
            </div>
            <h3 className="text-xl font-bold mb-4">맞춤형 취업 로드맵</h3>
            <p className="text-gray-600">
              개인의 상황과 목표에 맞는 취업 준비 로드맵을 제공하여 체계적인 커리어 준비를 도와드립니다.
            </p>
          </div>

          {/* 마음 챙김 지원 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <SelfImprovementIcon sx={{ fontSize: 32, color: '#ff9800' }} />
            </div>
            <h3 className="text-xl font-bold mb-4">마음 챙김 지원</h3>
            <p className="text-gray-600">
              취업 준비 과정에서 겪는 심리적 어려움을 관리하고 정서적 회복을 돕는 콘텐츠와 도구를 제공합니다.
            </p>
          </div>
          </div>
      </div>

      {/* 서비스 가치 */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          갭로그가 추구하는 가치
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                공감과 연결
              </h3>
              <p className="text-gray-600">
                비슷한 경험을 가진 사람들이 서로의 이야기를 공유하고 공감하며 연결될 수 있는 커뮤니티를 만듭니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-cyan-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                실질적인 도움
              </h3>
              <p className="text-gray-600">
                단순한 위로를 넘어 실제 취업에 도움이 되는 구체적인 정보와 실천 가능한 조언을 제공합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                다양성 존중
              </h3>
              <p className="text-gray-600">
                각자의 배경과 상황이 다름을 인정하고, 다양한 경로와 방식의 성공 사례를 보여줍니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                심리적 회복
              </h3>
              <p className="text-gray-600">
                취업 준비 과정에서 흔들릴 수 있는 자존감과 정신 건강을 회복하고 유지할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 서비스 이용 방법 */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          갭로그 이용 방법
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>
          <div className="space-y-16 md:space-y-0">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  STEP 1
                </div>
                <h3 className="text-xl font-bold mb-2">
                  회원가입 및 프로필 설정
                </h3>
                <p className="text-gray-600">
                  간단한 회원가입 후 나의 상황과 목표에 맞는 프로필을 설정하여 맞춤형 콘텐츠를 받아보세요.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="hidden md:block absolute top-0 left-0 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                <div className="bg-gray-100 rounded-lg p-4 md:p-6">
                  <img src="/ServiceInfo/step1.png" alt="회원가입 화면 이미지" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            <div className="md:flex items-center flex-row-reverse">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  STEP 2
                </div>
                <h3 className="text-xl font-bold mb-2">
                  공백기 후기 탐색
                </h3>
                <p className="text-gray-600">
                  비슷한 경험을 가진 선배들의 극복 사례와 취업 성공 스토리를 탐색하고 인사이트를 얻으세요.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-12 relative">
                <div className="hidden md:block absolute top-0 right-0 w-6 h-6 bg-cyan-500 rounded-full transform translate-x-1/2"></div>
                <div className="bg-gray-100 rounded-lg p-4 md:p-6">
                  <img src="/ServiceInfo/step2.png" alt="공백기 후기" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <div className="inline-block bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  STEP 3
                </div>
                <h3 className="text-xl font-bold mb-2">
                  맞춤형 로드맵 설정
                </h3>
                <p className="text-gray-600">
                  나의 상황과 목표에 맞는 취업 준비 로드맵을 설정하고 단계별로 필요한 자원을 확인하세요.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="hidden md:block absolute top-0 left-0 w-6 h-6 bg-amber-500 rounded-full transform -translate-x-1/2"></div>
                <div className="bg-gray-100 rounded-lg p-4 md:p-6">
                  	<img src="/ServiceInfo/step3.png" alt="로드맵" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            <div className="md:flex items-center flex-row-reverse">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  STEP 4
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI 포트폴리오 구성
                </h3>
                <p className="text-gray-600">
                  나의 이력과 목표를 기반으로 AI가 추천하는 맞춤형 포트폴리오 예시를 받아보고, 이를 기반으로 나만의 성장 기록을 구성하세요.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-12 relative">
                <div className="hidden md:block absolute top-0 right-0 w-6 h-6 bg-cyan-500 rounded-full transform translate-x-1/2"></div>
                <div className="bg-gray-100 rounded-lg p-4 md:p-6">
                  	<img src="/ServiceInfo/step4.png" alt="AI 포트폴리오" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <div className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  STEP 5
                </div>
                <h3 className="text-xl font-bold mb-2">
                  멘토링 및 커뮤니티 참여
                </h3>
                <p className="text-gray-600">
                  비슷한 경험을 가진 멘토와 연결되어 실질적인 조언을 받고, 커뮤니티에서 정보와 경험을 공유하세요.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="hidden md:block absolute top-0 left-0 w-6 h-6 bg-teal-500 rounded-full transform -translate-x-1/2"></div>
                <div className="bg-gray-100 rounded-lg p-4 md:p-6">
                  	<img src="/ServiceInfo/step5.png" alt="멘토링" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          갭로그와 함께 공백기를 의미있는 시간으로 만들고, 자신감을 회복하여 새로운 시작을 준비해보세요.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleSignUpClick}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
}