import UserCard from '@/components/UserCard';
import TopReviewCard from './ui/TopReviewCard';
import { useAuthStore } from '@/stores/useAuthStore';
import { BookmarkedCard, BookmarkedFallbackCard } from './ui/BookmarkedCard';
import { sampleReviews } from './data/reviewList';

export default function GapReviewAside() {
  const { user, isLoggedIn } = useAuthStore();

  const bookmarkedReviews = sampleReviews
    ? sampleReviews.filter((review) => review.bookmarked === true)
    : [];

  return (
    <>
      <UserCard />
      <TopReviewCard />
      {isLoggedIn &&
        user &&
        (bookmarkedReviews.length > 0 ? (
          <BookmarkedCard data={bookmarkedReviews} />
        ) : (
          <BookmarkedFallbackCard />
        ))}
    </>
  );
}
