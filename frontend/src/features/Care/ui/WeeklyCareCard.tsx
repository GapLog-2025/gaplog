import { useState, useRef, useEffect } from 'react';
import { emotionLogs } from '../data/CareList';
import { Card, CardHeader } from '@/components/Card';
import { WeeklyCareHeader } from './Weekly/WeeklyCareHeader';
export default function WeeklyCareCard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

  return (
    <Card className="flex flex-col gap-5">
      <CardHeader className="px-10 pt-10 bg-gd-point-purple">
        <WeeklyCareHeader
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CardHeader>
    </Card>
  );
}
