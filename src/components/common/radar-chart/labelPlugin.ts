import { drawRoundedRectWithText, drawText } from '@/utils/draw';

const calculateCoordinate = (
  angle: number,
  radius: number,
  center: { x: number; y: number },
) => {
  let xCoor = 0;
  let yCoor = 0;
  const radians = degreesToRadians(angle);
  const yInCircle = Math.cos(radians) * radius;
  const yInCanvas = center.y - yInCircle;
  const xInCircle = Math.sin(radians) * radius;
  const xInCanvas = center.x + xInCircle;
  xCoor = xInCanvas;
  yCoor = yInCanvas;

  return {
    xCoor,
    yCoor,
  };
};

const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

const labelDrawing = (
  ctx: any,
  data: {
    label: string;
    value: string;
  },
  cordinate: {
    x: number;
    y: number;
  },
  angle: number,
  style: any,
) => {
  const valueTextStyle = {
    fillStyle: style.textColor,
    textAlign: 'center' as const,
    font: {
      weight: '500' as const,
      size: '14px',
    },
  };
  const labelTextStyle: any = {
    fillStyle: "#344054",
    font: { weight: '500' as const, size: '12px' },
    textAlign: 'center',
  };
  const labelCordinate = { x: cordinate.x, y: cordinate.y };
  const valueCordinate = { x: cordinate.x, y: cordinate.y };
  if (angle === 0) {
    labelCordinate.y -= 45;
    valueCordinate.y -= 30;
    valueCordinate.x -= 15;
  } else if (angle <= 45) {
    labelCordinate.x += 10;
    labelCordinate.y -= 20;
    valueCordinate.x += 15;
    valueCordinate.y -= 5;
  } else if (angle <= 90) {
    labelCordinate.x += 10;
    labelCordinate.y -= 10;
    valueCordinate.x += 10;
    valueCordinate.y += 5;
  } else if (angle <= 135) {
    labelCordinate.x += 10;
    labelCordinate.y -= 5;
    valueCordinate.x += 10;
    valueCordinate.y += 10;
  } else if (angle < 180) {
    labelCordinate.x -= 10;
    labelCordinate.y += 15;
    valueCordinate.x -= 5;
    valueCordinate.y += 30;
  } else if (angle === 180) {
    labelCordinate.y += 10;
    valueCordinate.y += 25;
    valueCordinate.x -= 15;
  } else if (angle < 225) {
    labelCordinate.x += 10;
    labelCordinate.y += 15;
    valueCordinate.x -= 20;
    valueCordinate.y += 30;
  } else if (angle <= 270) {
    labelCordinate.x -= 10;
    labelCordinate.y -= 5;
    valueCordinate.x -= 40;
    valueCordinate.y += 10;
  } else if (angle < 315) {
    labelCordinate.x -= 10;
    labelCordinate.y -= 10;
    valueCordinate.x -= 40;
    valueCordinate.y += 5;
  } else {
    labelCordinate.x -= 10;
    labelCordinate.y -= 20;
    valueCordinate.x -= 45;
    valueCordinate.y -= 5;
  }

  if (angle === 0 || angle === 180) {
    labelTextStyle.textAlign = 'center';
  } else if (angle < 180) {
    labelTextStyle.textAlign = 'left';
  } else if (angle > 180) {
    labelTextStyle.textAlign = 'right';
  }

  drawText(ctx, data.label, labelCordinate.x, labelCordinate.y, labelTextStyle);

  drawRoundedRectWithText(
    ctx,
    data.value.toString(),
    valueCordinate.x,
    valueCordinate.y,
    30,
    22,
    10,
    valueTextStyle,
  );
};

const labelPlugin = {
  id: 'labelPlugin',
  beforeDatasetsDraw(chart: any) {
    const {
      data,
      ctx,
      scales: { r },
    } = chart;
    const xCenter = r.xCenter;
    const yCenter = r.yCenter;
    const drawingArea = r.drawingArea;
    const angleStep = 360 / r._pointLabels.length;
    const datasetData = data.datasets[0]?.data;
    const datasetStyle = data.datasets[0]?.style;

    data.labels.forEach((label: any, index: number) => {
      const angle = angleStep * index;
      const { xCoor, yCoor } = calculateCoordinate(angle, drawingArea, {
        x: xCenter,
        y: yCenter,
      });

      labelDrawing(
        ctx,
        { label, value: datasetData[index] },
        { x: xCoor, y: yCoor },
        angle,
        datasetStyle,
      );
    });
  },
};

export default labelPlugin;
