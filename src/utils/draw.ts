import { STYLE_VARIABLES } from '@/constants/StyleVariables';

type CanvasStyleParams = {
  fillStyle?: string;
  font?: {
    size?: string;
    weight?:
      | 'normal'
      | 'bold'
      | 'lighter'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
    family?: string;
  };
  textAlign?: CanvasTextAlign;
};

export const drawRoundedSquare = (
  ctx: any,
  x: number,
  y: number,
  size: number,
  radius: number = 10,
  option: {
    strokeStyle?: string | CanvasGradient | CanvasPattern;
  } = {
    strokeStyle: '#D0D5DD',
  },
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y); // Start at the top-left corner, with the radius offset

  // Draw the top edge
  ctx.lineTo(x + size - radius, y);
  ctx.arcTo(x + size, y, x + size, y + radius, radius);

  // Draw the right edge
  ctx.lineTo(x + size, y + size - radius);
  ctx.arcTo(x + size, y + size, x + size - radius, y + size, radius);

  // Draw the bottom edge
  ctx.lineTo(x + radius, y + size);
  ctx.arcTo(x, y + size, x, y + size - radius, radius);

  // Draw the left edge
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);

  ctx.closePath(); // Close the path to form the square
  // ctx.fillStyle = 'white'; // Set fill color with transparency
  // ctx.fill(); // Fill the square with the color
  ctx.lineWidth = 1; // Line width for the border
  ctx.strokeStyle = option.strokeStyle; // Border color
  ctx.stroke(); // Draw the border
};

export const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
  ctx.lineWidth = 1; // Line width for the border
  ctx.strokeStyle = STYLE_VARIABLES.CLR_BORDER_UTILITY_BLUE_200; // Border color
  ctx.fillStyle = STYLE_VARIABLES.CLR_BG_UTILITY_BLUE_50;
  ctx.fill();
  ctx.stroke(); // Draw the outline of the rounded rectangle
};

export const drawRoundedRectWithText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  textStyle?: CanvasStyleParams,
) => {
  drawRoundedRect(ctx, x, y, width, height, radius);
  const textX = x + width / 2; // Center X of the rectangle
  const textY = y + height / 2; // Center Y of the rectangle
  drawText(ctx, text, textX, textY, textStyle);
};

export const drawTwoHeadedArrow = (
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  arrowSize: number = 8,
  lineWidth: number = 1,
  color: string = '#D0D5DD',
) => {
  // Set line width and color for the arrow line
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

  // Draw the main arrow line
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Start at point (x1, y1)
  ctx.lineTo(x2, y2); // Draw line to point (x2, y2)
  ctx.stroke();

  // Draw arrowhead at (x2, y2)
  drawArrowhead(ctx, x2, y2, Math.atan2(y2 - y1, x2 - x1), arrowSize);

  // Draw arrowhead at (x1, y1)
  drawArrowhead(ctx, x1, y1, Math.atan2(y1 - y2, x1 - x2), arrowSize);
};

const drawArrowhead = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  size: number,
) => {
  // Draw arrowhead shape using lineTo
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(
    x - size * Math.cos(angle - Math.PI / 5),
    y - size * Math.sin(angle - Math.PI / 5),
  ); // Left side of arrowhead
  ctx.moveTo(x, y);
  ctx.lineTo(
    x - size * Math.cos(angle + Math.PI / 5),
    y - size * Math.sin(angle + Math.PI / 5),
  ); // Right side of arrowhead
  ctx.stroke();
};

export const drawText = (
  ctx: CanvasRenderingContext2D,
  content: string,
  x: number,
  y: number,
  style?: CanvasStyleParams,
) => {
  const defaultStyle = {
    fillStyle: STYLE_VARIABLES.CLR_TXT_SECONDARY,
    font: {
      size: '14px',
      weight: 'normal',
      family: 'Noto Sans JP',
    },
    textAlign: 'center' as CanvasTextAlign,
  };
  const mergedStyle = {
    ...defaultStyle,
    ...style,
    font: {
      ...defaultStyle.font,
      ...style?.font,
    },
  };
  ctx.font = `${mergedStyle.font.weight} ${mergedStyle.font.size} ${mergedStyle.font.family}`;
  ctx.fillStyle = mergedStyle.fillStyle;

  ctx.textAlign = mergedStyle.textAlign;
  ctx.textBaseline = 'middle';

  ctx.fillText(content, x, y);
};
