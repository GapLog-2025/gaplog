import { ActionButton } from '@/components/Button';
import { Clock, ThumbsUp, NotebookPen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TimelineFallbackCard() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#FBF4FC] rounded-xl flex justify-between px-10 py-5">
      <div className="max-w-[380px] flex flex-col items-center justify-center gap-10 text-center ">
        <div className="flex flex-col gap-4">
          <p className="typo-heading text-title">
            나만의 공백기 타임라인 만들기
          </p>
          <p className="typo-subheading text-main">
            공백기도 소중한 경험입니다. 그 시간동안의 활동, 감정, 배움을
            기록하고 시각화하여 의미 있는 스토리로 만들어보세요.
          </p>
        </div>
        {/* content */}
        <div className="w-[354px] flex items-start gap-4 text-secondary">
          <div className="bg-primary-primary-background rounded-full p-2 flex justify-center items-center text-primary">
            <Clock size={32} />
          </div>
          <div className="flex flex-col gap-1 text-start">
            <p className="typo-subheading font-bold">
              쉬었던 기간을 기록하세요
            </p>
            <p className="typo-text">
              공백기 동안의 활동, 감정, 배움을 시간순으로 정리할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="w-[354px] flex items-start gap-4 text-secondary">
          <div className="bg-point-yellow-background rounded-full p-2 flex justify-center items-center text-point-yellow-text">
            <ThumbsUp size={32} />
          </div>
          <div className="flex flex-col gap-1 text-start">
            <p className="typo-subheading font-bold">
              맞춤형 추천을 받을 수 있습니다
            </p>
            <p className="typo-text">
              나와 비슷한 경험들을 가진 사람들의 취업 경로와 자격증 추천을 받을
              수 있습니다.
            </p>
          </div>
        </div>
        <div className="w-[354px] flex items-start gap-4 text-secondary">
          <div className="bg-point-blue-background rounded-full p-2 flex justify-center items-center text-point-blue-text">
            <NotebookPen size={32} />
          </div>
          <div className="flex flex-col gap-1 text-start">
            <p className="typo-subheading font-bold">이력서에 활용하세요 </p>
            <p className="typo-text">
              기록한 타임라인을 이력서와 자기소개서 작성에 효과적으로 활용할 수
              있습니다.
            </p>
          </div>
        </div>
        {/* 임시 로드맵 페이지로 이동 */}
        <ActionButton size="large" onClick={() => navigate('/roadmap')}>
          타임라인 만들기
        </ActionButton>
      </div>
      <img src="/temp/timeline.png" alt="타임라인 임시 페이지" />
    </div>
  );
}

function TimelineCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FBF4FC] rounded-xl flex flex-col gap-5 justify-center items-center px-10 py-14">
      <p className="typo-subtitle text-title">
        이전에 작성한 타임라인이 있어요
      </p>
      <div className="typo-subheading text-main text-center">
        <p>새로운 경험이 생겼다면 지금 업데이트해볼까요?</p>
        <p>추천 결과가 최신 정보에 맞춰 반영됩니다.</p>
      </div>
      {/* 임시 로드맵 페이지로 이동 */}
      <div className="flex flex-col gap-1 justify-center items-center mt-4">
        <ActionButton size="large" onClick={() => navigate('/roadmap')}>
          타임라인 이동하기
        </ActionButton>
        <p className="typo-small text-main">
          추천은 입력한 직무·자격증 정보뿐 아니라, 공백기 동안의 활동 경험까지
          종합적으로 분석하여 제공됩니다.
        </p>
      </div>
    </div>
  );
}

export { TimelineFallbackCard, TimelineCard };
