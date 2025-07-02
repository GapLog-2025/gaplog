import { useNavigate } from 'react-router-dom';
import { ActionButton } from '@/components/Button';
import { PenSquare, Heart } from 'lucide-react';
import CareReportCard from '@/features/Care/ui/CareReportCard';
import WeeklyCareCard from './ui/WeeklyCareCard';

export default function CareSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col gap-10">
      {/* 제목 */}
      <div className="w-full flex justify-between">
        <div className="flex gap-4 items-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
            <Heart className="text-white" />
          </div>
          <h1 className="typo-heading text-title leading-none">마음 챙김</h1>
        </div>
        <ActionButton onClick={() => navigate('/care/write')}>
          <div className="flex gap-3 items-center">
            <PenSquare />
            <span className="leading-none">감정 일기 작성하기</span>
          </div>
        </ActionButton>
      </div>

      {/* 감정 리포트 */}
      <CareReportCard />
      <WeeklyCareCard />
    </section>
  );
}
