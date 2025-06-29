import { Briefcase, GraduationCap, Clock, Award } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/Card';

interface BasicInfoFormProps {
  selectedJob: string;
  selectedIsMajor: boolean | null;
  selectedPeriod: string;
  grade: number | null; // ✅ 추가
  onSelectJob: (v: string) => void;
  onSelectIsMajor: (v: boolean) => void;
  onSelectPeriod: (v: string) => void;
  onSelectGPA: (v: string) => void;
}

export default function BasicInfoForm({
  selectedJob,
  selectedIsMajor,
  selectedPeriod,
  grade,
  onSelectJob,
  onSelectIsMajor,
  onSelectPeriod,
  onSelectGPA,
}: BasicInfoFormProps) {
  const jobCategories = [
    'IT/개발',
    '디자인',
    '마케팅/광고',
    '경영/사무',
    '무역/유통',
    '영업',
    '생산/제조',
    '건설',
    '금융',
  ];
  const backgrounds = ['전공자', '비전공자'];
  const periods = ['6개월 이하', '1년 이하', '3년 이하'];
  const gpaRanges = ['2.0이하', '2.5이상', '3.0이상', '3.5이상', '4.0이상'];

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* 직무 분야 */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <Briefcase size={24} className="text-primary" /> 직무 분야
          </h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3  typo-text">
            {jobCategories.map((job) => (
              <div
                key={job}
                className={`cursor-pointer px-4 py-3 text-center transition-all rounded-lg ${
                  selectedJob === job
                    ? 'bg-primary text-white border-primary hover:bg-primary-active'
                    : 'hover:bg-primary-primary-background hover:border-primary-primary-background hover:text-primary'
                }`}
                onClick={() => onSelectJob(job)}
              >
                {job}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 전공 여부 & 공백기간 row container */}
      <div className="flex gap-6">
        {/* 전공 여부 */}
        <Card className="w-[40%]">
          <CardHeader>
            <h1 className="flex items-center gap-2 typo-subheading text-title">
              <GraduationCap size={24} className="text-info-text" /> 전공 여부
            </h1>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 justify-center typo-text">
              {backgrounds.map((label) => {
                const val = label === '전공자';
                return (
                  <div
                    key={label}
                    className={`cursor-pointer px-6 py-4 rounded-lg text-center transition-all ${
                      selectedIsMajor === val
                        ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600'
                        : 'hover:bg-info-background hover:border-info-background hover:text-info-text'
                    }`}
                    onClick={() => onSelectIsMajor(val)}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 공백기간 */}
        <Card className="w-[60%]">
          <CardHeader>
            <h1 className="flex items-center gap-2 typo-subheading text-title">
              <Clock size={24} className="text-green" /> 공백기간
            </h1>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 justify-center typo-text">
              {periods.map((p) => (
                <div
                  key={p}
                  className={`cursor-pointer px-6 py-4 rounded-lg text-center transition-all ${
                    selectedPeriod === p
                      ? 'bg-green text-white border-green hover:bg-[#43a047]'
                      : 'hover:bg-success-background hover:border-success-background hover:text-success-text'
                  }`}
                  onClick={() => onSelectPeriod(p)}
                >
                  {p}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 학점 */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <Award size={24} className="text-yellow" /> 학점
          </h1>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 justify-center typo-text">
            {gpaRanges.map((gpaLabel) => {
              const numericValue = parseFloat(gpaLabel); // '3.5이상' → 3.5
              const isSelected = grade === numericValue;
              return (
                <div
                  key={gpaLabel}
                  className={`cursor-pointer px-4 py-4 rounded-lg text-center transition-all ${
                    isSelected
                      ? 'bg-yellow text-white border-yellow hover:bg-[#fdd835]'
                      : 'hover:bg-point-yellow-background hover:border-gray-200 hover:text-point-yellow-text'
                  }`}
                  onClick={() => onSelectGPA(gpaLabel)}
                >
                  {gpaLabel}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
