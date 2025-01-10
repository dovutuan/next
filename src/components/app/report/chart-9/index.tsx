import RadarChart from '@/components/common/radar-chart';
import DynamicTabs from '@/components/modules/tabs';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Box from '@mui/material/Box';
import { ModalNames } from '@/types/ModalNames.type';
import Chart9GuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart9 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_9_GUIDE;

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
        {t('chart_container.basic_characteristics.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        <DynamicTabs
          color="#367DC5!important"
          tabs={[
            {
              id: 1,
              label: t('chart_container.basic_characteristics.tab_1'),
              content: (
                <RadarChart
                  labels={[
                    t('chart_container.basic_characteristics.label_1'),
                    t('chart_container.basic_characteristics.label_2'),
                    t('chart_container.basic_characteristics.label_3'),
                    t('chart_container.basic_characteristics.label_4'),
                    t('chart_container.basic_characteristics.label_5'),
                    t('chart_container.basic_characteristics.label_6'),
                    t('chart_container.basic_characteristics.label_7'),
                    t('chart_container.basic_characteristics.label_8'),
                  ]}
                  data={[
                    props.data[0],
                    props.data[1],
                    props.data[2],
                    props.data[3],
                    props.data[4],
                    props.data[5],
                    props.data[6],
                    props.data[7],
                  ]}
                  backgroundColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_GREEN}
                  borderColor={
                    STYLE_VARIABLES.CLR_CHART_RADAR_FILL_BORDER_GREEN
                  }
                  textColor={STYLE_VARIABLES.CLR_CHART_RADAR_VALUE_GREEN}
                  radarHeight={553}
                />
              ),
            },
            {
              id: 2,
              label: t('chart_container.basic_characteristics.tab_2'),
              content: (
                <RadarChart
                  labels={[
                    t('chart_container.basic_characteristics.label_9'),
                    t('chart_container.basic_characteristics.label_10'),
                    t('chart_container.basic_characteristics.label_11'),
                    t('chart_container.basic_characteristics.label_12'),
                    t('chart_container.basic_characteristics.label_13'),
                    t('chart_container.basic_characteristics.label_14'),
                    t('chart_container.basic_characteristics.label_15'),
                    t('chart_container.basic_characteristics.label_16'),
                  ]}
                  data={[
                    props.data[8],
                    props.data[9],
                    props.data[10],
                    props.data[11],
                    props.data[12],
                    props.data[13],
                    props.data[14],
                    props.data[15],
                  ]}
                  backgroundColor={STYLE_VARIABLES.CLR_CHART_RADAR_FILL_GREEN}
                  borderColor={
                    STYLE_VARIABLES.CLR_CHART_RADAR_FILL_BORDER_GREEN
                  }
                  textColor={STYLE_VARIABLES.CLR_CHART_RADAR_VALUE_GREEN}
                  radarHeight={553}
                />
              ),
            },
          ]}
          tabWidth={'50%'}
        />
      </Box>
      <Chart9GuideModal
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
          props.data[10],
          props.data[11],
          props.data[12],
          props.data[13],
          props.data[14],
          props.data[15],
        ]}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Chart9;
