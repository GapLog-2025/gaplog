import Tag from '@/components/Tag';
import { Calendar } from 'lucide-react';
import { type GapReview } from '@/types/gapReview';
import formatDate from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';

type CardColor = 'primary' | 'skyblue' | 'yellow' | 'green';

interface ReviewCardProps {
  review: GapReview;
  type: CardColor;
}

export default function ReviewCard({ review, type }: ReviewCardProps) {
  const {
    gapReviewsId,
    title,
    content,
    userName,
    major,
    gapPeriodMonths,
    createdAt,
    grade,
    isMajor,
  } = review;

  const colorMap = {
    primary: {
      background: 'bg-primary-primary-background',
      border: 'border border-primary',
      borderLeft: 'border-l-8 border-l-primary',
    },
    skyblue: {
      background: 'bg-point-blue-background',
      border: 'border border-skyblue',
      borderLeft: 'border-l-8 border-l-skyblue',
    },
    yellow: {
      background: 'bg-point-yellow-background',
      border: 'border border-yellow',
      borderLeft: 'border-l-8 border-l-yellow',
    },
    green: {
      background: 'bg-success-background',
      border: 'border border-green',
      borderLeft: 'border-l-8 border-l-green',
    },
  };
  const theme = colorMap[type];

  // 게시글 태그 리스트
  const tags = [`공백기 ${gapPeriodMonths}개월 이하`, `학점 ${grade} 이상`];
  if (isMajor) {
    tags.push('전공자');
  } else {
    tags.push('비전공자');
  }

  const navigate = useNavigate();

  return (
    <button
      className={`flex w-full text-start justify-between h-[264px] rounded-xl border ${theme.borderLeft} px-12 py-8 hover:shadow-lg`}
      onClick={() => navigate(`/gap-review/${gapReviewsId}`)}
    >
      {/* img */}
      <div className={`${theme.background} w-[200px] h-[200px] rounded-xl`} />
      {/* review contents */}
      <div className="w-[70%] h-full flex flex-col justify-between">
        {/* tags */}
        <div className="flex gap-4">
          {tags.map((content, index) => (
            <Tag
              key={index}
              type={type}
              label={content}
              className={`${theme.border}`}
            />
          ))}
        </div>
        {/* title & description */}
        <p className="max-w-[500px] typo-subheading font-bold text-title">
          {title}
        </p>
        <div className="typo-text text-secondary line-clamp-2">{content}</div>
        {/* info */}
        <div className="w-full flex justify-between text-secondary typo-text">
          <p>
            <span className="typo-strong">{userName}</span> | {major}
          </p>
          <div className="flex gap-2 justify-center">
            <Calendar size={'18px'} />
            <span className="font-bold">{formatDate(createdAt)}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
