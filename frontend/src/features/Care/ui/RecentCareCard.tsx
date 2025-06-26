import { Card, CardHeader, CardContent } from '@/components/Card';
import { MoreButton } from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { RecentCareData } from '@/features/Care/data/CareList';
import { emotionColorMap, type Emotion } from '@/types/emotion';
import Tag from '@/components/Tag';

type EmotionLog = {
  emotion: Emotion;
  date: string;
  title: string;
  content: string;
};
function RecentCareContent({ data }: { data: EmotionLog[] }) {
  const navigate = useNavigate();
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
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <p className="typo-subheading leading-none">감정로그</p>
        {/* 임시 마음 챙김 전체 페이지 이동 */}
        <MoreButton onClick={() => navigate('/care')} />
      </CardHeader>
      <CardContent>
        <RecentCareContent data={RecentCareData} />
      </CardContent>
    </Card>
  );
}
