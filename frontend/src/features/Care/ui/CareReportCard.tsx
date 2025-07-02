import { useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/Card';
import { SummaryHeader } from './Report/SummaryHeader';
import MonthlyEmotionCalendar from './Report/MonthlyCalendar';
import getTwoWeekChartData from '../utils/getTwoWeekChartDate';
import { emotionLogs } from '../data/CareList';
import TwoWeekChart from './Report/TwoWeekChart';

export default function CereReportCard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

  const chartData = getTwoWeekChartData(
    selectedDate ?? currentDate,
    emotionLogs,
  );

  return (
    <Card className="flex flex-col gap-5">
      <CardHeader className="px-10 pt-10 bg-gd-point-blue">
        <SummaryHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          emotionLogs={emotionLogs}
        />
      </CardHeader>
      <CardContent className="flex gap-20 pb-12">
        <div className="w-full">
          <MonthlyEmotionCalendar
            currentDate={currentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="w-full">
          <TwoWeekChart
            chartData={chartData}
            selectedDate={selectedDate ?? currentDate}
          />
        </div>
      </CardContent>
    </Card>
  );
}
