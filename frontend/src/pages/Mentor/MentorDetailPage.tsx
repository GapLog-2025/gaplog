import Layout from '@/components/Layout';
import MentorAside from '@/features/Mentor/MentorAside';
import MentorDetailSection from '@/features/Mentor/MentorDetailSection';
export default function MentorDetailPage() {
  return (
    <Layout aside={<MentorAside />}>
      <MentorDetailSection />
    </Layout>
  );
}
