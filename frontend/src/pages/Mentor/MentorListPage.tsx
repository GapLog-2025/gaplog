import Layout from '@/components/Layout';
import MentorAside from '@/features/Mentor/MentorAside';
import MentorListSection from '@/features/Mentor/MentorListSection';
export default function MentorListage() {
  return (
    <Layout aside={<MentorAside />}>
      <MentorListSection />
    </Layout>
  );
}
