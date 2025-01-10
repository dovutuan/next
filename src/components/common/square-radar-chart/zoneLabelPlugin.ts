import { DISPLAY_RESOLUTION } from '@/constants/Resolution';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { drawRoundedRectWithText, drawText } from '@/utils/draw';

const zoneLabelPlugin = {
  id: 'zoneLabelPlugin',
  afterDatasetDraw(chart: any) {
    const { ctx, scales, data } = chart;
    const radialScale = scales.r;
    if (!radialScale) return; // Safeguard if the radial scale is undefined
    const centerX = radialScale.xCenter;
    const centerY = radialScale.yCenter;
    const drawingArea = radialScale.drawingArea;
    const labels = data.labels;
    const datasetData = data.datasets[0].data;
    const LABEL_TXT_MARGIN_BOTTOM_1 = 40;
    const LABEL_TXT_MARGIN_BOTTOM = 25;
    const VALUE_TXT_MARGIN_LEFT = 10;
    const VALUE_TXT_MARGIN_BOTTOM = 10;
    const ABCD = ['Aゾーン：', 'Bゾーン：', 'Cゾーン：', 'Dゾーン：'];
    const POTENTIAL = ['Innovator', 'Administrator', 'Supporter', 'Promoter'];
    const valueTextStyle = {
      fillStyle: STYLE_VARIABLES.CLR_TXT_UTILITY_BLUE_700,
      font: {
        weight: 'bold' as const,
        size: '14px',
      },
    };

    const labelTextStyleRightZone = {
      font: { weight: 'bold' as const },
      textAlign: 'left' as const,
    };

    const labelTextStyleLeftZone = {
      font: { weight: 'bold' as const },
      textAlign: 'right' as const,
    };

    const topRightCorner = {
      x: centerX + drawingArea,
      y: centerY - drawingArea,
    };

    const bottomRightCorner = {
      x: centerX + drawingArea,
      y: centerY + drawingArea,
    };

    const topLeftCorner = {
      x: centerX - drawingArea,
      y: centerY - drawingArea,
    };

    const bottomLeftCorner = {
      x: centerX - drawingArea,
      y: centerY + drawingArea,
    };

    // Top right conner label
    const drawDesktop = () => {
      drawText(
        ctx,
        labels[0],
        topRightCorner.x,
        topRightCorner.y - LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleRightZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[0],
        topRightCorner.x + VALUE_TXT_MARGIN_LEFT,
        topRightCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Bottom right conner label
      drawText(
        ctx,
        labels[1],
        bottomRightCorner.x,
        bottomRightCorner.y + LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleRightZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[1],
        bottomRightCorner.x + VALUE_TXT_MARGIN_LEFT,
        bottomRightCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Bottom left conner label
      drawText(
        ctx,
        labels[2],
        bottomLeftCorner.x,
        bottomLeftCorner.y + LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleLeftZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[2],
        bottomLeftCorner.x - VALUE_TXT_MARGIN_LEFT - 30,
        bottomLeftCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Top left conner label
      drawText(
        ctx,
        labels[3],
        topLeftCorner.x,
        topLeftCorner.y - LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleLeftZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[3],
        topLeftCorner.x - VALUE_TXT_MARGIN_LEFT - 30,
        topLeftCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );
    };

    const drawMobile = () => {
      drawText(
        ctx,
        ABCD[0],
        topRightCorner.x,
        topRightCorner.y - LABEL_TXT_MARGIN_BOTTOM_1,
        labelTextStyleRightZone,
      );
      drawText(
        ctx,
        POTENTIAL[0],
        topRightCorner.x,
        topRightCorner.y - LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleRightZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[0],
        topRightCorner.x + VALUE_TXT_MARGIN_LEFT,
        topRightCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Bottom right conner label
      drawText(
        ctx,
        ABCD[1],
        bottomRightCorner.x,
        bottomRightCorner.y + LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleRightZone,
      );
      drawText(
        ctx,
        POTENTIAL[1],
        bottomRightCorner.x - 15,
        bottomRightCorner.y + LABEL_TXT_MARGIN_BOTTOM_1,
        labelTextStyleRightZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[1],
        bottomRightCorner.x + VALUE_TXT_MARGIN_LEFT,
        bottomRightCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Bottom left conner label
      drawText(
        ctx,
        ABCD[2],
        bottomLeftCorner.x,
        bottomLeftCorner.y + LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleLeftZone,
      );
      drawText(
        ctx,
        POTENTIAL[2],
        bottomLeftCorner.x,
        bottomLeftCorner.y + LABEL_TXT_MARGIN_BOTTOM_1,
        labelTextStyleLeftZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[2],
        bottomLeftCorner.x - VALUE_TXT_MARGIN_LEFT - 30,
        bottomLeftCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );

      // Top left conner label
      drawText(
        ctx,
        ABCD[3],
        topLeftCorner.x,
        topLeftCorner.y - LABEL_TXT_MARGIN_BOTTOM_1,
        labelTextStyleLeftZone,
      );
      drawText(
        ctx,
        POTENTIAL[3],
        topLeftCorner.x,
        topLeftCorner.y - LABEL_TXT_MARGIN_BOTTOM,
        labelTextStyleLeftZone,
      );
      drawRoundedRectWithText(
        ctx,
        datasetData[3],
        topLeftCorner.x - VALUE_TXT_MARGIN_LEFT - 30,
        topLeftCorner.y - VALUE_TXT_MARGIN_BOTTOM,
        30,
        22,
        10,
        valueTextStyle,
      );
    };

    if (window.screen.availWidth < DISPLAY_RESOLUTION.DISPLAY_1600) {
      drawMobile();
    } else {
      drawDesktop();
    }
  },
};

export default zoneLabelPlugin;
