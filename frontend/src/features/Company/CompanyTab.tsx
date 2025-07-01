interface CompanyTabProps {
  activeTab: number;
  onTabChange: (tabIndex: number) => void;
}

export default function CompanyTab({
  activeTab,
  onTabChange,
}: CompanyTabProps) {
  const tabs = [
    { label: '전체 보기' },
    { label: '지역별 모아보기' },
    { label: '업종별 모아보기' },
  ];

  return (
    <div className="mx-2 my-3">
      <div className="w-full p-1 rounded-lg bg-border">
        <nav className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabChange(index)}
              className={`text-lg font-semibold flex-1 py-2 text-sm text-main ${
                activeTab === index
                  ? 'bg-white mx-0.5 rounded-lg text-title'
                  : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
