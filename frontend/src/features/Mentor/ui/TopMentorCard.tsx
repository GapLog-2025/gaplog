import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/Card';
import { MoreButton } from '@/components/Button';
import { type Mentor } from '@/types/mentor';
import { sampleTopMentorList } from '../data/mentorList';

type TopMentorContentProps = {
  data: Mentor[];
};

function TopMentorContent({ data }: TopMentorContentProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-4">
      {data.map((item, index) => (
        // 임시 갭 리뷰 전체 페이지 이동
        <button
          key={index}
          className="flex flex-col gap-3 px-3 py-1 text-start hover:bg-gray-100 rounded-md"
          onClick={() => navigate(`/mentoring/${item.mentorId}`)}
        >
          <div className="flex items-start gap-4">
            {/* 순위 */}
            <p className="typo-heading text-green leading-none">{index + 1}</p>
            {/* 제목 및 작성자 */}
            <div className="flex flex-col gap-2">
              <p className="typo-strong text-title leading-none">
                {item.title}
              </p>
              <p className="typo-text text-main line-clamp-2">{item.content}</p>
            </div>
          </div>
          <div className="text-main typo-small w-full flex justify-between items-center pl-7">
            <p className="w-[120px] line-clamp-1">
              <span className="font-semibold">작성자</span> {item.userName}
            </p>
            <div className="flex">
              <p className="flex items-center gap-2 text-pink typo-small px-2 py-1">
                <span className="font-semibold">좋아요</span> {item.likes}
              </p>
              <p className="flex items-center gap-2 text-green typo-small px-2 py-1">
                <span className="font-semibold">답글 수</span>
                {item.replies.length}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function TopMentorCard() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading text-title leading-none">인기 질문글</p>
        {/* 임시 멘토링 전체 페이지 이동 */}
        <MoreButton onClick={() => navigate('/mentoring')} />
      </CardHeader>
      <TopMentorContent data={sampleTopMentorList.slice(0, 3)} />
    </Card>
  );
}
