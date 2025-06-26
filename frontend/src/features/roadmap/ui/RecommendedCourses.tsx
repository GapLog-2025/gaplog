import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';
import Tag from '@/components/Tag';
import { resources } from '../data/resources'; // 기존 파일과 동일

interface RecommendedCoursesProps {
  selectedPath: 'frontend' | 'backend' | 'designer';
}

export default function RecommendedCourses({ selectedPath }: RecommendedCoursesProps) {
  const items = resources[selectedPath] ?? [];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-action" />
          <h2 className="typo-subheading text-title">추천 교육 과정</h2>
        </div>
        <button className="text-primary-action typo-small hover:underline">더보기</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gray-100"></div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag type="skyblue" label={item.platform} />
              </div>
              <h3 className="typo-strong text-title mb-2 line-clamp-2">{item.title}</h3>
              <p className="typo-text text-secondary text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}