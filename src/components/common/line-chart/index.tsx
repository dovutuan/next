'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import useChartConfig from './useChartConfigs';
import Box from '@mui/material/Box';

// Register the required components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export type LineChartProps = {
  label?: unknown[];
  data: object | object[] | number[] | string[] | unknown[];
  descriptions?: string[];
  label_descriptions?: string[];
};

const LineChart = (props: LineChartProps) => {
  const { data, options } = useChartConfig(props);

  return (
    <Box className="h-[434px]">
      <Line data={data} options={options} plugins={[ChartDataLabels]} />
    </Box>
  );
};

export default LineChart;
