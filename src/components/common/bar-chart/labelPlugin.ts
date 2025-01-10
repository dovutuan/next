import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { BarChartProps } from '.';

// Custom Plugin to display labels above bars with a gap
const labelPlugin = (props: BarChartProps) => {
  return {
    id: 'customLabels',
    beforeDatasetsDraw(chart: any) {
      const {
        ctx,
        data,
        chartArea: { left, width, height },
        scales: { y },
      } = chart;
      const barHeight =
        (height / y.ticks.length) *
        data.datasets[0].barPercentage *
        data.datasets[0].categoryPercentage;
      data.datasets[0].data.forEach((_: any, index: number) => {
        ctx.beginPath();
        ctx.fillStyle = STYLE_VARIABLES.CLR_BORDER_SECONDARY;
        ctx.fillRect(
          left,
          y.getPixelForValue(index) - barHeight / 2,
          width,
          barHeight,
        );
      });
    },
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0); // Access the first dataset
      const dataset = chart.data.datasets[0]; // Get dataset

      meta.data.forEach((bar: any, index: number) => {
        const label = chart.data.labels[index]; // Get the label
        const value = `${dataset.data[index]}`;

        ctx.save();
        ctx.font = 'bold 14px Noto Sans Jp';
        ctx.fillStyle = '#344054'; // Text color
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';

        // Draw the label parallel to the bar, starting at zero
        ctx.fillText(
          `${label}`, // Only label text
          chart.scales.x.left, // Start at zero (x-axis start)
          bar.y - bar.height / 2 - 14, // Place above the bar with a 5px gap
        );

        if (props.rightLabel) {
          ctx.fillText(
            `${props.rightLabel[index]}`,
            chart.scales.x.right - 42,
            bar.y - bar.height / 2 - 14,
          );
        }

        ctx.fillStyle = STYLE_VARIABLES.CLR_BTN_FG_PRIMARY;
        ctx.textAlign = 'right';
        ctx.fillText(
          value, // Value text
          bar.width - 5, // 5px gap from the right edge
          bar.y, // Vertically centered inside the bar
        );
        ctx.restore();
      });
    },
  };
};

export default labelPlugin;
