interface TabMenuProps {
  currentTab: 'all' | 'mine' | 'bookmarked';
  onTabChange: (tab: TabMenuProps['currentTab']) => void;
}

export default function TabMenu({ currentTab, onTabChange }: TabMenuProps) {
  const tabs = [
    { key: 'all', label: '전체 후기' },
    { key: 'mine', label: '내가 쓴 후기' },
    { key: 'bookmarked', label: '즐겨찾기' },
  ] as const;

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`px-4 py-2 rounded-full border ${
            currentTab === tab.key ? 'bg-black text-white' : 'text-gray-500'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
