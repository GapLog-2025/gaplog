import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';
import Tag from '@/components/Tag';
import { resources } from '../data/resources';

interface RecommendedCoursesProps {
  selectedPath: 'frontend' | 'backend' | 'designer';
}

// YouTube 링크에서 영상 ID 추출
function extractYouTubeThumbnail(link: string): string | null {
  const match = link.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : null;
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
        {items.map((item, i) => {
          const thumbnail = extractYouTubeThumbnail(item.link);
          return (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                {thumbnail ? (
                  <img src={thumbnail} alt="영상 썸네일" className="h-32 w-full object-cover" />
                ) : (
                  <div className="h-32 bg-gray-100" />
                )}
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag type="skyblue" label={item.platform} />
                  </div>
                  <h3 className="typo-strong text-title mb-2 line-clamp-2">{item.title}</h3>
                  <p className="typo-text text-secondary text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}
