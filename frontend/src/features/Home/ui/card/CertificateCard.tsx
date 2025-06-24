import React from 'react';
import { BookCheck, Calendar, ClockFading, Award } from 'lucide-react';
import MoveButton from '@/components/Button';
import { useNavigate } from 'react-router-dom';

import type { CertificateProps } from '@/types/certificate';

function CertificateCardLayout({
  classname,
  children,
}: {
  classname: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-full flex flex-col gap-5 rounded-xl bg-white border border-gray-200 p-4 px-8 py-10 ${classname}`}
    >
      {children}
    </div>
  );
}

// 기본 자격증 카드
function CertificateFallbackCard() {
  const navigate = useNavigate();
  return (
    <CertificateCardLayout classname="justify-center items-center">
      <div className="bg-primary-primary-background rounded-full w-[36px] h-[36px] flex justify-center items-center">
        <BookCheck className="text-primary" />
      </div>
      <div className="text-center">
        <p className="typo-text text-secondary">
          정보처리기사, SQLD… 어떤 자격증이 내게 필요할까?
        </p>
        <p className="typo-heading text-title">
          지금 어떤 자격증을 준비해야 할지 고민된다면?
        </p>
      </div>
      <div className="flex flex-col gap-4 text-secondary">
        <p className="typo-subheading text-center">
          준비 중인 직무와 보유한 자격증 정보를 입력하면,
        </p>
        <div className="flex gap-5 typo-heading justify-center items-center">
          <div className="flex gap-2 items-center">
            <Calendar className="mb-1" />
            <p>시험일</p>
          </div>
          <div className="flex gap-2 tems-center">
            <ClockFading className="mb-1" />
            <p>접수기간</p>
          </div>
          <p className="font-bold text-transparent bg-clip-text bg-gd-point-main ">
            인기도
          </p>
        </div>
        <p className="typo-subheading text-center">
          한눈에 볼 수 있는 <span className="font-bold">맞춤 자격증 정보</span>
          를 안내해 드립니다!
        </p>
      </div>
      <MoveButton type="primary" onClick={() => navigate('/roadmap')}>
        취업 로드맵 이동하기
      </MoveButton>
    </CertificateCardLayout>
  );
}
// 맞춤 자격증 카드

function CertificateCard({
  name,
  description,
  url,
  examDate,
  applyPeriod,
  popularity,
}: CertificateProps) {
  // 해당 시험 페이지 방문하기 함수
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <CertificateCardLayout classname="max-w-[400px]">
      {/* cardTitle */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-primary-primary-background rounded-full w-[36px] h-[36px] flex justify-center items-center">
            <Award className="text-primary" />
          </div>
          <span className="text-secondary typo-heading">{name}</span>
        </div>
        <MoveButton type="primary" onClick={handleClick}>
          방문하기
        </MoveButton>
      </div>
      {/* cardContent */}
      <p className="typo-text text-main">{description}</p>
      <div className="flex flex-col gap-3 text-secondar">
        {/* 시험일 */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Calendar className="mb-1" size={'20px'} />
            <span className="typo-strong">시험일</span>
          </div>
          <p className="typo-text text-main">{examDate}</p>
        </div>
      </div>
      {/* 접수일 */}
      <div className="flex flex-col gap-3 text-secondar">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ClockFading className="mb-1 " size={'20px'} />
            <span className="typo-strong">접수기간</span>
          </div>
          <p className="typo-text text-main">
            {applyPeriod.start} ~ {applyPeriod.end}
          </p>
        </div>
      </div>
      {/* 인기도 */}
      <div>
        <div className="flex justify-between typo-strong ">
          <p>인기도</p>
          <p className="text-primary-active">{popularity}%</p>
        </div>
        <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden mt-2">
          <div
            className="h-full bg-gd-point-main"
            style={{ width: `${popularity}%` }}
          />
        </div>
      </div>
    </CertificateCardLayout>
  );
}

export { CertificateFallbackCard, CertificateCard };
