import React, { useState } from 'react';
import { FileText, Download, ChevronDown } from 'lucide-react';

interface RoadmapHeaderProps {
  selectedPath: string;
  setSelectedPath: (path: string) => void;
}

export default function RoadmapHeader({ selectedPath, setSelectedPath }: RoadmapHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const pathOptions = [
    { value: 'frontend', label: '프론트엔드 개발자' },
    { value: 'backend', label: '백엔드 개발자' },
    { value: 'designer', label: 'UX/UI 디자이너' }
  ];

  const selectedOption = pathOptions.find(option => option.value === selectedPath);

  return (
    <div className="mb-8">
      {/* 상단 타이틀과 버튼들 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="typo-heading text-title mb-2">맞춤형 취업 로드맵</h1>
          <p className="typo-text text-secondary">체계적인 학습 계획으로 목표 직무에 한 걸음 더 가까이</p>
        </div>
      </div>

      {/* 직무 선택 드롭다운 */}
      <div>
        <label className="block typo-strong text-main mb-2">커리어 경로 선택</label>
        <p className="typo-small text-secondary mb-4">관심 있는 직무를 선택하면 맞춤형 로드맵을 제공해 드립니다.</p>
        
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full max-w-md p-3 border border-border rounded-lg bg-white flex justify-between items-center typo-text text-main hover:border-primary-action focus:border-primary-action focus:outline-none"
          >
            <span>{selectedOption?.label || '직무를 선택하세요'}</span>
            <ChevronDown 
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              size={20} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 max-w-md mt-1 bg-white border border-border rounded-lg shadow-lg z-10">
              {pathOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedPath(option.value);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full p-3 text-left hover:bg-gray-50 typo-text first:rounded-t-lg last:rounded-b-lg ${
                    option.value === selectedPath 
                      ? 'text-primary-action bg-primary-background' 
                      : 'text-main'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}