import { Check } from 'lucide-react';
interface StepProgressIndicatorProps {
  currentStep: number;
}

export function StepProgressIndicator({
  currentStep,
}: StepProgressIndicatorProps) {
  console.log(currentStep);
  return (
    <div className="flex items-center gap-2 typo-small text-white">
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep == 1
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-secondary'
        }`}
      >
        {currentStep === 1 ? 1 : <Check size={18} />}
      </span>
      <div
        className={`w-8 h-0.5 ${currentStep >= 2 ? 'bg-primary-primary-background' : 'bg-gray-200'}`}
      />
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep >= 2
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-secondary'
        }`}
      >
        2
      </span>
    </div>
  );
}
