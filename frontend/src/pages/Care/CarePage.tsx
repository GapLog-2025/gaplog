import Layout from '@/components/Layout';
import CareAside from '@/features/Care/CareAside';
import CareSection from '@/features/Care/CareSection';

export default function CarePage() {
  return (
    <Layout aside={<CareAside />}>
      <CareSection />
    </Layout>
  );
}
