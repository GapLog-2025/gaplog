interface DecadeViewProps {
  currentDate: Date;
  onSelectYear: (year: number) => void;
}

export default function DecadeView({
  currentDate,
  onSelectYear,
}: DecadeViewProps) {
  // 임시 연도 고정
  const year = 2025;

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="typo-strong text-title py-2 px-4 rounded-lg select-none">
        연도 선택
      </p>
      <button
        onClick={() => onSelectYear(year)}
        className={`typo-text py-1 px-4 rounded hover:bg-primary-primary-background hover:text-primary ${
          currentDate.getFullYear() === year ? 'bg-primary text-white' : ''
        }`}
      >
        {year}
      </button>
    </div>
  );
}
