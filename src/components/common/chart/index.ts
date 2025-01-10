import React from 'react';

const ThinkingTypeChart = React.lazy(() => import('./thinking-type'));
const ThinkingStyleChart = React.lazy(() => import('./thinking-style'));
const PieMultiSeriesChart = React.lazy(() => import('./pie-multi-series'));

export { ThinkingTypeChart, ThinkingStyleChart, PieMultiSeriesChart };
