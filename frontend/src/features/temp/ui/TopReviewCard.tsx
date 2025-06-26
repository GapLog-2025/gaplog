import { Card, CardHeader, CardContent } from '@/components/Card';
import { MoreButton } from '@/components/Button';
import { topReviewData } from '../data/reviewList';
import Tag from '@/components/Tag';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type ReviewItem = {
  name: string;
  job: string;
  title: string;
};

type TopReviewContentProps = {
  data: ReviewItem[];
};
function TopReviewContent({ data }: TopReviewContentProps) {
  const tagColors = ['primary', 'skyblue', 'green'] as const;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        // 임시 갭 리뷰 전체 페이지 이동
        <button
          key={index}
          className="flex gap-5 items-start px-3 py-1 hover:bg-gray-100 rounded-md"
          onClick={() => navigate('gap-review')}
        >
          <Avatar
            alt="인기 리뷰 아바타 이미지"
            sx={{ width: 48, height: 48 }}
          />
          <div className="flex flex-col justify-center gap-1">
            <div className="flex gap-2">
              <span className="typo-strong text-title">{item.name}</span>
              <Tag type={tagColors[index]} label={item.job} />
            </div>
            <p className="typo-text text-main">{item.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function TopReviewCard() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading leading-none">인기 후기</p>
        {/* 임시 갭리뷰 전체 페이지 이동 */}
        <MoreButton onClick={() => navigate('/gap-review')} />
      </CardHeader>
      <CardContent>
        <TopReviewContent data={topReviewData} />
      </CardContent>
    </Card>
  );
}
