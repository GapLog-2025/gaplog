// 진영 테스트 페이지
import { CertificateCard } from '@/features/Home/ui/card/CertificateCard';
import SectionBlock from '@/features/Home/ui/SectionBlock';
import { certificateList } from '@/features/Home/data/cerificateList';

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

        <div>
          <TimelineCard />
        </div>
      </div>
    </>
  );
}
