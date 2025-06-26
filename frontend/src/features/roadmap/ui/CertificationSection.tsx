import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';
import Tag from '@/components/Tag';
import { certifications } from '../data/certifications'; 

interface CertificationSectionProps {
  selectedPath: 'frontend' | 'backend' | 'designer';
}

export default function CertificationSection({ selectedPath }: CertificationSectionProps) {
  const items = certifications[selectedPath] ?? [];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary-action" />
          <h2 className="typo-subheading text-title">개발 직무 추천 자격증</h2>
        </div>
        <button className="text-primary-action typo-small hover:underline">더보기</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-background rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-action" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="typo-strong text-title">{item.name}</h3>
                    <Tag type="info" label="추천" />
                  </div>
                  <p className="typo-text text-secondary mb-4">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}