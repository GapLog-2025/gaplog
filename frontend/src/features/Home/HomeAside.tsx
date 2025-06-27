import UserCard from '@/components/UserCard';
import TopReviewCard from '../GapReview/ui/TopReviewCard';
import RecentCareCard from '../Care/ui/RecentCareCard';
import ServiceInfoCard from './ui/card/ServiceInfoCard';
export default function HomeAside() {
  return (
    <>
      <UserCard />
      <TopReviewCard />
      <RecentCareCard />
      <ServiceInfoCard />
    </>
  );
}
