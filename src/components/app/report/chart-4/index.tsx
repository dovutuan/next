import BarChart from '@/components/common/bar-chart';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { ModalNames } from '@/types/ModalNames.type';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import Chart4GuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart4 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_4_GUIDE;
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
        {t('chart_container.role_potential.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content">
        <BarChart
          label={[
            t('chart_container.role_potential.bar_label_1'),
            t('chart_container.role_potential.bar_label_2'),
            t('chart_container.role_potential.bar_label_3'),
          ]}
          data={[props.data[0], props.data[1], props.data[2]]}
          backgroundColor={STYLE_VARIABLES.CLR_CHART_BAR_BLUE}
          barPercentage={0.42}
        />
      </Box>
      <Chart4GuideModal
        data={[props.data[0], props.data[1], props.data[2], props.data[3]]}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Chart4;
