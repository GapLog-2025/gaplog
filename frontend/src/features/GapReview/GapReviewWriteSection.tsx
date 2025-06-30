import { useState } from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import StepHeader from '@/components/StepHeader';
import BasicInfoForm from '@/components/BasicInputForm';
import SelectedSummary from '@/components/SelectedSummary';
import ReviewForm from '@/features/GapReview/ui/GapReviewWrite/ReviewForm';
import useHandleBack from '@/features/GapReview/hook/handleBack';
import { useNavigate } from 'react-router-dom';
export default function GapReviewWriteSection() {
  const handleBack = useHandleBack();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  // 1단계 상태
  const [category, setCategory] = useState('');
  const [isMajor, setIsMajor] = useState<boolean | null>(null);
  const [gapPeriodMonths, setGapPeriodMonths] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);

  // 2단계 상태
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const canProceedToStep2 =
    Boolean(category) &&
    isMajor !== null &&
    gapPeriodMonths !== null &&
    grade !== null;

  const canSubmit = title.trim().length > 0 && content.trim().length > 0;

  // 각 스텝별 렌더 함수
  const renderStep1 = () => (
    <>
      <BasicInfoForm
        selectedJob={category}
        selectedIsMajor={isMajor}
        selectedPeriod={
          gapPeriodMonths === 6
            ? '6개월 이하'
            : gapPeriodMonths === 12
              ? '1년 이하'
              : gapPeriodMonths === 36
                ? '3년 이하'
                : ''
        }
        grade={grade}
        onSelectJob={setCategory}
        onSelectIsMajor={setIsMajor}
        onSelectPeriod={(v) =>
          setGapPeriodMonths(
            v === '6개월 이하'
              ? 6
              : v === '1년 이하'
                ? 12
                : v === '3년 이하'
                  ? 36
                  : 0,
          )
        }
        onSelectGPA={(v) => {
          const num = parseFloat(v);
          if (!isNaN(num)) {
            setGrade(num);
          }
        }}
      />
      <SelectedSummary
        category={category}
        isMajor={isMajor}
        gapPeriodMonths={gapPeriodMonths}
        grade={grade}
      />

      <div className="flex justify-end">
        <button
          onClick={() => setCurrentStep(2)}
          disabled={!canProceedToStep2}
          className={`flex gap-2 justify-center items-center px-6 py-3 typo-text text-white rounded-lg ${
            canProceedToStep2
              ? 'bg-primary hover:bg-primary-active'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          다음 <ChevronRight size={24} />
        </button>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="flex justify-between items-stretch">
        <div className="flex gap-4">
          <div>
            <button
              onClick={() => setCurrentStep(1)}
              className="h-full flex gap-2 justify-center items-center px-6 py-3 typo-text text-primary rounded-lg border border-transparent bg-primary-primary-background hover:border-primary-active"
            >
              <div className="flex flex-col">
                <p>기본정보</p>
                <p>수정하기</p>
              </div>
            </button>
          </div>

          <SelectedSummary
            category={category}
            isMajor={isMajor}
            gapPeriodMonths={gapPeriodMonths}
            grade={grade}
          />
        </div>

        <div>
          <button
            onClick={() => navigate('/gap-review')}
            disabled={!canSubmit}
            className={`h-full flex gap-2 justify-center items-center px-6 py-3 typo-text text-white rounded-lg ${
              canSubmit
                ? 'bg-primary hover:bg-primary-active'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            공백기 후기 작성하기
          </button>
        </div>
      </div>

      <ReviewForm
        title={title}
        content={content}
        onTitleChange={setTitle}
        onContentChange={setContent}
      />
    </>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      default:
        return null;
    }
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <div className="flex gap-4 items-center mb-2">
          <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
            <BookOpen className="text-white" />
          </div>
          <h1 className="typo-heading text-title pt-1">공백기 후기</h1>
        </div>
      </div>
      <StepHeader currentStep={currentStep} onBack={handleBack} />
      {renderStep()}
    </section>
  );
}
