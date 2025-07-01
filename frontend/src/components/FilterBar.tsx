interface Props {
  filters: {
    isMajor: boolean | null;
    grade: number | null;
    gapPeriod: number | null;
  };
  onChangeFilters: (next: Props['filters']) => void;
}

export default function FilterBar({ filters, onChangeFilters }: Props) {
  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={() =>
          onChangeFilters({ ...filters, isMajor: !filters.isMajor })
        }
        className="border px-3 py-1 rounded"
      >
        {filters.isMajor === null
          ? '전공/비전공'
          : filters.isMajor
            ? '전공자'
            : '비전공자'}
      </button>
      <button
        onClick={() => onChangeFilters({ ...filters, grade: 3.5 })}
        className="border px-3 py-1 rounded"
      >
        3.5 이상
      </button>
      <button
        onClick={() => onChangeFilters({ ...filters, gapPeriod: 6 })}
        className="border px-3 py-1 rounded"
      >
        공백기 6개월 이하
      </button>
    </div>
  );
}
