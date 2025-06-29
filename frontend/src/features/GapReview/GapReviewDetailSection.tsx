import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sampleReviews } from './data/reviewList';
import NoDataContent from './ui/GapReviewDetail/NoDataContent';
import { MoveButton } from '@/components/Button';
import useHandleBack from './hook/handleBack';
import Tag from '@/components/Tag';
import { Card, CardHeader, CardContent } from '@/components/Card';
import formatDate from '@/utils/formatDate';

import { Calendar, Star, StarOff } from 'lucide-react';
import { BookmarkedButton } from '@/components/Button';

export default function GapReviewDetailSection() {
  const { id } = useParams();

  const reviewId = parseInt(id ?? '', 10);
  const review = sampleReviews.find((item) => item.gapReviewsId === reviewId);

  const [isBookmarked, setIsBookmarked] = useState(
    review ? review.bookmarked : true,
  );
  const handleback = useHandleBack();
  const toggleBookmark = () => {
    // post api 연결 예정
    setIsBookmarked((prev) => !prev);
  };

  if (!review) {
    return <NoDataContent />;
  }

  const tags = [
    `공백기 ${review.gapPeriodMonths}개월 이하`,
    `학점 ${review.grade} 이상`,
  ];
  if (review.isMajor) {
    tags.push('전공자');
  } else {
    tags.push('비전공자');
  }

  const colorTypes = ['primary', 'skyblue', 'green'] as const;

  return (
    <section className="w-full flex flex-col gap-5">
      <MoveButton onClick={handleback}>뒤로가기</MoveButton>
      <Card className="p-8">
        <CardHeader className="flex flex-col gap-2">
          {/* tags */}
          <div className="w-full flex justify-between items-center">
            <div className="h-full flex gap-4">
              {tags.map((content, index) => (
                <Tag key={index} type={colorTypes[index]} label={content} />
              ))}
            </div>
            <BookmarkedButton
              isBookmarked={isBookmarked}
              onClick={toggleBookmark}
            >
              <div className="flex justify-center items-center gap-4">
                {isBookmarked ? <Star size={20} /> : <StarOff size={20} />}
                <p>{isBookmarked ? '즐겨찾기 해제' : '즐겨찾기'}</p>
              </div>
            </BookmarkedButton>
          </div>
          {/* title */}
          <h1 className="typo-heading">{review.title}</h1>
          {/* info */}
          <div className="flex gap-4 typo-text text-main mt-1">
            <div className="flex justify-center items-center gap-2">
              <p className="font-semibold">작성자</p>
              <p>{review.userName}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Calendar size={20} />
              <p>{formatDate(review.createdAt)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col typo-text text-secondary py-8">
          {review.content}
        </CardContent>
      </Card>
    </section>
  );
}
