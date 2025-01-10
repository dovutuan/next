import { drawText, drawTwoHeadedArrow } from '@/utils/draw';

const customAxis = {
  id: 'customAxis',
  beforeDraw(chart: any) {
    const { ctx, scales, data } = chart;
    const radialScale = scales.r;
    if (!radialScale) return; // Safeguard if the radial scale is undefined
    const centerX = radialScale.xCenter;
    const centerY = radialScale.yCenter;
    const labels = data.datasets[0].axisLabels;

    const xAxisStartPoint = {
      y: centerY,
      x: centerX - radialScale.drawingArea,
    };
    const xAxisEndPoint = {
      y: centerY,
      x: centerX + radialScale.drawingArea,
    };
    const yAxisStartPoint = {
      y: centerY - radialScale.drawingArea,
      x: centerX,
    };
    const yAxisEndPoint = {
      y: centerY + radialScale.drawingArea,
      x: centerX,
    };
    const style = {
      font: {
        weight: 'bold' as const,
      },
    };

    // Draw xAxis
    drawTwoHeadedArrow(
      ctx,
      xAxisStartPoint.x,
      xAxisStartPoint.y,
      xAxisEndPoint.x,
      xAxisEndPoint.y,
    );

    // Draw yAxis
    drawTwoHeadedArrow(
      ctx,
      yAxisStartPoint.x,
      yAxisStartPoint.y,
      yAxisEndPoint.x,
      yAxisEndPoint.y,
    );

    const LABEL_MARGIN = 30;

    // xAxis start point label
    drawText(
      ctx,
      labels[3],
      xAxisStartPoint.x - LABEL_MARGIN,
      xAxisStartPoint.y,
      style,
    );
    // xAxis end point label
    drawText(
      ctx,
      labels[1],
      xAxisEndPoint.x + LABEL_MARGIN,
      xAxisEndPoint.y,
      style,
    );

    // yAxis start point label
    drawText(
      ctx,
      labels[0],
      yAxisStartPoint.x,
      yAxisStartPoint.y - LABEL_MARGIN,
      style,
    );
    // yAxis end point label
    drawText(
      ctx,
      labels[2],
      yAxisEndPoint.x,
      yAxisEndPoint.y + LABEL_MARGIN,
      style,
    );
  },
};

export default customAxis;
