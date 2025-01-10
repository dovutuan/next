import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import roundPolygon from 'round-polygon';

const pointLabelPlugin = {
  id: 'pointLabelPlugin',
  beforeDraw(chart: any) {
    const { ctx, scales, data } = chart;
    const radialScale = scales.r;
    if (!radialScale) return; // Safeguard if the radial scale is undefined

    const centerX = radialScale.xCenter;
    const centerY = radialScale.yCenter;
    const datasetData = data.datasets[0].data;
    const drawingArea = radialScale.drawingArea;
    const points: any[] = [];
    const point1 = {
      x: centerX + (drawingArea * datasetData[0]) / 100,
      y: centerY - (drawingArea * datasetData[0]) / 100,
    };
    points.push(point1);

    const point2 = {
      x: centerX + (drawingArea * datasetData[1]) / 100,
      y: centerY + (drawingArea * datasetData[1]) / 100,
    };
    points.push(point2);

    const point3 = {
      x: centerX - (drawingArea * datasetData[2]) / 100,
      y: centerY + (drawingArea * datasetData[2]) / 100,
    };
    points.push(point3);

    const point4 = {
      x: centerX - (drawingArea * datasetData[3]) / 100,
      y: centerY - (drawingArea * datasetData[3]) / 100,
    };
    points.push(point4);
    const roundedPolygon = roundPolygon(points, 5);

    ctx.beginPath();
    roundedPolygon.forEach((p, i) => {
      !i && ctx.moveTo(p.in.x, p.in.y);
      ctx.arcTo(p.x, p.y, p.out.x, p.out.y, p.arc.radius);
      ctx.lineTo(p.next.in.x, p.next.in.y);
    });
    ctx.fillStyle = STYLE_VARIABLES.CLR_CHART_SQUARE_RADAR_FILL;
    ctx.strokeStyle = STYLE_VARIABLES.CLR_CHART_SQUARE_RADAR_POINT; // Border color
    ctx.fill();
    ctx.stroke();
  },
};

export default pointLabelPlugin;
