import { Search, X } from 'lucide-react';

import { useState, useCallback } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (keyword: string) => void;
}

export default function SearchInput({
  placeholder,
  onSearch,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState('');

  const [placeholderTetxt, setPlaceholderText] = useState(placeholder);

  // 엔터 누를 때만 onSearch 실행
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch(inputValue.trim());
      }
    },
    [inputValue, onSearch],
  );

  return (
    <div className="relative flex items-center w-[480px] h-[40px] px-6 py-2 gap-[16px] border-2 border-border rounded-lg bg-white focus-within:border-primary  hover:border-primary-active transition-colors duration-200">
      <Search size={20} className="text-disabled" />
      <input
        type="text"
        value={inputValue}
        placeholder={placeholderTetxt}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setPlaceholderText('')}
        onBlur={() => setPlaceholderText(placeholder)}
        className="w-full typo-text font-bold text-main placeholder-disabled focus:outline-none"
      />
      {inputValue && (
        <button
          onClick={() => setInputValue('')}
          className="absolute right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
