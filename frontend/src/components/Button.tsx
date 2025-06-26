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

export { MoveButton, ActionButton, MoreButton };
