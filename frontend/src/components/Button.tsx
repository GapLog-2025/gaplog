import { Button } from '@mui/base/Button/Button';

type MoveButtonProps = {
  type?: 'primary' | 'default';
  children: React.ReactNode;
  onClick?: () => void;
};

function MoveButton({ type = 'default', children, onClick }: MoveButtonProps) {
  const baseClasses =
    'w-fit bg-white border-2 typo-strong rounded-lg px-4 py-2';
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
  onClick?: () => void;
};
function ActionButton({
  size = 'small',
  children,
  onClick,
}: ActionButtonProps) {
  const baseClasses =
    size === 'small' ? 'px-4 py-2' : 'min-w-[220px] px-4 py-2';
  return (
    <Button
      className={` ${baseClasses} w-fit bg-primary-action text-white typo-strong rounded-lg`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export { MoveButton, ActionButton };
