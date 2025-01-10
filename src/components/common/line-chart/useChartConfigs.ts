import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { LineChartProps } from '.';
import { ChartOptions } from 'chart.js';

const useChartConfig = (props: LineChartProps) => {
  const data = {
    labels: props.label,
    datasets: [
      {
        data: props.data, // Data points
        borderColor: STYLE_VARIABLES.CLR_CHART_LINE,
        backgroundColor: STYLE_VARIABLES.CLR_CHART_LINE,
        pointBorderColor: '#ffffff',
        borderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        footerMarginTop: 10,
        backgroundColor: '#FFF',
        footerColor: '#161B26',
        callbacks: {
          labelTextColor: () => '#61646C',
          // footerTextColor: () => '#161B26',
          label: (context: any) => {
            if (!props.label_descriptions) return;
            return props.label_descriptions[context.dataIndex];
          },
          title: () => '',
          footer: (context: any) => {
            if (!props.descriptions) return;
            return props.descriptions[context[0].dataIndex];
          },
        },
      },
      datalabels: {
        color: STYLE_VARIABLES.CLR_CHART_LINE_VALUE, // Text color
        backgroundColor: STYLE_VARIABLES.CLR_CHART_LINE_BACKGROUND_VALUE,
        borderColor: STYLE_VARIABLES.CLR_CHART_LINE_BORDER_VALUE,
        padding: {
          top: 2,
          right: 8,
          bottom: 2,
          left: 8,
        },
        borderWidth: 1,
        borderRadius: 9999,
        anchor: 'end',
        align: 'end', // Position above the point
        font: {
          size: 12,
          weight: 'bold',
        },
        formatter: (value: any) => `${value}`, // Display value as is
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis from 0
        max: 100, // Maximum value for Y-axis
        ticks: {
          stepSize: 25, // Step size of 25
        },
      },
    },
  };

  return { data, options };
};

export default useChartConfig;
