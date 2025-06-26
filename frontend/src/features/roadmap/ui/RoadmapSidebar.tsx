import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { ActionButton } from '@/components/Button';

interface RoadmapSidebarProps {
  selectedPath: string;
}

export default function RoadmapSidebar({ selectedPath }: RoadmapSidebarProps) {
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
              <div className="text-2xl font-bold text-primary-action mb-1">35%</div>
              <div className="typo-small text-secondary">전체 진행률</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="typo-small text-secondary">기초 역량 쌓기</span>
                <span className="typo-small text-success-text">완료</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="typo-small text-secondary">직무 역량 강화</span>
                <span className="typo-small text-info-text">진행중</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="typo-small text-secondary">포트폴리오 준비</span>
                <span className="typo-small text-border">대기</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="typo-small text-secondary">취업 지원서 준비</span>
                <span className="typo-small text-border">대기</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="typo-small text-secondary">면접 준비</span>
                <span className="typo-small text-border">대기</span>
              </div>
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
            <div className="p-3 bg-info-background rounded-lg">
              <div className="typo-small text-info-text mb-1">진행중</div>
              <div className="typo-strong text-title">직무 역량 강화</div>
              <div className="typo-small text-secondary mt-1">프론트엔드 개발 기본기 향상</div>
            </div>
            
            <div className="space-y-2">
              <div className="typo-strong text-title">학습 목표</div>
              <div className="typo-small text-secondary">
                • JavaScript 심화 학습<br/>
                • React 프레임워크 이해<br/>
                • 작은 프로젝트 완성하기
              </div>
            </div>
            
            <ActionButton size="small" onClick={() => {}}>
              학습 계속하기
            </ActionButton>
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
              <span className="typo-small text-title">6~12개월</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="typo-small text-secondary">평균 연봉</span>
              <span className="typo-small text-title">4,000~5,000만원</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="typo-small text-secondary">취업 성공률</span>
              <span className="typo-small text-success-text">75%</span>
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
              <div className="typo-small text-point-yellow-text mb-1">백엔드에서도 개발자에게 취업한 이야기</div>
              <div className="typo-small text-secondary">공백기 • 부트캠프 경험기</div>
            </div>
            
            <div className="border border-border rounded-lg p-3">
              <div className="typo-small text-title mb-1">무료 부트캠프 취업 후기 장문 정리</div>
              <div className="typo-small text-secondary">부족함 • 6개월 과정</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}