import Layout from '@/components/Layout';
import HomeAside from '@/features/Home/HomeAside';
import HomeSection from '@/features/Home/HomeSection';

export default function HomePage() {
  return (
    <Layout aside={<HomeAside />}>
      <HomeSection />
    </Layout>
  );
}
