'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import labelPlugin from './labelPlugin';
import useChartConfig from './useChartConfig';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export type BarChartProps = {
  label?: unknown[];
  data: object | object[] | number[] | string[] | unknown[];
  backgroundColor: string | string[];
  rightLabel?: string[];
  barPercentage?: number;
  chartHeight?: number;
};

const BarChart = (props: BarChartProps) => {
  const { data, options } = useChartConfig(props);

  return (
    <div className="w-full" style={{ height: `${props.chartHeight ?? 400}px` }}>
      <Bar data={data} options={options} plugins={[labelPlugin(props)]} />
    </div>
  );
};

export default BarChart;
