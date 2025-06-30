import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { sampleMentorList } from './data/mentorList';
import { MessageSquare, Heart, HeartMinus } from 'lucide-react';
import { MoveButton, EditButton, DeleteButton } from '@/components/Button';
import useHandleBack from '../GapReview/hook/handleBack';
import { useAuthStore } from '@/stores/useAuthStore';
import Tag from '@/components/Tag';
import { Card, CardHeader, CardContent } from '@/components/Card';
import formatDate from '@/utils/formatDate';
import { Avatar } from '@mui/material';
import { LikedButton } from '@/components/Button';
import ReplyCard from './ui/ReplyCard';
import ReplyForm from './ui/ReplyForm';

export default function MentorDetailSection() {
  const { id } = useParams();
  const handleback = useHandleBack();
  const mentorId = parseInt(id ?? '', 10);
  const mentorArticle = sampleMentorList.find(
    (item) => item.mentorId === mentorId,
  );
  const [likesTotal, setLikesTotal] = useState(mentorArticle?.likes || 0);

  const colorTypes = ['primary', 'skyblue', 'green'] as const;
  const [isLiked, setIsLiked] = useState(false);

  // post api 연결 예정
  // 좋아요 버튼 클릭 시 isLiked만 변경
  const toggleLiked = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  // isLiked가 바뀌면 likesTotal을 변경
  useEffect(() => {
    setLikesTotal((prev) => (isLiked ? prev + 1 : prev - 1));
  }, [isLiked]);

  const { user } = useAuthStore();
  const [replyContent, setReplyContent] = useState('');

  if (!mentorArticle) {
    return (
      <div>
        <p>일치하는 데이터 없음</p>
      </div>
    );
  }
  const tags = [
    `공백기 ${mentorArticle.gapPeriodMonths}개월 이하`,
    `학점 ${mentorArticle.grade} 이상`,
  ];

  if (mentorArticle.isMajor) {
    tags.push('전공자');
  } else {
    tags.push('비전공자');
  }

  return (
    <section className="w-full flex flex-col gap-5">
      {/* heading */}
      <div className="flex gap-4 items-center mb-2">
        <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
          <MessageSquare className="text-white" />
        </div>
        <h1 className="typo-heading text-title pt-1">멘토에게 질문하기</h1>
      </div>
      <div className="flex justify-between items-center">
        <MoveButton onClick={handleback}>뒤로가기</MoveButton>
        {user?.name === mentorArticle.userName && (
          <div className="flex gap-3">
            <EditButton />
            <DeleteButton />
          </div>
        )}
      </div>
      <Card className="p-8">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex py-1 gap-4 items-end pb-3">
              <Avatar alt="프로필 이미지" sx={{ width: 52, height: 52 }} />{' '}
              <div className="flex flex-col gap-2">
                {/* info */}
                <div className="flex justify-between">
                  <div className="flex items-end gap-2 typo-text text-main ml-1">
                    <p className="font-semibold leading-none text-secondary">
                      {mentorArticle.userName}
                    </p>
                    <p className="leading-none">
                      {formatDate(mentorArticle.createdAt)}
                    </p>
                  </div>
                </div>
                {/* tags */}
                <div className="w-full flex justify-between items-center">
                  <div className="h-full flex gap-2">
                    {tags.map((content, index) => (
                      <Tag
                        key={index}
                        type={colorTypes[index]}
                        label={content}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <LikedButton isLiked={isLiked} onClick={toggleLiked}>
                <div className="flex justify-center items-center gap-4">
                  {isLiked ? <HeartMinus size={20} /> : <Heart size={20} />}
                  <p>{isLiked ? '좋아요 해제' : '좋아요'}</p>
                  <p>{likesTotal}</p>
                </div>
              </LikedButton>
            </div>
          </div>

          {/* title */}
          <h1 className="typo-heading">{mentorArticle.title}</h1>
        </CardHeader>
        <CardContent className="flex flex-col typo-text text-secondary py-8">
          {mentorArticle.content}
        </CardContent>
      </Card>

      {/* 답변 리스트 */}
      <h2 className="typo-subheading pt-4 text-black">
        답변 {mentorArticle.replies.length}
      </h2>
      {mentorArticle.replies.length > 0 &&
        mentorArticle.replies.map((reply) => <ReplyCard reply={reply} />)}

      {/* 답변 작성 */}
      <div className="flex flex-col mt-8 gap-8 items-end">
        <ReplyForm content={replyContent} onContentChange={setReplyContent} />
        <div>
          <button
            onClick={() => console.log('답변 등록 연결 예정')}
            disabled={!replyContent}
            className={`h-full flex gap-2 justify-center items-center px-6 py-3 typo-text text-white rounded-lg ${
              replyContent
                ? 'bg-primary hover:bg-primary-active'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            답변 작성하기
          </button>
        </div>
      </div>
    </section>
  );
}
