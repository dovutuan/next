import RadarChart from '@/components/common/radar-chart';
import DynamicTabs from '@/components/modules/tabs';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Chart5GuideModal from './guide-modal';
import { ModalNames } from '@/types/ModalNames.type';
import Box from '@mui/material/Box';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart5 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_5_GUIDE;

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
        {t('chart_container.ability_traits.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        <DynamicTabs
          color="#367DC5!important"
          tabs={[
            {
              id: 1,
              label: t('chart_container.ability_traits.tab_1'),
              content: (
                <RadarChart
                  labels={[
                    t('chart_container.ability_traits.label_1'),
                    t('chart_container.ability_traits.label_2'),
                    t('chart_container.ability_traits.label_3'),
                    t('chart_container.ability_traits.label_4'),
                    t('chart_container.ability_traits.label_5'),
                  ]}
                  data={[
                    props.data[0],
                    props.data[1],
                    props.data[2],
                    props.data[3],
                    props.data[4],
                  ]}
                  backgroundColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_TEAL}
                  borderColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_BORDER_TEAL}
                  textColor={STYLE_VARIABLES.CLR_CHART_RADAR_VALUE_TEAL}
                />
              ),
            },
            {
              id: 2,
              label: t('chart_container.ability_traits.tab_2'),
              content: (
                <RadarChart
                  labels={[
                    t('chart_container.ability_traits.label_6'),
                    t('chart_container.ability_traits.label_7'),
                    t('chart_container.ability_traits.label_8'),
                    t('chart_container.ability_traits.label_9'),
                    t('chart_container.ability_traits.label_10'),
                  ]}
                  data={[
                    props.data[5],
                    props.data[6],
                    props.data[7],
                    props.data[8],
                    props.data[9],
                  ]}
                  backgroundColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_TEAL}
                  borderColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_BORDER_TEAL}
                  textColor={STYLE_VARIABLES.CLR_CHART_RADAR_VALUE_TEAL}
                />
              ),
            },
          ]}
          tabWidth={'50%'}
        />
      </Box>
      <Chart5GuideModal
        data={[
          props.data[0],
          props.data[1],
          props.data[2],
          props.data[3],
          props.data[4],
          props.data[5],
          props.data[6],
          props.data[7],
          props.data[8],
          props.data[9],
        ]}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Chart5;
