import { useState, useEffect } from 'react';
import { emotionLogs } from '../data/CareList';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { WeeklyCareHeader } from './Weekly/WeeklyCareHeader';
import WeeklyCalendar from './Weekly/WeeklyCalendar';
import WeeklyDiaryList from './Weekly/WeeklyDiaryList';

export default function WeeklyCareCard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);
  const [weekDates, setWeekDates] = useState<Date[]>([]);

  // 현재 날짜 기준으로 해당 주(일~토)의 날짜 구하기
  useEffect(() => {
    const newDate = new Date(currentDate);
    const dayOfWeek = newDate.getDay(); // 0(일) ~ 6(토)
    const sunday = new Date(newDate);
    sunday.setDate(newDate.getDate() - dayOfWeek);

    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(sunday);
      d.setDate(sunday.getDate() + i);
      return d;
    });

    setWeekDates(dates);
  }, [currentDate]);

  useEffect(() => {
    const isSameDate = (a: Date, b: Date) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();

    const isInCurrentWeek = weekDates.some((d) =>
      isSameDate(d, selectedDate ?? currentDate),
    );
    if (!isInCurrentWeek) {
      setSelectedDate(weekDates[0]);
    }
  }, [weekDates, selectedDate, currentDate]);

  const goToPrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
    setSelectedDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
    setSelectedDate(newDate);
  };

  return (
    <Card className="flex flex-col gap-5">
      <CardHeader className="px-10 pt-10 bg-gd-point-purple">
        <WeeklyCareHeader
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-20 pb-12">
        <WeeklyCalendar
          weekDates={weekDates}
          selectedDate={selectedDate ?? currentDate}
          emotionLogs={emotionLogs}
          onSelectDate={setSelectedDate}
          onPrevWeek={goToPrevWeek}
          onNextWeek={goToNextWeek}
        />

        <WeeklyDiaryList weekDates={weekDates} emotionLogs={emotionLogs} />
      </CardContent>
    </Card>
  );
}
