import Layout from '@/components/Layout';
import GapReviewListSection from '@/features/GapReview/GapReviewListSection';
import GapReviewAside from '@/features/GapReview/GapReviewAside';
export default function GapReviewListPage() {
  return (
    <Layout aside={<GapReviewAside />}>
      <GapReviewListSection />
    </Layout>
  );
}
