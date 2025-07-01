import { useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/Card';
import { SummaryHeader } from './SummaryHeader';
import MonthlyEmotionCalendar from './MonthlyCalendar';

export default function CereReportCard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

  return (
    <Card className="flex flex-col gap-10">
      <CardHeader className="px-10 pt-10 bg-gd-point-blue">
        <SummaryHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </CardHeader>
      <CardContent className="flex gap-10">
        <MonthlyEmotionCalendar
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div className="w-full">그래프 위치</div>
      </CardContent>
    </Card>
  );
}
