import { DISPLAY_RESOLUTION } from '@/constants/Resolution';
import { ChartOptions } from 'chart.js';
import { useTranslation } from 'react-i18next';

const useChartConfig = (datasetsData: any[] = []) => {
  const { t } = useTranslation('report');

  const data = {
    labels: [
      t('chart_container.job_potential.text_top_right_1'),
      t('chart_container.job_potential.text_bottom_right_1'),
      t('chart_container.job_potential.text_bottom_left_1'),
      t('chart_container.job_potential.text_top_left_1'),
    ], // Four points for the radar chart
    datasets: [
      {
        data: datasetsData,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        pointRadius: 0, // Disable default points
        pointHoverRadius: 0, // Disable hover effect on default points
        axisLabels: [
          t('chart_container.job_potential.text_top'),
          t('chart_container.job_potential.text_right'),
          t('chart_container.job_potential.text_bottom'),
          t('chart_container.job_potential.text_left'),
        ],
      },
    ],
  };

  const padding =
    window.screen.availWidth >= DISPLAY_RESOLUTION.DISPLAY_1600
      ? { top: 50, right: 170, bottom: 50, left: 170 }
      : { top: 50, right: 80, bottom: 50, left: 80 };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: padding,
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        angleLines: {
          display: true, // Show lines connecting the center to the labels
        },
        grid: {
          display: false, // Disable circular grid to replace it with square grid
        },
        pointLabels: {
          display: false,
        },
        ticks: {
          display: false, // Display ticks on the radar
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return { data, options };
};

export default useChartConfig;
