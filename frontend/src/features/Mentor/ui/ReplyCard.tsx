import { type Reply } from '@/types/mentor';
import { Avatar } from '@mui/material';
import Tag from '@/components/Tag';
import formatDate from '@/utils/formatDate';
interface ReplyCardProps {
  reply: Reply;
}
export default function ReplyCard({ reply }: ReplyCardProps) {
  const { userName, content, createdAt } = reply;

  return (
    <div className="flex w-full text-start gap-4 rounded-xl border border-l-4 border-l-primary px-12 py-10 ">
      <Avatar />
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <p className="typo-strong text-secondary">{userName}</p>
          <Tag type="info" label="멘토" />
        </div>
        <p className="typo-small text-main">{formatDate(createdAt)}</p>
        <p className="typo-text text-secondary pt-4 whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}
