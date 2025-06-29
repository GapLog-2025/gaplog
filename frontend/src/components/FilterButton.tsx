import { useEffect, useState } from 'react';
import { ListFilter } from 'lucide-react';

interface FilterButtonProps {
  onChange: (open: boolean) => void;
}

export default function FilterButton({ onChange }: FilterButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onChange(open);
  }, [open, onChange]);

  const toggleFilter = () => {
    setOpen((prev) => !prev);
  };

  return (
    <button
      onClick={toggleFilter}
      className={`w-[90px] h-[40px] px-4 flex items-center justify-between border rounded bg-white text-sm typo-text leading-none
        ${open ? 'border-primary-active shadow text-primary' : 'border-border text-secondary'}
        hover:border-primary-active hover:shadow`}
    >
      <span>필터</span>
      <ListFilter
        size={16}
        className={`${
          open ? 'text-primary' : 'text-disabled'
        } transition-transform duration-200`}
      />
    </button>
  );
}
