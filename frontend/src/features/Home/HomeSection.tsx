import { Heart, BookOpen } from 'lucide-react';
import Divider from '@/components/Divider';
import SectionBlock from '@/features/Home/ui/SectionBlock';
import { MoveButton } from '@/components/Button';
// message
import MessageCard from '@/features/Home/ui/card/MessageCard';
import { messageList } from '@/features/Home/data/messageList';
import { selectTwoRandom } from '@/features/Home/utils/selectTwoRandom';
import { CertificateFallbackCard } from './ui/card/CertificateCard';
// reivew
import ReviewCard from '@/features/temp/ui/ReviewCard';
import { reviewData } from '@/features/temp/data/reviewList';
import { useNavigate } from 'react-router-dom';
import { TimelineFallbackCard } from './ui/card/TimelineCard';

export default function HomeSection() {
  // 메시지 2개 랜덤 가져오기
  const [msg1, msg2] = selectTwoRandom(messageList);
  // 리뷰 색상 고정 2개
  const reviewColors = ['primary', 'skyblue'] as const;
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-20">
      {/* 응원과 자격증 추천*/}
      <div className="w-full flex flex-col gap-8 ">
        <div className="flex gap-4 itemx-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px] ">
            <Heart className="text-white" />
          </div>
          <h1 className="typo-heading text-title pt-1">응원과 자격증 추천</h1>
        </div>
        {/* 응원 메시지 row */}
        <SectionBlock title="오늘의 응원 메시지">
          <MessageCard text={msg1} color="purple" />
          <MessageCard text={msg2} color="blue" />
        </SectionBlock>
        {/* 자격증 추천 */}
        <SectionBlock title="맞춤 자격증 추천">
          <CertificateFallbackCard />
        </SectionBlock>
      </div>
      <Divider />
      {/* 공백기 후기 */}
      <div className="w-full flex flex-col gap-8 ">
        <div className="flex gap-4 itemx-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px] ">
            <BookOpen className="text-white" />
          </div>
          <h1 className="typo-heading text-title pt-1">공백기 후기</h1>
        </div>
        {reviewColors.map((color, index) => (
          <ReviewCard
            key={index}
            type={color}
            {...reviewData}
            onClick={() => navigate('/gap-review')}
          />
        ))}
        <div className="w-full flex justify-center mb-5">
          <MoveButton onClick={() => navigate('/gap-review')}>
            더 많은 후기 보러 가기
          </MoveButton>
        </div>
      </div>
      {/* timeline */}
      <TimelineFallbackCard />
    </section>
  );
}
