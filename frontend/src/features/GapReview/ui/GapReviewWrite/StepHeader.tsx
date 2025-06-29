import { StepProgressIndicator } from './StepProgressIndicator';
import { ChevronLeft } from 'lucide-react';
interface StepHeaderProps {
  currentStep: number;
  onBack?: () => void;
}

export default function StepHeader({ currentStep, onBack }: StepHeaderProps) {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
        {onBack && (
          <button
            className="flex gap-2 justify-center items-center typo-text text-primary p-2 hover:bg-gray-100 hover:rounded"
            onClick={onBack}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로가기
          </button>
        )}
        <StepProgressIndicator currentStep={currentStep} />
      </div>
    </div>
  );
}
