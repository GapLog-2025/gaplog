import Layout from '@/components/Layout';
import GapReviewDetailSection from '@/features/GapReview/GapReviewDetailSection';
import GapReviewAside from '@/features/GapReview/GapReviewAside';

export default function GapReviewDetailPage() {
  return (
    <Layout aside={<GapReviewAside />}>
      <GapReviewDetailSection />
    </Layout>
  );
}
