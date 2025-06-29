import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { MoreButton, MoveButton } from '@/components/Button';
import { type GapReview } from '@/types/gapReview';
import { Star } from 'lucide-react';

type bookmarkedCardProps = {
  data: GapReview[];
};

function BookmarkedContent({ data }: { data: GapReview }) {
  return (
    <button className="w-full flex flex-col gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
      <div className="text-start flex items-center gap-2 typo-text text-secondary">
        <Star size={24} className="text-primary" />
        <span className="line-clamp-1">{data.title}</span>
      </div>
      <p className="typo-small text-main line-clamp-2 text-start">
        {data.content}
      </p>
      <p className="typo-small text-disabled ml-auto">
        <span className="font-semibold">작성자</span> {data.userName}
      </p>
    </button>
  );
}

function BookmarkedCard({ data }: bookmarkedCardProps) {
  const navigate = useNavigate();
  // 즐겨찾기 보여지는 데이터는 2개 제한
  const displayData = data.length > 2 ? data.slice(0, 2) : data;

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading text-title leading-none">즐겨찾기</p>
        {/* 임시 이동 */}
        <MoreButton onClick={() => navigate('/gap-review')} />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {displayData.map((review) => (
          <BookmarkedContent key={review.gapReviewsId} data={review} />
        ))}
      </CardContent>
    </Card>
  );
}

function BookmarkedFallbackCard() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading text-title leading-none">즐겨찾기</p>
        <MoveButton type="primary" onClick={() => navigate('/gap-review')}>
          이동하기
        </MoveButton>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-3 px-3 py-2">
        <div className="flex items-center gap-3 text-secondary">
          <div className="w-[36px] h-[36px] flex justify-center items-center bg-gray-200 rounded-full ">
            <Star size={24} className="text-main" />
          </div>
          <p className="typo-strong text-secondary">
            즐겨찾기한 공백기 후기가 없습니다.
          </p>
        </div>
        <p className="typo-small text-main">
          공백을 지나온 사람들의 이야기를 만나러 가볼까요?
        </p>
      </CardContent>
    </Card>
  );
}

export { BookmarkedCard, BookmarkedFallbackCard };
