import Tag from '@/components/Tag';
import { Calendar, Tally1, Heart } from 'lucide-react';
import { type Mentor } from '@/types/mentor';
import formatDate from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';

import { Avatar } from '@mui/material';

type CardColor = 'primary' | 'skyblue' | 'yellow' | 'green';

interface MentorCardProps {
  article: Mentor;
  type: CardColor;
}

export default function MentorCard({ article, type }: MentorCardProps) {
  const {
    mentorId,
    title,
    content,
    category,
    userName,
    major,
    gapPeriodMonths,
    createdAt,
    grade,
    isMajor,
    likes,
    replies,
  } = article;

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
      className={`flex w-full text-start justify-between h-[320px] rounded-xl border ${theme.borderLeft} px-12 py-8 hover:shadow-lg`}
      onClick={() => navigate(`/gap-review/${mentorId}`)}
    >
      {/* review contents */}
      <div className="w-full h-full flex flex-col justify-between typo-text text-main">
        <div className="flex flex-col gap-4">
          {/* info */}
          <div className="flex gap-2 items-center">
            <p className="typo-strong text-secondary">직무</p>
            <Tally1 size={16} />
            <p>{category}</p>
            <p>{major}</p>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex gap-5 items-center typo-strong text-secondary">
              <Avatar />
              {userName}
            </div>
            <div className="flex gap-2 justify-center pr-4">
              <Calendar size={'18px'} />
              <span className="font-bold">{formatDate(createdAt)}</span>
            </div>
          </div>
        </div>

        {/* 게시글 좋아요 & 답글 상태 */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center typo-small text-disabled">
            <div className="flex justify-center items-center text-white p-1 rounded-full bg-pink ">
              <Heart size={16} />
            </div>
            <span>좋아요</span>
            <span className="font-semibold">{likes}</span>
          </div>
          <div>{replies.length}</div>
        </div>

        {/* title & description */}
        <p className="max-w-[500px] typo-subheading font-bold text-title">
          {title}
        </p>
        <div className="typo-text text-secondary line-clamp-2">{content}</div>

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
      </div>
    </button>
  );
}
