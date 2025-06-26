import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/Card';

const checklistItems = [
  { task: '이력서 및 자기소개서 작성', completed: true },
  { task: '포트폴리오 준비', completed: false },
  { task: '직무 관련 자격증 취득', completed: false },
  { task: '모의 면접 연습', completed: false },
  { task: '기업 분석', completed: false }
];

export default function ChecklistSection() {
  return (
    <Card>
      <CardHeader>
        <h3 className="typo-subheading text-title">취업 준비 체크리스트</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.completed ? (
                <CheckCircle className="w-5 h-5 text-success-text" />
              ) : (
                <Circle className="w-5 h-5 text-border" />
              )}
              <span className={`typo-text ${item.completed ? 'text-title' : 'text-secondary'}`}>
                {item.task}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}