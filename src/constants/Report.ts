import { ThinkingChartTab } from '@/types/Report.type';
import { useTranslation } from 'react-i18next';

export const useConstantTrans = () => {
  const { t } = useTranslation('report');
  // Chart 1 data options
  const THINKING_TYPE_OPTIONS = Array.from({ length: 8 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      name: t(`chart_container.thinking_type.animal.${id}.name`),
      groupName: t(`chart_container.thinking_type.animal.${id}.group_name`),
      feature: t(`chart_container.thinking_type.animal.${id}.feature`),
      strong: t(`chart_container.thinking_type.animal.${id}.strong`),
      weaknesses: t(`chart_container.thinking_type.animal.${id}.weaknesses`),
      leader_style: t(
        `chart_container.thinking_type.animal.${id}.leader_style`,
      ),
      relationship: t(
        `chart_container.thinking_type.animal.${id}.relationship`,
      ),
      directive: t(`chart_container.thinking_type.animal.${id}.directive`),
      note: t(`chart_container.thinking_type.animal.${id}.note`),
    };
  });

  const THINKING_STYLE_OPTIONS = Array.from({ length: 5 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      name: t(`chart_container.thinking_style.chart_data.${id}.name`),
      text: t(`chart_container.thinking_style.chart_data.${id}.text`),
      feature: t(`chart_container.thinking_style.chart_data.${id}.feature`),
      strong: t(`chart_container.thinking_style.chart_data.${id}.strong`),
      weaknesses: t(
        `chart_container.thinking_style.chart_data.${id}.weaknesses`,
      ),
      explanation: t(
        `chart_container.thinking_style.chart_data.${id}.explanation`,
      ),
      group: t(`chart_container.thinking_style.chart_data.${id}.group`),
    };
  }).sort((a, b) => a.text.localeCompare(b.text));

  const LEADER_SHIP_OPTIONS = Array.from({ length: 6 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      groupName: t(`chart_container.thinking_type.leadership.${id}.group_name`),
      title: t(`chart_container.thinking_type.leadership.${id}.title`),
      strong: t(`chart_container.thinking_type.leadership.${id}.strong`),
      weaknesses: t(
        `chart_container.thinking_type.leadership.${id}.weaknesses`,
      ),
    };
  });

  const THINKING_TYPE_TABS = [
    {
      value: ThinkingChartTab.feature,
      label: t('chart_container.thinking_type.tab.feature.name'),
    },
    {
      value: ThinkingChartTab.leaderStyle,
      label: t('chart_container.thinking_type.tab.leader_style.name'),
    },
  ];

  const WORK_MOTIVATION_DATA = Array.from({ length: 6 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      name: t(`chart_container.work_motivation.guide.data.${id}.name`),
      defined: t(`chart_container.work_motivation.guide.data.${id}.defined`),
      employee_model: t(
        `chart_container.work_motivation.guide.data.${id}.employee_model`,
      ),
    };
  });

  return {
    THINKING_TYPE_OPTIONS,
    THINKING_TYPE_TABS,
    LEADER_SHIP_OPTIONS,
    THINKING_STYLE_OPTIONS,
    WORK_MOTIVATION_DATA,
  };
};
