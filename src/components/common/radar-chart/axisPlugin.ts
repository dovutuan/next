import { drawText } from '@/utils/draw';

const customAxis = {
  id: 'customAxis',
  beforeDraw(chart: any) {
    const { ctx, scales } = chart;
    const radialScale = scales.r;
    if (!radialScale) return; // Safeguard if the radial scale is undefined
    const centerX = radialScale.xCenter;
    const centerY = radialScale.yCenter;

    const style = {
      font: {
        size: '10',
      },
    };

    // yAxis start
    drawText(ctx, '0', centerX, centerY, style);
  },
};

export default customAxis;
