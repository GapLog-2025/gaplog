import Layout from '@/components/Layout';
import HomeAside from '@/features/Home/HomeAside';

export default function HomePage() {
  return (
    <Layout aside={<HomeAside />}>
      <h1>홈 페이지입니다.</h1>
    </Layout>
  );
}
