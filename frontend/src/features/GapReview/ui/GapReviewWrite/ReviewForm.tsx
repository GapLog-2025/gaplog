// components/ReviewForm.tsx
import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { Type, FileText } from 'lucide-react';

interface ReviewFormProps {
  title: string;
  content: string;
  onTitleChange: (v: string) => void;
  onContentChange: (v: string) => void;
}

export default function ReviewForm({
  title,
  content,
  onTitleChange,
  onContentChange,
}: ReviewFormProps) {
  const reviewPlaceholder = `공백기 경험을 자세히 공유해주세요.

📝 다음 내용을 포함하면 좋습니다:
• 공백기 기간과 이유
• 공백기 동안 한 일들 (자격증, 프로젝트, 스터디 등)
• 취업 준비 과정과 방법
• 면접 경험과 팁
• 어려웠던 점과 극복 방법
• 취업 성공 요인
• 취업 준비에 해주고 싶은 조언

💡 구체적인 숫자와 기간을 포함해주세요!
💡 실패 경험도 솔직하게 공유해주세요!
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
            placeholder="후기 제목을 입력해주세요"
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
            <FileText size={24} className="text-primary" /> 후기 내용
          </h1>
        </CardHeader>
        <CardContent>
          <textarea
            ref={contentRef}
            placeholder={reviewPlaceholder}
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
