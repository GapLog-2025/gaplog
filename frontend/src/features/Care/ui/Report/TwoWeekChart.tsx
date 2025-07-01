import Chart from 'react-apexcharts';
import { ChartColumn } from 'lucide-react';
import {
  type Emotion,
  type EmotionTagType,
  emotionColorHexMap,
  emotionColorMap,
  themeColorMap,
} from '@/types/emotion';

import { getEmotionSummaryFromChart } from '../../utils/getEMotionSummaryFromChart';
import Tag from '@/components/Tag';

interface EmotionChartData {
  x: string;
  y: number;
  emotion: Emotion | null;
}

interface TwoWeekChartProps {
  chartData: EmotionChartData[];
  selectedDate: Date;
}

export default function TwoWeekChart({
  chartData,
  selectedDate,
}: TwoWeekChartProps) {
  // 차트 데이터 분석값
  const { mostFrequent, pattern } = getEmotionSummaryFromChart(chartData);
  const patternColor =
    pattern === '긍정적' ? 'info' : pattern === '부정적' ? 'pink' : 'default';
  const formatDate = (date: Date) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const startDate = new Date(selectedDate);
  startDate.setDate(startDate.getDate() - 13);

  // 막대 그래프 데이터
  const barSeriesData = chartData.map((d) => ({
    x: d.x,
    y: d.y,
    fillColor:
      d.emotion && emotionColorMap[d.emotion]
        ? emotionColorHexMap[emotionColorMap[d.emotion] as EmotionTagType]
        : '#D1D5DB',
  }));

  // 라인 그래프 데이터
  const lineSeriesData = chartData.map((d) => ({
    x: d.x,
    y: d.y,
  }));

  // 그래프 설정
  const series = [
    {
      name: '감정 점수',
      type: 'line',
      data: lineSeriesData,
    },
    {
      name: '감정',
      type: 'bar',
      data: barSeriesData,
    },
  ];
  // 생성
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 300,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      selection: {
        enabled: false,
      },
    },

    stroke: {
      width: [3, 0],
      curve: 'smooth',
    },

    plotOptions: {
      bar: {
        columnWidth: '80%',
        borderRadius: 4,
      },
    },

    xaxis: {
      type: 'category',
      categories: chartData.map((d) => d.x),
      tickAmount: 8,
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },

    colors: ['#8B5CF6'],

    markers: {
      size: 3,
    },

    legend: {
      show: false,
    },

    tooltip: {
      enabled: true,
      shared: false,
      intersect: false,
      y: {
        formatter: function (_value, { seriesIndex, dataPointIndex }) {
          const emotion = chartData[dataPointIndex]?.emotion;

          if (!emotion) return '기록 없음';
          if (seriesIndex === 0) return '기록 없음';
          return emotion;
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <ChartColumn size={28} className="text-primary" />
        <h3 className="typo-subheading text-main">감정 변화 그래프</h3>
      </div>
      <div className="flex flex-col gap-2">
        {/* info */}
        <p className="typo-text text-secondary">
          선택한 날을 기준으로 감정 변화를 살펴보세요.
        </p>
        <div className="flex flex-col gap-2 bg-info-background rounded-lg p-4">
          {/* 기준일 */}
          <div className="typo-text text-title flex gap-2 items-center ml-4">
            <p className="typo-strong leading-none">기준일</p>
            <p className="leading-none">{formatDate(selectedDate)}</p>
          </div>
          {/* 분석기간 */}
          <div className="typo-text text-title flex gap-2 items-center ml-4">
            <p className="typo-strong leading-none">분석기간</p>
            <p className="leading-none">
              {formatDate(startDate)} ~ {formatDate(selectedDate)}
            </p>
          </div>
        </div>
      </div>

      <Chart options={options} series={series} type="line" height={200} />

      {/* 통계 */}
      <div className="mt-4 px-2 flex justify-between">
        <div className="flex gap-4 items-center">
          <p className="typo-strong text-title leading-none">주요 감정</p>
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full ${themeColorMap[emotionColorMap[mostFrequent]].point}`}
            />
            <Tag type={emotionColorMap[mostFrequent]} label={mostFrequent} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="typo-strong text-title leading-none">최근 감정 패턴</p>
          <Tag type={patternColor} label={pattern} />
        </div>
      </div>
    </div>
  );
}
