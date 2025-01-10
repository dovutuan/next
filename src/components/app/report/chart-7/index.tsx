import BarChart from '@/components/common/bar-chart';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { ModalNames } from '@/types/ModalNames.type';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import Chart7GuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart7 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_7_GUIDE;
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
        {t('chart_container.continuity.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        <BarChart
          label={[
            t('chart_container.continuity.label_1'),
            t('chart_container.continuity.label_2'),
            t('chart_container.continuity.label_3'),
            t('chart_container.continuity.label_4'),
            t('chart_container.continuity.label_5'),
          ]}
          data={[
            Math.floor(props.data[0]),
            Math.floor(props.data[1]),
            Math.floor(props.data[2]),
            Math.floor(props.data[3]),
            Math.floor(props.data[4]),
          ]}
          backgroundColor={STYLE_VARIABLES.CLR_CHART_BAR_TEAL}
          chartHeight={461}
        />
      </Box>
      <Chart7GuideModal
        data={[
          Math.floor(props.data[0]),
          Math.floor(props.data[1]),
          Math.floor(props.data[2]),
          Math.floor(props.data[3]),
          Math.floor(props.data[4]),
        ]}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Chart7;
