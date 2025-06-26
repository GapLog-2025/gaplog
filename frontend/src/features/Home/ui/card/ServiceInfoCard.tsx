import { MoveButton } from '@/components/Button';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { useNavigate } from 'react-router-dom';
import Divider from '@/components/Divider';

export default function ServiceInfoCard() {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader className="w-full flex justify-between items-center">
        <div>
          <p className="typo-subheading text-secondary  leading-none">
            서비스 안내
          </p>
          <p className="typo-small text-main leading-none">
            공백기를 기록하고, 나를 이해하는 시간
          </p>
        </div>
      </CardHeader>
      <CardContent className="typo-small text-secondary flex flex-col gap-2">
        <div className="mb-2 flex flex-col gap-2">
          <div className="flex items-center gap-4 ">
            <div className="w-2 h-2 bg-gd-point-main rounded-full " />
            <p>갭로그는 당신의 공백기를 기록하는 서비스입니다.</p>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="w-2 h-2 bg-gd-point-main rounded-full " />
            <p>감정, 활동, 고민을 남기며 나만의 여정을 정리해보세요.</p>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="w-2 h-2 bg-gd-point-main rounded-full " />
            <p>이 기록은 새로운 도전을 준비할 때 큰 힘이 될 거예요.</p>
          </div>
        </div>
        <Divider />
        <div className="mt-1 typo-small text-primary flex flex-col w-full items-center gap-2">
          <p>갭로그 서비스에 대해 더 자세히 알고 싶다면?</p>
          <MoveButton type="primary" onClick={() => navigate('/about/service')}>
            서비스 소개 이동하기
          </MoveButton>
        </div>
      </CardContent>
    </Card>
  );
}
