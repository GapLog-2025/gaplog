import { useState } from 'react';
import MonthView from './MonthView';
import YearView from './YearVIew';
import DecadeView from './DecadeView';
interface WeeklyDateDropdownProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

type ViewMode = 'month' | 'year' | 'decade';

export default function WeeklyDateDropdown({
  selectedDate,
  setSelectedDate,
}: WeeklyDateDropdownProps) {
  const [view, setView] = useState<ViewMode>('month');
  const [currentDate, setCurrentDate] = useState<Date>(selectedDate);

  const onMonthSelect = (date: Date) => {
    setSelectedDate(date);
    setView('month');
  };

  const renderView = () => {
    switch (view) {
      case 'month':
        return (
          <MonthView
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            onChangeView={() => setView('year')}
            onSelectDate={onMonthSelect}
          />
        );
      case 'year':
        return (
          <YearView
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            onChangeView={() => setView('decade')}
            onSelectMonth={(month) => {
              const newDate = new Date(currentDate);
              newDate.setMonth(month);
              setCurrentDate(newDate);
              setView('month');
            }}
          />
        );
      case 'decade':
        return (
          <DecadeView
            currentDate={currentDate}
            onSelectYear={(year) => {
              const newDate = new Date(currentDate);
              newDate.setFullYear(year);
              setCurrentDate(newDate);
              setView('year');
            }}
          />
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[300px]">
      {renderView()}
    </div>
  );
}
