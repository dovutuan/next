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
import customAxis from './axisPlugin';
import gridLinePlugin from './gridLinePlugin';
import useChartConfig from './useChartConfig';
import zoneLabelPlugin from './zoneLabelPlugin';
import pointLabelPlugin from './pointLabelPlugin';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

interface SquareRadarProps {
  data: number[];
}

const SquareRadarChart: React.FC<SquareRadarProps> = (props) => {
  const { data, options } = useChartConfig(props.data);
  return (
    <div className="mx-auto h-[400px] w-[100%]">
      <Radar
        data={data}
        options={options}
        plugins={[
          gridLinePlugin,
          customAxis,
          zoneLabelPlugin,
          pointLabelPlugin,
        ]}
      />
    </div>
  );
};

export default SquareRadarChart;
