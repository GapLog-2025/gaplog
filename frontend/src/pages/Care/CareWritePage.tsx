import Layout from '@/components/Layout';
import CareAside from '@/features/Care/CareAside';
import CareWriteSection from '@/features/Care/CareWriteSection';
export default function CareWritePage() {
  return (
    <Layout aside={<CareAside />}>
      <CareWriteSection />
    </Layout>
  );
}
