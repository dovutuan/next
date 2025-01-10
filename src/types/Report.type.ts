export enum ThinkingChartAnimalType {
  fox = 1,
  raccoon,
  sheep,
  tiger,
  seal,
  lion,
  horse,
  monkey,
}

export enum ThinkingChartTab {
  feature = 1,
  leaderStyle,
}

export interface GuideTableCommonRecord {
  id: number;
  item: string;
  deviation: number;
  explanation: string;
  plusHighDeviation: string;
  minusHighDeviation: string;
  plusLowDeviation?: string;
  minusLowDeviation?: string;
}
