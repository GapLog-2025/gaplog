import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/Card';

interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
}

const initialChecklistItems: ChecklistItem[] = [
  { id: '1', task: '이력서 및 자기소개서 작성', completed: false },
  { id: '2', task: '포트폴리오 준비', completed: false },
  { id: '3', task: '직무 관련 자격증 취득', completed: false },
  { id: '4', task: '모의 면접 연습', completed: false },
  { id: '5', task: '기업 분석 및 지원', completed: false }
];

export default function ChecklistSection() {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(initialChecklistItems);

  const toggleChecklistItem = (id: string) => {
    setChecklistItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklistItems.filter(item => item.completed).length;
  const totalCount = checklistItems.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="typo-subheading text-title">취업 준비 체크리스트</h3>
          <div className="flex items-center gap-2">
            <span className="typo-small text-secondary">{completedCount}/{totalCount}</span>
            <span className="typo-small text-primary-action">{progressPercentage}%</span>
          </div>
        </div>
        {progressPercentage > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-primary-action h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {checklistItems.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleChecklistItem(item.id)}
              className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              {item.completed ? (
                <CheckCircle className="w-5 h-5 text-success-text group-hover:scale-110 transition-transform" />
              ) : (
                <Circle className="w-5 h-5 text-border group-hover:text-primary-action transition-colors" />
              )}
              <span className={`typo-text flex-1 group-hover:text-title transition-colors ${
                item.completed ? 'text-title line-through' : 'text-secondary'
              }`}>
                {item.task}
              </span>
            </button>
          ))}
        </div>
        
        {completedCount === totalCount && (
          <div className="mt-6 p-4 bg-success-background rounded-lg border border-success-text">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success-text" />
              <span className="typo-strong text-success-text">
                축하합니다! 취업 준비가 모두 완료되었습니다! 🎉
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}