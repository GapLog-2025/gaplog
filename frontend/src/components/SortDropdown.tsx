import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  options,
  value,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      !buttonRef.current?.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-[105px] h-[40px] px-4 flex items-center justify-between border rounded bg-white text-sm typo-text leading-none
    ${open ? 'border-primary-active shadow text-primary' : 'border-border text-secondary'}
    hover:border-primary-active hover:shadow`}
      >
        <span>{value}</span>
        <ChevronDown
          size={21}
          className={`${
            open ? 'text-primary' : 'text-disabled'
          } transition-transform duration-200`}
        />
      </button>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute mt-1 w-[100px] bg-white border border-gray-200 rounded shadow z-10 "
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-center  hover:bg-gray-100 border-b ${
                value === option
                  ? 'typo-strong text-secondary'
                  : 'typo-text text-secondary'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
