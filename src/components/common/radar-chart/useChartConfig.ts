import { ChartOptions } from 'chart.js';
import { RadarChartProps } from '.';
import { pick } from 'lodash';
import { DISPLAY_RESOLUTION } from '@/constants/Resolution';

const useChartConfig = (props: RadarChartProps) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        fill: true,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 1,
        style: pick(props, ['backgroundColor', 'borderColor', 'textColor']),
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const padding =
    window.screen.availWidth <= DISPLAY_RESOLUTION.DISPLAY_800 &&
    props.data.length === 8
      ? { top: 76, right: 40, bottom: 50, left: 40 }
      : window.screen.availWidth <= DISPLAY_RESOLUTION.DISPLAY_800 &&
          props.data.length === 5
        ? { top: 76, right: 70, bottom: 50, left: 70 }
        : { top: 76, right: 40, bottom: 50, left: 40 };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: padding,
    },
    scales: {
      r: {
        beginAtZero: true,
        pointLabels: {
          display: false,
        },
        min: 0,
        suggestedMin: 0,
        max: 100,
        ticks: {
          display: true,
          stepSize: 25,
          padding: 20,
          font: {
            size: 10, // Font size text ticks
          },
        },
        angleLines: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return { data, options };
};

export default useChartConfig;
