'use client';
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import useChartConfig from './useChartConfig';
import labelPlugin from './labelPlugin';
import customAxis from './axisPlugin';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export type RadarChartProps = {
  labels: unknown[];
  data: object[] | number[] | string[] | unknown[];
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  radarHeight?: number;
};

const RadarChart: React.FC<RadarChartProps> = (props) => {
  const { data, options } = useChartConfig(props);
  return (
    <div className="w-[100%]" style={{ height: props.radarHeight ?? 412 }}>
      <Radar
        data={data}
        options={options}
        plugins={[labelPlugin, customAxis]}
      />
    </div>
  );
};

export default RadarChart;
