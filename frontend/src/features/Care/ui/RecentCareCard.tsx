import { Card, CardHeader, CardContent } from '@/components/Card';
import { MoreButton, MoveButton } from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { RecentCareData } from '@/features/Care/data/CareList';
import { emotionColorMap, type Emotion } from '@/types/emotion';
import Tag from '@/components/Tag';

import { SmilePlus } from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';

type EmotionLog = {
  emotion: Emotion;
  date: string;
  title: string;
  content: string;
};
function RecentCareContent({ data }: { data: EmotionLog[] }) {
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="w-full flex gap-4 p-4 border-0 border-l-4 border-l-primary">
        <div className="bg-primary-primary-background rounded-full w-[36px] h-[36px] flex justify-center items-center">
          <SmilePlus className="text-primary" />
        </div>
        <div className="mt-1 flex flex-col gap-2">
          <p className="typo-text text-secondary">
            아직 작성한 감정 일기가 없습니다.
          </p>
          <div>
            <p className="typo-small text-main">지금부터 기록을 시작하면, </p>
            <p className="typo-small text-main">
              나만의 감정 히스토리가 만들어져요.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full flex flex-col gap-2 p-4 border-0 border-l-4 border-l-${emotionColorMap[item.emotion]} cursor-pointer hover:bg-gray-100 hover:rounded-md`}
            // 임시 마음 챙김 페이지로 이동
            onClick={() => navigate('/care')}
          >
            <div className="flex justify-between items-center typo-small text-main">
              <Tag type={emotionColorMap[item.emotion]} label={item.emotion} />
              <span>{item.date}</span>
            </div>
            <div className="pl-2">
              <p className="mt-2 typo-strong text-title">{item.title}</p>
              <p className="typo-small text-main">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function RecentCareCard() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuthStore();

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading leading-none">감정로그</p>
        {RecentCareData.length === 0 ? (
          <MoveButton type="primary" onClick={() => navigate('/care')}>
            이동하기
          </MoveButton>
        ) : (
          <MoreButton onClick={() => navigate('/care')} />
        )}
        {/* 임시 마음 챙김 전체 페이지 이동 */}
      </CardHeader>
      <CardContent>
        {user && isLoggedIn ? (
          <RecentCareContent data={RecentCareData} />
        ) : (
          <div className="w-full flex gap-4 p-4 border-0 border-l-4 border-l-primary">
            <div className="bg-primary-primary-background rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <SmilePlus className="text-primary" />
            </div>
            <div className="mt-1 flex flex-col gap-2">
              <p className="typo-text text-secondary">
                당신의 하루, 감정과 함께 기록해보세요!
              </p>
              <p className="typo-small text-main">
                감정 일기 작성은 로그인이 필요합니다.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
