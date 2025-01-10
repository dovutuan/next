'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import Grid from '@mui/material/Grid2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type BackgroundType = {
  in: string[];
  out: string[];
};

type DataType = {
  in: (number | string)[];
  out: (number | string)[];
};

type DoubleLevelPieChartProps = {
  label?: string[];
  data: DataType;
  backgroundColor: BackgroundType;
};

const customPlugIn = [
  {
    id: 'customLabels',
    afterDatasetsDraw(chart: any) {
      const {
        ctx,
        legend: { legendItems },
      } = chart;
      const metaOut = chart.getDatasetMeta(0);
      const metaIn = chart.getDatasetMeta(1);
      const dataOut = chart.data.datasets[0].data;
      const labelIn = legendItems.slice(dataOut.length, legendItems.length);
      const labelOut = ['A', 'B', 'C', 'D', 'E', 'F'];

      // Show label OUT
      metaOut.data?.forEach((bar: any, index: number) => {
        renderFakeBorder(ctx, bar, index);
        const { startAngle, endAngle } = bar;
        const angle = endAngle - startAngle;
        if (angle > Math.PI / 12)
          renderTextInBar(ctx, bar, labelOut[index]);
      });

      // Show label IN
      metaIn.data?.forEach((bar: any, index: number) => {
        const { startAngle, endAngle } = bar;
        const angle = endAngle - startAngle;
        // If Degrees > 70deg => render text
        if (70 < (angle * 180) / Math.PI) 
          renderTextInBar(ctx, bar, labelIn[index].text, index);
      });
      ctx.restore();
    },
  },
];

const renderTextInBar = (
  ctx: CanvasRenderingContext2D,
  bar: any,
  value: number | string,
  index?: number,
): void => {
  const { startAngle, endAngle, outerRadius, innerRadius } = bar;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const middle = startAngle + (endAngle - startAngle) / 2;
  let x = radius * Math.cos(middle);
  const y = radius * Math.sin(middle);
  if (index === 0 || index === 1) {
    x = x + 5;
  }
  ctx.save();
  ctx.font = `14px Noto Sans Jp`;
  ctx.fillStyle = '#FFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(value.toString(), bar.x + x, bar.y + y);
  ctx.restore();
};

const renderFakeBorder = (
  ctx: CanvasRenderingContext2D,
  bar: any,
  index: number,
): void => {
  const { startAngle, outerRadius, innerRadius, x, y } = bar;
  const xStart = x + outerRadius * Math.cos(startAngle);
  const yStart = y + outerRadius * Math.sin(startAngle);
  const xEnd = x + innerRadius * Math.cos(startAngle);
  const yEnd = y + innerRadius * Math.sin(startAngle);
  if (index % 2 === 0) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();
  }
};

const getLabel = (context: any): string => {
  const index = context.dataIndex;
  const indexLabel = [6, 6, 7, 7, 8, 8][index];
  const dataLength = context.dataset.data;
  if (dataLength.length === 3) {
    return context.chart.data.labels[index + 6];
  } else {
    return context.chart.data.labels[indexLabel];
  }
};

const getFooter = (context: any): string => {
  const labelIndex = context[0].datasetIndex * 6 + context[0].dataIndex;
  const label = context[0].chart.data.labels[labelIndex];
  return labelIndex <= 5
    ? `${label} (${context[0].raw}%)`
    : `${context[0].raw}%`;
};

const DoubleLevelPieChart: React.FC<DoubleLevelPieChartProps> = ({
  label,
  data,
  backgroundColor,
}) => {
  // Memoize chartData and options to prevent unnecessary recalculations on each render
  const chartData = React.useMemo(
    () => ({
      labels: label,
      datasets: [
        {
          data: data.out,
          backgroundColor: backgroundColor.out,
          hoverOffset: 5,
          cutout: '30%',
          borderWidth: 0,
        },
        {
          data: data.in,
          backgroundColor: backgroundColor.in,
          hoverOffset: 5,
          borderWidth: 4,
        },
      ],
    }),
    [label, data, backgroundColor],
  );

  const options = React.useMemo(
    () => ({
      maintainAspectRatio: true,
      layout: {
        padding: 20,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          footerMarginTop: 10,
          backgroundColor: '#FFF',
          footerColor: '#161B26',
          callbacks: {
            labelTextColor: () => '#61646C',
            label: getLabel,
            title: () => '',
            footer: getFooter,
          },
        },
      },
    }),
    [],
  );

  return (
    <Grid container spacing={2} justifyContent="center">
      <div className="flex h-[300px] w-full justify-center">
        <Pie data={chartData} options={options} plugins={customPlugIn} />
      </div>
    </Grid>
  );
};

export default React.memo(DoubleLevelPieChart);
