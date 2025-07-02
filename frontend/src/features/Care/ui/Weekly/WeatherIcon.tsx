import { Sun, Cloud, CloudRain, Zap, Snowflake, Wind } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { type WeatherType } from '@/types/emotion';
const weatherIconMap: Record<WeatherType, LucideIcon> = {
  맑음: Sun,
  흐림: Cloud,
  비: CloudRain,
  번개: Zap,
  눈: Snowflake,
  바람: Wind,
};

interface WeatherIconProps {
  weather: WeatherType;
  size?: number;
  className?: string;
}

export default function WeatherIcon({
  weather,
  size = 20,
  className = '',
}: WeatherIconProps) {
  const Icon = weatherIconMap[weather];

  return (
    <div className="flex items-center gap-2">
      <Icon size={size} className={`${className}`} />
      <span className={`${className}`}>{weather}</span>
    </div>
  );
}
