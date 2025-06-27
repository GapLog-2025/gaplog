import { useState, useMemo } from 'react';
import { timelineData } from '../data/roadmapItems';

export interface TaskProgress {
  timelineId: string;
  taskIndex: number;
  completed: boolean;
}

export function useRoadmapProgress(selectedPath: 'frontend' | 'backend' | 'designer') {
  const [taskProgress, setTaskProgress] = useState<TaskProgress[]>([]);

  // 현재 선택된 경로의 로드맵 데이터
  const roadmapItems = timelineData[selectedPath] || [];


  // 작업 완료 상태 토글
  const toggleTaskCompletion = (timelineId: string, taskIndex: number) => {
    
    setTaskProgress(prev => {
      const existingProgress = prev.find(
        p => p.timelineId === timelineId && p.taskIndex === taskIndex
      );

      let newProgress;
      if (existingProgress) {
        // 기존 진행 상태 토글
        newProgress = prev.map(p =>
          p.timelineId === timelineId && p.taskIndex === taskIndex
            ? { ...p, completed: !p.completed }
            : p
        );
      } else {
        // 새로운 진행 상태 추가
        newProgress = [...prev, { timelineId, taskIndex, completed: true }];
      }
      
      return newProgress;
    });
  };

  // 특정 작업의 완료 상태 확인
  const isTaskCompleted = (timelineId: string, taskIndex: number): boolean => {
    const progress = taskProgress.find(
      p => p.timelineId === timelineId && p.taskIndex === taskIndex
    );
    return progress?.completed || false;
  };

  // 단계별 진행률 계산
  const getStepProgress = (timelineId: string): number => {
    const timeline = roadmapItems.find(item => item.id === timelineId);
    if (!timeline || timeline.tasks.length === 0) return 0;

    const completedTasks = timeline.tasks.filter((_, index) =>
      isTaskCompleted(timelineId, index)
    ).length;

    const progress = Math.round((completedTasks / timeline.tasks.length) * 100);
    
    return progress;
  };

  // 전체 진행률 계산
  const overallProgress = useMemo(() => {

    if (roadmapItems.length === 0) {
      console.log('No roadmap items found');
      return 0;
    }

    const totalSteps = roadmapItems.length;
    let completedSteps = 0;

    roadmapItems.forEach(item => {
      const stepProgress = getStepProgress(item.id);
      
      if (stepProgress === 100) {
        completedSteps += 1;
      } else if (stepProgress > 0) {
        completedSteps += stepProgress / 100;
      }
    });

    const calculated = Math.round((completedSteps / totalSteps) * 100);
    
    return calculated;
  }, [taskProgress, selectedPath, roadmapItems]);

  // 현재 진행 중인 단계 찾기
  const currentStep = useMemo(() => {
    
    // 진행 중인 단계 찾기 (0% < 진행률 < 100%)
    const inProgressStep = roadmapItems.find(item => {
      const progress = getStepProgress(item.id);
      return progress > 0 && progress < 100;
    });
    
    if (inProgressStep) {
      return inProgressStep;
    }
    
    // 진행 중인 단계가 없으면 첫 번째 미완료 단계 찾기
    const nextStep = roadmapItems.find(item => getStepProgress(item.id) === 0);
    return nextStep;
  }, [roadmapItems, taskProgress, selectedPath]);

  // 단계별 상태 계산
  const getStepStatus = (timelineId: string): 'completed' | 'in-progress' | 'pending' => {
    const progress = getStepProgress(timelineId);
    if (progress === 100) return 'completed';
    if (progress > 0) return 'in-progress';
    return 'pending';
  };

  return {
    taskProgress,
    toggleTaskCompletion,
    isTaskCompleted,
    getStepProgress,
    overallProgress,
    currentStep,
    getStepStatus,
  };
}