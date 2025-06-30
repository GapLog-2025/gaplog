import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { Type, FileText } from 'lucide-react';

interface MentorFormProps {
  title: string;
  content: string;
  onTitleChange: (v: string) => void;
  onContentChange: (v: string) => void;
}

export default function MentorForm({
  title,
  content,
  onTitleChange,
  onContentChange,
}: MentorFormProps) {
  const mentorPlaceholder = `궁금한 점을 자세히 설명해주세요.

📝 다음 내용을 포함하면 좋습니다:
• 현재 상황과 배경
• 공백기 동안 한 일들 (자격증, 프로젝트, 스터디 등)
• 취업 준비 과정과 방법
• 구체적으로 궁금한 점
• 목표나 계획

💡 여러 개의 질문보다는 하나의 주제에 집중해보세요!
`;

  // 입력에 따른 높이 조절을 위한 ref 객체 초기화
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // 입력에 따른 높이 조절
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="space-y-8">
      {/* 제목 입력 (textarea로 변경하여 자동 높이 조절) */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <Type size={24} className="text-primary" /> 제목
          </h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <textarea
            ref={titleRef}
            placeholder="질문 제목을 입력해주세요"
            value={title}
            rows={1}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full overflow-hidden resize-none px-4 py-4 border border-border rounded focus:outline-none focus:border-primary leading-nomal typo-heading text-title"
          />
        </CardContent>
      </Card>

      {/* 내용 입력 */}
      <Card>
        <CardHeader>
          <h1 className="flex items-center gap-2 typo-subheading text-title">
            <FileText size={24} className="text-primary" /> 질문 내용
          </h1>
        </CardHeader>
        <CardContent>
          <textarea
            ref={contentRef}
            placeholder={mentorPlaceholder}
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            rows={4}
            className="w-full overflow-hidden resize-none p-4 border border-border rounded focus:outline-none focus:border-primary leading-nomal typo-text text-black whitespace-pre-wrap"
          />
        </CardContent>
      </Card>
    </div>
  );
}
