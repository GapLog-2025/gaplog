// 진영 테스트 페이지
import { CertificateCard } from '@/features/Home/ui/card/CertificateCard';
import SectionBlock from '@/features/Home/ui/SectionBlock';
import { certificateList } from '@/features/Home/data/cerificateList';

export default function Jinyoung() {
  return (
    <>
      <h1>로그인한 유저의 맞춤형 데이터가 있을 경우</h1>
      <div className="w-[842px]">
        <SectionBlock title="맞춤 자격증 추천">
          {certificateList.map((certificate, index) => (
            <CertificateCard key={certificate.name + index} {...certificate} />
          ))}
        </SectionBlock>
      </div>
    </>
  );
}
