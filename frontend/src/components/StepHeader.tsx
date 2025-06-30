import { StepProgressIndicator } from '../features/GapReview/ui/GapReviewWrite/StepProgressIndicator';
import { MoveButton } from '@/components/Button';
interface StepHeaderProps {
  currentStep: number;
  onBack?: () => void;
}

export default function StepHeader({ currentStep, onBack }: StepHeaderProps) {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-4xl mx-auto py-2 flex items-center justify-between">
        {onBack && <MoveButton onClick={onBack}>뒤로가기</MoveButton>}
        <StepProgressIndicator currentStep={currentStep} />
      </div>
    </div>
  );
}
