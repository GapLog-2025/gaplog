import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { ActionButton } from '@/components/Button';
import { timelineData } from '../data/roadmapItems';
import type { TimelineItem } from '../data/roadmapItems';

interface RoadmapSidebarProps {
  selectedPath: 'frontend' | 'backend' | 'designer';
  progressHook: any; // 진행 상태 훅을 props로 받음
}

export default function RoadmapSidebar({ selectedPath, progressHook }: RoadmapSidebarProps) {
  const roadmapItems = timelineData[selectedPath] || [];
  const { 
    overallProgress, 
    currentStep, 
    getStepStatus,
    getStepProgress 
  } = progressHook;

  return (
    <div className="space-y-6">
      {/* 로드맵 진행 상황 */}
      <Card>
        <CardHeader>
          <h3 className="typo-subheading text-title">로드맵 진행 상황</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-action mb-1">{overallProgress}%</div>
              <div className="typo-small text-secondary">전체 진행률</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-primary-action h-2 rounded-full transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              {roadmapItems.map((item) => {
                const status = getStepStatus(item.id);
                const stepProgress = getStepProgress(item.id);
                
                return (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="typo-small text-secondary">{item.title}</span>
                    <div className="flex items-center gap-2">
                      {stepProgress > 0 && stepProgress < 100 && (
                        <span className="typo-small text-info-text">{stepProgress}%</span>
                      )}
                      <span className={`typo-small ${
                        status === 'completed' ? 'text-success-text' : 
                        status === 'in-progress' ? 'text-info-text' : 
                        'text-border'
                      }`}>
                        {status === 'completed' ? '완료' : 
                         status === 'in-progress' ? '진행중' : '대기'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 이번 단계 학습 */}
      <Card>
        <CardHeader>
          <h3 className="typo-subheading text-title">이번 단계 학습</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentStep ? (
              <>
                <div className="p-3 bg-info-background rounded-lg">
                  <div className="typo-small text-info-text mb-1">진행중</div>
                  <div className="typo-strong text-title">{currentStep.title}</div>
                  <div className="typo-small text-secondary mt-1">{currentStep.description}</div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="typo-small text-secondary">진행률</span>
                      <span className="typo-small text-info-text">{getStepProgress(currentStep.id)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-info-text h-1 rounded-full transition-all duration-300"
                        style={{ width: `${getStepProgress(currentStep.id)}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="typo-strong text-title">다음 할 일</div>
                  <div className="space-y-1">
                    {currentStep.tasks && currentStep.tasks.length > 0 ? (
                      currentStep.tasks.slice(0, 3).map((task: TimelineItem['tasks'][0], index: number) => (
                        <div key={index} className="typo-small text-secondary">
                          • {task.name}
                        </div>
                      ))
                    ) : (
                      <div className="typo-small text-secondary">할 일이 없습니다</div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="p-3 bg-success-background rounded-lg">
                <div className="typo-small text-success-text mb-1">완료</div>
                <div className="typo-strong text-title">모든 단계 완료!</div>
                <div className="typo-small text-secondary mt-1">축하합니다! 로드맵을 모두 완료했습니다.</div>
              </div>
            )}
            
          </div>
        </CardContent>
      </Card>

      {/* 개별 직무 취업 통계 */}
      <Card>
        <CardHeader>
          <h3 className="typo-subheading text-title">개별 직무 취업 통계</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="typo-small text-secondary">평균 취업 소요 기간</span>
              <span className="typo-small text-title">
                {selectedPath === 'frontend' ? '6~12개월' : 
                 selectedPath === 'backend' ? '8~14개월' : '4~10개월'}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="typo-small text-secondary">평균 연봉</span>
              <span className="typo-small text-title">
                {selectedPath === 'frontend' ? '4,000~5,000만원' : 
                 selectedPath === 'backend' ? '4,500~6,000만원' : '3,500~4,500만원'}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="typo-small text-secondary">취업 성공률</span>
              <span className="typo-small text-success-text">
                {selectedPath === 'frontend' ? '75%' : 
                 selectedPath === 'backend' ? '80%' : '70%'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="typo-small text-secondary">주요 채용 시기</span>
              <span className="typo-small text-title">상반기, 9월</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 취업 성공 후기 */}
      <Card>
        <CardHeader>
          <h3 className="typo-subheading text-title">취업 성공 후기</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border border-point-yellow-background rounded-lg p-3">
              <div className="typo-small text-point-yellow-text mb-1">
                {selectedPath === 'frontend' ? '프론트엔드 개발자로 취업 성공!' : 
                 selectedPath === 'backend' ? '백엔드에서도 개발자에게 취업한 이야기' : 
                 'UX/UI 디자이너 취업 후기'}
              </div>
              <div className="typo-small text-secondary">공백기 • 부트캠프 경험기</div>
            </div>
            
            <div className="border border-border rounded-lg p-3">
              <div className="typo-small text-title mb-1">
                {selectedPath === 'frontend' ? 'React 개발자 취업 후기' : 
                 selectedPath === 'backend' ? '무료 부트캠프 취업 후기 장문 정리' : 
                 '포트폴리오로 디자이너 취업하기'}
              </div>
              <div className="typo-small text-secondary">
                {selectedPath === 'frontend' ? '신입 • 3개월 과정' : 
                 selectedPath === 'backend' ? '부족함 • 6개월 과정' : 
                 '경력전환 • 4개월 과정'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}