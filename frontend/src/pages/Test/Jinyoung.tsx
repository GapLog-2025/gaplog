// 진영 테스트 페이지
import { CertificateCard } from '@/features/Home/ui/card/CertificateCard';
import SectionBlock from '@/features/Home/ui/SectionBlock';
import { certificateList } from '@/features/Home/data/cerificateList';

import { reviewData } from '@/features/GapReview/data/reviewList';
import ReviewCard from '@/features/GapReview/ui/reviewCard';

import { TimelineCard } from '@/features/Home/ui/card/TimelineCard';
export default function Jinyoung() {
  return (
    <>
      <div className="w-[842px] mx-auto flex flex-col gap-10 my-10">
        <SectionBlock title="맞춤 자격증 추천">
          {certificateList.map((certificate, index) => (
            <CertificateCard key={certificate.name + index} {...certificate} />
          ))}
        </SectionBlock>
        <div className="flex flex-col gap-4">
          <ReviewCard type="purple" {...reviewData} />
          <ReviewCard type="skyblue" {...reviewData} />
          <ReviewCard type="yellow" {...reviewData} />
          <ReviewCard type="green" {...reviewData} />
        </div>
        <div>
          <TimelineCard />
        </div>
      </div>
    </>
  );
}
