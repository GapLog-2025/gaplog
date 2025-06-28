import SearchInput from '@/components/SearchInput';
import SortDropdown from '@/components/SortDropdown';
import FilterButton from '@/components/FilterButton';

interface SearchAndSortBarProps {
  sortOption: string;
  onSearch: (keyword: string) => void;
  onSortChange: (option: string) => void;
  onFilterToggle: (open: boolean) => void;
}

export default function SearchAndSortBar({
  sortOption,
  onSearch,
  onSortChange,
  onFilterToggle,
}: SearchAndSortBarProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5">
        <FilterButton onChange={onFilterToggle} />
        <SortDropdown
          options={['최신순', '인기순']}
          value={sortOption}
          onChange={onSortChange}
        />
      </div>
      <SearchInput
        placeholder="키워드, 태그로 검색해보세요!"
        onSearch={onSearch}
      />
    </div>
  );
}
