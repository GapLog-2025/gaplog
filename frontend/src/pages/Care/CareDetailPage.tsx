import Layout from '@/components/Layout';
import CareAside from '@/features/Care/CareAside';
import CareDetailSection from '@/features/Care/CareDetailSection';
export default function CareDetailPage() {
  return (
    <Layout aside={<CareAside />}>
      <CareDetailSection />
    </Layout>
  );
}
