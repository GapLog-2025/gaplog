import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import StepHeader from './ui/GapReviewWrite/StepHeader';
import useHandleBack from './hook/handleBack';
import BasicInfoForm from './ui/GapReviewWrite/BasicInputForm';
import SelectedSummary from './ui/GapReviewWrite/SelectedSummary';
import ReviewForm from './ui/GapReviewWrite/ReviewForm';
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
        grade={grade} // ✅ 추가
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

          {/* SelectedSummary 카드 자체가 높이를 가지고 있으므로 */}
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
    <section className="w-full flex flex-col gap-10">
      <StepHeader currentStep={currentStep} onBack={handleBack} />
      {renderStep()}
    </section>
  );
}
