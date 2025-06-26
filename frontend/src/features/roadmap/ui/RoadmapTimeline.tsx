import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import Tag from '@/components/Tag';
import { timelineData } from '../data/roadmapItems';

interface RoadmapTimelineProps {
  selectedPath: 'frontend' | 'backend' | 'designer';
  progressHook: any; // 진행 상태 훅을 props로 받음
}

export default function RoadmapTimeline({ selectedPath, progressHook }: RoadmapTimelineProps) {
  const items = timelineData[selectedPath] || [];
  const { 
    toggleTaskCompletion, 
    isTaskCompleted, 
    getStepProgress, 
    getStepStatus 
  } = progressHook;

  return (
    <div className="space-y-8">
      {items.map((item, index) => {
        const stepProgress = getStepProgress(item.id);
        const stepStatus = getStepStatus(item.id);
        
        return (
          <div key={item.id} className="relative">
            {/* 연결선 */}
            {index < items.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
            )}
            
            <div className="flex gap-6">
              {/* 아이콘 */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center relative ${
                  stepStatus === 'completed' 
                    ? 'bg-success-background border-2 border-success-text' 
                    : stepStatus === 'in-progress'
                    ? 'bg-info-background border-2 border-info-text'
                    : 'bg-white border-2 border-border'
                }`}>
                  {stepStatus === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-success-text" />
                  ) : stepStatus === 'in-progress' ? (
                    <div className="relative">
                      <Circle className="w-6 h-6 text-info-text" />
                      <div 
                        className="absolute inset-0 rounded-full border-2 border-info-text"
                        style={{
                          background: `conic-gradient(from 0deg, rgb(59 130 246) ${stepProgress * 3.6}deg, transparent ${stepProgress * 3.6}deg)`
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center typo-small text-info-text font-bold">
                        {stepProgress}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-border typo-strong">{index + 1}</span>
                  )}
                </div>
              </div>

              {/* 콘텐츠 */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Tag type="purple" label={item.period} />
                  <h3 className="typo-subheading text-title">{item.title}</h3>
                  <div className="ml-auto">
                    <Tag 
                      type={stepStatus === 'completed' ? 'green' : stepStatus === 'in-progress' ? 'info' : 'default'} 
                      label={stepStatus === 'completed' ? '완료' : stepStatus === 'in-progress' ? '진행중' : '대기중'} 
                    />
                  </div>
                </div>
                
                <p className="typo-text text-secondary mb-4">{item.description}</p>

                {/* 인터랙티브 체크리스트 */}
                <div className="space-y-2 mb-4">
                  {item.tasks.map((task, taskIndex) => {
                    const completed = isTaskCompleted(item.id, taskIndex);
                    
                    return (
                      <div key={taskIndex} className="flex items-center gap-2">
                        <button
                          onClick={() => toggleTaskCompletion(item.id, taskIndex)}
                          className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded group transition-colors"
                        >
                          {completed ? (
                            <CheckCircle className="w-4 h-4 text-success-text group-hover:scale-110 transition-transform" />
                          ) : (
                            <Circle className="w-4 h-4 text-border group-hover:text-info-text transition-colors" />
                          )}
                          <span className={`typo-small ${completed ? 'text-title line-through' : 'text-secondary'} group-hover:text-title transition-colors`}>
                            {task.name}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* 진행률 바 */}
                {stepProgress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="typo-small text-secondary">단계 진행률</span>
                      <span className="typo-small text-primary-action">{stepProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-action h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stepProgress}%` }}
                      />
                    </div>
                  </div>
                )}

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
        );
      })}
    </div>
  );
}