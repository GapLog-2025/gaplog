import Layout from '@/components/Layout';
import GapReviewAside from '@/features/GapReview/GapReviewAside';
import GapReviewWriteSection from '@/features/GapReview/GapReviewWriteSection';
export default function GapReviewWritePage() {
  return (
    <Layout aside={<GapReviewAside />}>
      <GapReviewWriteSection />
    </Layout>
  );
}
