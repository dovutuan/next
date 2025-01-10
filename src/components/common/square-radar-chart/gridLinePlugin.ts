import { drawRoundedSquare, drawText } from '@/utils/draw';

const TICK_STEP_SIZE = 25;
const TICK_LABEL_SPACING = {
  RIGHT: 6,
  BOTTOM: 12,
};

const gridLinePlugin = {
  id: 'gridLinePlugin',
  beforeDraw(chart: any) {
    const { ctx, scales } = chart;
    const radialScale = scales.r;
    if (!radialScale) return; // Safeguard if the radial scale is undefined

    const centerX = radialScale.xCenter;
    const centerY = radialScale.yCenter;

    const stepCount = 100 / TICK_STEP_SIZE; // Number of grid steps
    const stepSize = radialScale.drawingArea / stepCount; // Size of each grid square

    // Draw square grid lines
    for (let i = 1; i <= stepCount; i++) {
      const size = i * stepSize;
      const x = centerX - size;
      const y = centerY - size;
      const radius = [1, 2].includes(i) ? 0 : 10;
      drawRoundedSquare(ctx, x, y, size * 2, radius);

      const tickLabel = (i - 1) * TICK_STEP_SIZE;
      const tickLabelPosition = {
        x: centerX,
        y: centerY - stepSize * (i - 1),
      };
      const style = {
        textAlign: 'right' as CanvasTextAlign,
        font: {
          weight: 'bold' as const,
        },
      };

      drawText(
        ctx,
        tickLabel.toString(),
        tickLabelPosition.x - TICK_LABEL_SPACING.RIGHT,
        tickLabelPosition.y - TICK_LABEL_SPACING.BOTTOM,
        style,
      );

      if (i === stepCount) {
        const tickLabelPosition = {
          x: centerX,
          y: centerY - stepSize * i,
        };
        drawText(
          ctx,
          '100',
          tickLabelPosition.x - TICK_LABEL_SPACING.RIGHT,
          tickLabelPosition.y - TICK_LABEL_SPACING.BOTTOM,
          style,
        );
      }
    }
  },
};

export default gridLinePlugin;
