import Tag from '@/components/Tag';
import { Calendar } from 'lucide-react';

type CardColor = 'purple' | 'skyblue' | 'yellow' | 'green';

type ProfileCardProps = {
  type: CardColor;
  tags: string[];
  title: string;
  description: string;
  name: string;
  job: string;
  date: string;
  onClick?: () => void;
};

export default function ReviewCard({
  type,
  tags,
  title,
  description,
  name,
  job,
  date,
  onClick,
}: ProfileCardProps) {
  const colorMap = {
    purple: {
      background: 'bg-primary-primary-background',
      border: 'border border-primary',
      borderLeft: 'border-l-8 border-l-primary',
    },
    skyblue: {
      background: 'bg-point-blue-background',
      border: 'border border-skyblue',
      borderLeft: 'border-l-8 border-l-skyblue',
    },
    yellow: {
      background: 'bg-point-yellow-background',
      border: 'border border-yellow',
      borderLeft: 'border-l-8 border-l-yellow',
    },
    green: {
      background: 'bg-success-background',
      border: 'border border-green',
      borderLeft: 'border-l-8 border-l-green',
    },
  };
  const theme = colorMap[type];
  console.log(theme.border);
  return (
    <div
      className={`flex gap-10 rounded-md w-full h-[264px] rounded-xl border ${theme.borderLeft} px-12 py-8 `}
      onClick={onClick}
    >
      {/* img */}
      <div className={`${theme.background} w-[200px] h-[200px] rounded-xl`} />
      {/* review contents */}
      <div className="max-w-[500px] flex flex-col justify-between">
        {/* tags */}
        <div className="flex gap-4">
          {tags.map((content, index) => (
            <Tag
              key={index}
              type={type}
              label={content}
              className={`${theme.border}`}
            />
          ))}
        </div>
        {/* title & description */}
        <p className="max-w-[500px] typo-subheading font-bold text-title">
          {title}
        </p>
        <div className="typo-text text-secondary">{description}</div>
        {/* info */}
        <div className="w-full flex justify-between text-secondary typo-text">
          <p>
            <span className="typo-strong">{name}</span> | {job}
          </p>
          <div className="flex gap-2 justify-center">
            <Calendar size={'18px'} />
            <span className="font-bold">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
