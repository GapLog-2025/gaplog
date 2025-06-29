import { Button } from '@mui/base/Button/Button';
import { ChevronRight } from 'lucide-react';

type MoveButtonProps = {
  type?: 'primary' | 'default';
  children: React.ReactNode;
  onClick?: () => void;
};

function MoveButton({ type = 'default', children, onClick }: MoveButtonProps) {
  const baseClasses =
    'w-fit bg-white border-2 typo-strong rounded-lg px-5 py-2 hover:shadow-md transition-shadow';
  const primaryClasses =
    'border border-primary-primary-background text-primary';
  const defaultClasses = 'border border-border text-main';

  const className = `${baseClasses} ${type === 'primary' ? primaryClasses : defaultClasses}`;

  return (
    <Button className={className} onClick={onClick}>
      <span>{children}</span>
    </Button>
  );
}

type ActionButtonProps = {
  size?: 'small' | 'large';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function ActionButton({
  size = 'small',
  children,
  className = '',
  onClick,
}: ActionButtonProps) {
  const baseClasses = size === 'small' ? 'px-5 py-2' : 'px-10 py-4';
  return (
    <Button
      className={` ${baseClasses} w-fit bg-primary-action text-white typo-strong rounded-lg ${className} hover:shadow-md transition-shadow`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

type MoreButtonProps = {
  onClick?: () => void;
};

function MoreButton({ onClick }: MoreButtonProps) {
  return (
    <Button
      className="text-primary-active flex gap-1 justify-center items-center  hover:text-opacity-80 transition-all duration-200"
      onClick={onClick}
    >
      <p className="typo-strong">더보기</p>
      <ChevronRight
        size={24}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Button>
  );
}

type TagButtonProps = {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

function TagButton({ isActive, children, onClick }: TagButtonProps) {
  const colorStyle = !isActive
    ? 'bg-white border-border text-secondary'
    : 'bg-info-background border-transparent text-info-text';
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center px-4 py-1 rounded-full border ${colorStyle} hover:shadow hover:shadow-gray-200`}
    >
      {children}
    </button>
  );
}
type BookmarkedButtonnProps = {
  isBookmarked: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function BookmarkedButton({
  isBookmarked,
  children,
  onClick,
}: BookmarkedButtonnProps) {
  const colorStyle = !isBookmarked
    ? 'bg-white border-border text-secondary'
    : 'bg-yellow border-transparent text-white';

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center px-4 py-2 rounded-full border ${colorStyle} hover:shadow hover:shadow-gray-200`}
    >
      {children}
    </button>
  );
}
type LikedButtonProps = {
  isLiked: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function LikedButton({ isLiked, children, onClick }: LikedButtonProps) {
  const colorStyle = !isLiked
    ? 'bg-white border-border text-secondary'
    : 'bg-pink border-transparent text-white';

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center px-4 py-2 rounded-full border ${colorStyle} hover:shadow hover:shadow-gray-200`}
    >
      {children}
    </button>
  );
}

export {
  MoveButton,
  ActionButton,
  MoreButton,
  TagButton,
  BookmarkedButton,
  LikedButton,
};
