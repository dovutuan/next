import React from 'react';
import SquareRadarChart from '@/components/common/square-radar-chart';
import { ModalNames } from '@/types/ModalNames.type';
import Chart3GuideModal from './guide-modal';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart3 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_3_GUIDE;
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
        {t('chart_container.job_potential.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        {Boolean(
          props.data[0] && props.data[1] && props.data[2] && props.data[3],
        ) && (
          <SquareRadarChart
            data={[props.data[0], props.data[1], props.data[2], props.data[3]]}
          />
        )}
      </Box>
      <Chart3GuideModal
        data={[props.data[0], props.data[1], props.data[2], props.data[3]]}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Chart3;
