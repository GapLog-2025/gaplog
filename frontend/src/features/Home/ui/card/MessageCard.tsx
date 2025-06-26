import { Quote } from 'lucide-react';

type MessageCardProps = {
  text: string;
  color?: 'purple' | 'blue';
};

export default function MessageCard({
  text,
  color = 'purple',
}: MessageCardProps) {
  const bgColor =
    color === 'purple' ? 'bg-gd-point-purple' : 'bg-gd-point-blue';
  return (
    <div
      className={`${bgColor} rounded-xl w-[46%] h-[200px] flex flex-col gap-2 items-start px-10 py-8`}
    >
      <Quote className="text-primary mb-4" size={32} />
      <p className="typo-heading text-secondary">{text}</p>
    </div>
  );
}
