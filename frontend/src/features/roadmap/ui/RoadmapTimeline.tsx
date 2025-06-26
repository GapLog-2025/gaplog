import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import Tag from '@/components/Tag';
import { timelineData } from '../data/roadmapItems';

interface RoadmapTimelineProps {
  selectedPath: string;
}

export default function RoadmapTimeline({ selectedPath }: RoadmapTimelineProps) {
  const items = timelineData[selectedPath] || [];

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {/* 연결선 */}
          {index < items.length - 1 && (
            <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
          )}
          
          <div className="flex gap-6">
            {/* 아이콘 */}
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                item.completed ? 'bg-primary-action' : 'bg-white border-2 border-primary-action'
              }`}>
                {item.completed ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-primary-action typo-strong">{index + 1}</span>
                )}
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Tag type="purple" label={item.period} />
                <h3 className="typo-subheading text-title">{item.title}</h3>
              </div>
              
              <p className="typo-text text-secondary mb-4">{item.description}</p>

              {/* 체크리스트 */}
              <div className="space-y-2 mb-4">
                {item.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center gap-2">
                    {task.completed ? (
                      <CheckCircle className="w-4 h-4 text-success-text" />
                    ) : (
                      <Circle className="w-4 h-4 text-border" />
                    )}
                    <span className={`typo-small ${task.completed ? 'text-title' : 'text-secondary'}`}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* 추천 자료 */}
              <div>
                <span className="typo-small text-secondary mb-2 block">추천 자료</span>
                <div className="flex gap-2">
                  {item.resources.map((resource, resourceIndex) => (
                    <Tag key={resourceIndex} type="default" label={resource} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}