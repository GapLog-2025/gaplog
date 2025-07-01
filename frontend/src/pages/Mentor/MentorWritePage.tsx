import Layout from '@/components/Layout';
import MentorAside from '@/features/Mentor/MentorAside';
import MentorWriteSection from '@/features/Mentor/MentorWriteSection';
export default function MentorWritePage() {
  return (
    <Layout aside={<MentorAside />}>
      <MentorWriteSection />
    </Layout>
  );
}
