import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { BarChartProps } from '.';

const useChartConfig = (props: BarChartProps) => {
  const data = {
    labels: props.label, // Column names
    datasets: [
      {
        data: props.data,
        backgroundColor: props.backgroundColor,
        borderColor: [
          STYLE_VARIABLES.CLR_BORDER_SECONDARY,
          STYLE_VARIABLES.CLR_BORDER_SECONDARY,
          STYLE_VARIABLES.CLR_BORDER_SECONDARY,
        ],
        barPercentage: props.barPercentage ?? 0.6,
        categoryPercentage: 0.8,
        borderSkipped: false,
        borderRadius: 4,
      },
    ],
  };

  const indexAxis: 'x' | 'y' = 'y';

  const options = {
    indexAxis: indexAxis, // Makes the chart horizontal,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        max: 100,
        ticks: {
          stepSize: 20,
        },
        beginAtZero: true,
        grid: {
          color: 'transparent', // Color for grid lines
          drawBorder: false, // Remove x-axis line
          tickColor: STYLE_VARIABLES.CLR_BORDER_SECONDARY, // Color for tick marks
          tickLength: 6, // Length of tick marks
        },
      },
      y: {
        display: false,
      },
    },
  };

  return { data, options };
};

export default useChartConfig;
