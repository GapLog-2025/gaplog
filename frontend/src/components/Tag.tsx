export type TagType =
  | 'default'
  | 'info'
  | 'inactive'
  | 'skyblue'
  | 'yellow'
  | 'primary'
  | 'green'
  | 'pink';

type TagProps = {
  type: TagType;
  label: string;
  className?: string;
};

const tagColorMap: Record<TagType, { bg: string; text: string }> = {
  default: { bg: 'bg-white border-border', text: 'text-secondeary' },
  info: { bg: 'bg-info-background', text: 'text-info-text' },
  inactive: { bg: 'bg-white', text: 'text-main' },
  skyblue: { bg: 'bg-point-blue-background', text: 'text-point-blue-text' },
  yellow: { bg: 'bg-point-yellow-background', text: 'text-point-yellow-text' },
  primary: { bg: 'bg-primary-primary-background', text: 'text-primary' },
  green: { bg: 'bg-success-background', text: 'text-success-text' },
  pink: { bg: 'bg-danger-background', text: 'text-danger-text' },
};
export default function Tag({ type, label, className = '' }: TagProps) {
  const theme = tagColorMap[type];
  return (
    <div
      className={`${theme.bg} ${theme.text} font-bold text-xs py-1 px-4 rounded-full ${className}`}
    >
      {label}
    </div>
  );
}
