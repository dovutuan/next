'use client';
import React from 'react';
import { ThinkingStyleChart } from '@/components/common/chart';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { ModalNames } from '@/types/ModalNames.type';
import ThinkingStyleGuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

interface ThinkingTypeChartProps {
  value: number;
  employeeId: number;
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
}

const ThinkingStyleChartContainer = (props: ThinkingTypeChartProps) => {
  const { t } = useTranslation('report');
  const modalName = ModalNames.REPORT_THINKING_STYLE_GUIDE;

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
        {t('chart_container.thinking_style.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <ThinkingStyleChart value={props.value} />
      <ThinkingStyleGuideModal
        value={props.value}
        onClose={handleCloseModal}
        employeeId={props.employeeId}
      />
    </>
  );
};

export default React.memo(ThinkingStyleChartContainer);
