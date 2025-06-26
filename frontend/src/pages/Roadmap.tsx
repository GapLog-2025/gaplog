import React, { useState } from 'react';
import Layout from '@/components/Layout';
import RoadmapHeader from '@/features/roadmap/ui/RoadmapHeader';
import RoadmapTimeline from '@/features/roadmap/ui/RoadmapTimeline';
import CertificationSection from '@/features/roadmap/ui/CertificationSection';
import RecommendedCourses from '@/features/roadmap/ui/RecommendedCourses';
import ChecklistSection from '@/features/roadmap/ui/ChecklistSection';
import RoadmapSidebar from '@/features/roadmap/ui/RoadmapSidebar';
import { Card } from '@/components/Card';

export default function RoadmapPage() {
  const [selectedPath, setSelectedPath] = useState<'frontend' | 'backend' | 'designer'>('frontend');

  const asideContent = <RoadmapSidebar selectedPath={selectedPath} />;

  return (
    <Layout aside={asideContent}>
      <div>
        {/* 헤더 - 직무 선택 드롭다운 포함 */}
        <RoadmapHeader 
          selectedPath={selectedPath} 
          setSelectedPath={setSelectedPath} 
        />
        
        {/* 메인 로드맵 타임라인 */}
        <Card className="p-8 mb-8">
          <RoadmapTimeline selectedPath={selectedPath} />
        </Card>

        {/* 추천 자격증 섹션 */}
        <CertificationSection selectedPath={selectedPath} />
        
        {/* 추천 교육 과정 섹션 */}
        <RecommendedCourses selectedPath={selectedPath} />
        
        {/* 취업 준비 체크리스트 */}
        <ChecklistSection />
      </div>
    </Layout>
  );
}