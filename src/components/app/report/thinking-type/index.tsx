'use client';
import React from 'react';
import { ThinkingTypeChart } from '@/components/common/chart';
import { ThinkingChartTab } from '@/types/Report.type';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { ModalNames } from '@/types/ModalNames.type';
import ThinkingTypeGuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

interface ThinkingTypeChartProps {
  value: number;
  employeeId: number;
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
}

const ThinkingTypeChartContainer = (props: ThinkingTypeChartProps) => {
  const { t } = useTranslation('report');
  const [tabFocus, setTabFocus] = React.useState<number>(
    ThinkingChartTab.feature,
  );
  const modalName = ModalNames.REPORT_THINKING_TYPE_GUIDE;
  const handleOpenGuideModal = () => {
    props.onShowModal(modalName);
  };

  const handleCloseModal = () => {
    props.onCloseModal(modalName);
  };

  return (
    <>
      <Box
        className="chart-item-title flex items-center gap-2 divide-y divide-slate-200 p-3"
        onClick={handleOpenGuideModal}
      >
        {t('chart_container.thinking_type.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <ThinkingTypeChart
        value={props.value}
        defaultTarget={ThinkingChartTab.feature}
        handleChange={(value) => setTabFocus(value)}
      />
      <ThinkingTypeGuideModal
        value={props.value}
        onClose={handleCloseModal}
        tabFocus={tabFocus}
        employeeId={props.employeeId}
      />
    </>
  );
};

export default React.memo(ThinkingTypeChartContainer);
