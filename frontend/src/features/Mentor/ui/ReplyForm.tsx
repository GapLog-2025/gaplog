import { Card, CardHeader, CardContent } from '@/components/Card';
import { useLayoutEffect, useRef } from 'react';

interface ReplyFormProps {
  content: string;
  onContentChange: (v: string) => void;
}

export default function ReplyForm({
  content,
  onContentChange,
}: ReplyFormProps) {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <Card className="w-full h-full rounded-xl">
      <CardHeader>
        <h3 className="typo-subheading text-secondary">답변 작성하기</h3>
      </CardHeader>
      <CardContent>
        <textarea
          ref={contentRef}
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder={`질문자에게 도움이 되는 답변을 작성해주세요.\n\n1. 구체적인 경험과 사례를 포함해주세요.\n2. 실용적인 조언을 제공해주세요\n3. 예의 바른 언어를 사용해주세요.`}
          rows={8}
          className="w-full resize-none p-4 border overflow-hidden border-border rounded focus:outline-none focus:border-primary leading-normal typo-text text-black whitespace-pre-wrap"
        />
      </CardContent>
    </Card>
  );
}
