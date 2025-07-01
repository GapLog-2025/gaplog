// components/SelectedSummary.tsx
import { Card, CardContent } from '@/components/Card';
import { CheckCircle } from 'lucide-react';

interface SelectedSummaryProps {
  category: string;
  isMajor: boolean | null;
  gapPeriodMonths: number | null;
  grade: number | null;
}

export default function SelectedSummary({
  category,
  isMajor,
  gapPeriodMonths,
  grade,
}: SelectedSummaryProps) {
  return (
    <Card className="border-primary-active p-3">
      <CardContent>
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="flex gap-2 justify-center items-center text-primary">
            <CheckCircle />
            <h3 className="typo-strong leading-none">선택된 기본 정보</h3>
          </div>
          <div className="select-none">
            {category === '' &&
              isMajor === null &&
              gapPeriodMonths === null &&
              grade === null && (
                <div className="typo-text text-disabled">
                  선택된 정보가 없습니다.
                </div>
              )}
            <div className="flex flex-wrap gap-2 typo-text text-white">
              {category && (
                <div className="bg-primary px-6 py-1 rounded-full">
                  {category}
                </div>
              )}
              {isMajor !== null && (
                <div className="bg-blue-500 px-6 py-1 rounded-full">
                  {isMajor ? '전공자' : '비전공자'}
                </div>
              )}
              {gapPeriodMonths !== null && (
                <div className="bg-green px-6 py-1 rounded-full text-white">
                  {gapPeriodMonths === 6 && '공백기 6개월 이하'}
                  {gapPeriodMonths === 12 && '공백기 1년 이하'}
                  {gapPeriodMonths === 36 && '공백기 3년 이하'}
                </div>
              )}

              {grade !== null && (
                <div className="bg-yellow px-6 py-1 rounded-full">
                  학점 {grade} 이상
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
