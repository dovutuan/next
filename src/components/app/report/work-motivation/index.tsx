'use client';
import { PieMultiSeriesChart } from '@/components/common/chart';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Grid from '@mui/material/Grid2';
import { ModalNames } from '@/types/ModalNames.type';
import WorkMotivationGuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

interface Props {
  data: any;
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
}

const WorkMotivation = (props: Props) => {
  const { t } = useTranslation('report');
  const modalName = ModalNames.REPORT_WORK_MOTIVATION_GUIDE;
  const formatData = {
    in: [
      Math.floor(props.data?.c3_4_1) + Math.floor(props.data?.c3_4_2),
      Math.floor(props.data?.c3_4_3) + Math.floor(props.data?.c3_4_4),
      Math.floor(props.data?.c3_4_5) + Math.floor(props.data?.c3_4_6),
    ],
    out: [
      Math.floor(props.data?.c3_4_1),
      Math.floor(props.data?.c3_4_2),
      Math.floor(props.data?.c3_4_3),
      Math.floor(props.data?.c3_4_4),
      Math.floor(props.data?.c3_4_5),
      Math.floor(props.data?.c3_4_6),
    ],
  };

  const handleOpenGuideModal = () => {
    props.onShowModal(modalName);
  };

  const handleCloseModal = () => {
    props.onCloseModal(modalName);
  };

  const renderDescriptionSection = React.useCallback(
    (
      color: string,
      labelPrefix: string,
      labelList: string[],
      dataList: (number | string)[],
    ) => (
      <Box className="chart-content-items py-4">
        <Box
          className={`chart-title-1 align-items-center mb-3 flex`}
          sx={{ color }}
        >
          <Box
            className={`mr-2 rounded p-[8px]`}
            sx={{ backgroundColor: color }}
          />
          {t(labelPrefix)}
        </Box>
        <Grid container spacing={3}>
          {labelList.map((label, index) => (
            <Grid size={{ xs: 6, md: 6 }} key={label}>
              <Box className="mb-3 font-[500] text-[#475467]">
                {t(`chart_container.work_motivation.tooltip.${label}`)}
              </Box>
              <Box className="text-[1.2rem] font-bold text-[#101828]">
                {dataList[index]}%
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
    [formatData?.out],
  );

  return (
    <>
      <Box
        className="chart-item-title flex items-center gap-2 divide-y divide-slate-200 p-3"
        onClick={handleOpenGuideModal}
      >
        {t('chart_container.motivation.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        <PieMultiSeriesChart
          label={[
            t('chart_container.work_motivation.tooltip.A'),
            t('chart_container.work_motivation.tooltip.B'),
            t('chart_container.work_motivation.tooltip.C'),
            t('chart_container.work_motivation.tooltip.D'),
            t('chart_container.work_motivation.tooltip.E'),
            t('chart_container.work_motivation.tooltip.F'),
            t('chart_container.work_motivation.tooltip.subsystem_1'),
            t('chart_container.work_motivation.tooltip.subsystem_2'),
            t('chart_container.work_motivation.tooltip.subsystem_3'),
          ]}
          data={formatData}
          backgroundColor={{
            in: ['#155B75', '#088AB2', '#22CCEE'],
            out: [
              '#155B75',
              '#0E7090',
              '#088AB2',
              '#06AED4',
              '#22CCEE',
              '#67E3F9',
            ],
          }}
        />
        <Box className="chart-content-container mt-4">
          {renderDescriptionSection(
            '#155B75',
            'chart_container.work_motivation.tooltip.subsystem_1',
            ['A', 'B'],
            [formatData?.out[0], formatData?.out[1]],
          )}
          {renderDescriptionSection(
            '#088AB2',
            'chart_container.work_motivation.tooltip.subsystem_2',
            ['C', 'D'],
            [formatData?.out[2], formatData?.out[3]],
          )}
          {renderDescriptionSection(
            '#22CCEE',
            'chart_container.work_motivation.tooltip.subsystem_3',
            ['E', 'F'],
            [formatData?.out[4], formatData?.out[5]],
          )}
        </Box>
      </Box>

      <WorkMotivationGuideModal
        value={formatData?.out}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default WorkMotivation;
