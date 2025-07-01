import { useNavigate } from 'react-router-dom';
import Tag from '@/components/Tag';
import { Calendar, Tally1, Heart, ChevronRight } from 'lucide-react';
import { type Mentor } from '@/types/mentor';
import formatDate from '@/utils/formatDate';

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

  // 답변 상태
  const isAnswered = replies.length > 0;
  const replyCountColor = isAnswered ? 'text-green' : 'text-main';
  const tagType = isAnswered ? 'green' : 'pink';
  const tagLabel = isAnswered ? '답변 완료' : '답변 대기';

  return (
    <button
      className={`flex w-full text-start justify-between h-[320px] rounded-xl border ${theme.borderLeft} px-12 py-8 hover:shadow-lg`}
      onClick={() => navigate(`/mentoring/${mentorId}`)}
    >
      {/* review contents */}
      <div className="w-full h-full flex flex-col justify-between typo-text text-main">
        <div className="flex flex-col gap-4">
          {/* info */}
          <div className="flex gap-2 items-center">
            <p className="typo-strong text-secondary">직무</p>
            <Tally1 size={16} />
            <div className="flex gap-1 items-center">
              <p>{category}</p>
              <ChevronRight size={18} />
              <p>{major}</p>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
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
        {/* 게시글 좋아요 & 답글 상태 */}
        <div className="flex justify-between items-end">
          {/* 좋아요 수  */}
          <div className="flex gap-2 items-center typo-small text-disabled ">
            <div
              className={`flex justify-center items-center text-white p-1 rounded-full ${likes > 0 ? 'bg-pink' : 'bg-disabled'} `}
            >
              <Heart size={16} />
            </div>
            <span className="leading-none">좋아요</span>
            <span className="font-semibold leading-none">{likes}</span>
          </div>
          {/* 답글 상태 */}
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center gap-2">
              <p className="typo-strong text-secondary">답변</p>
              <p className={`typo-heading ${replyCountColor}`}>
                {replies.length}
              </p>
            </div>
            <div>
              <Tag type={tagType} label={tagLabel} className="py-2" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
