import LineChart from '@/components/common/line-chart';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import BaseParagraph from '@/components/common/paragraph';
import { ModalNames } from '@/types/ModalNames.type';
import Chart13GuideModal from './guide-modal';
import ChevronRightIcon from '/public/assets/icons/chevron-right.svg';

type Props = {
  data: number[];
  onShowModal: (modalName: ModalNames) => void;
  onCloseModal: (modalNames: ModalNames) => void;
};

const Chart13 = (props: Props) => {
  const { t } = useTranslation('report');

  const modalName = ModalNames.CHART_13_GUIDE;
  const handleOpenGuideModal = () => {
    props.onShowModal(modalName);
  };

  const handleCloseModal = () => {
    props.onCloseModal(modalName);
  };

  return (
    <>
      <Box
        className="chart-item-title flex items-center divide-y divide-slate-200 p-3"
        onClick={handleOpenGuideModal}
      >
        {t('chart_container.experiences.title')}
        <ChevronRightIcon className="text-xl" />
      </Box>
      <Box className="chart-item-content flex w-[100%] flex-col gap-[24px] lg:flex-row">
        <Box className="max-w-[100%] grow lg:max-w-[87%]">
          <LineChart
            label={[
              t('chart_container.experiences.label_1'),
              t('chart_container.experiences.label_2'),
              t('chart_container.experiences.label_3'),
              t('chart_container.experiences.label_4'),
              t('chart_container.experiences.label_5'),
            ]}
            data={[
              Math.floor(props.data[0]),
              Math.floor(props.data[1]),
              Math.floor(props.data[2]),
              Math.floor(props.data[3]),
              Math.floor(props.data[4]),
            ]}
            label_descriptions={[
              t('chart_container.experiences.label_description_1'),
              t('chart_container.experiences.label_description_2'),
              t('chart_container.experiences.label_description_3'),
              t('chart_container.experiences.label_description_4'),
              t('chart_container.experiences.label_description_5'),
            ]}
            descriptions={[
              t('chart_container.experiences.description_1'),
              t('chart_container.experiences.description_2'),
              t('chart_container.experiences.description_3'),
              t('chart_container.experiences.description_4'),
              t('chart_container.experiences.description_5'),
            ]}
          />
        </Box>
        <Box className="flex flex-col justify-between gap-[14px] lg:gap-0">
          <Box className="flex flex-col gap-[1px] lg:gap-[2px]">
            <BaseParagraph
              size="xs"
              className="text-clr-txt-line-chart-text-green"
              weight="medium"
            >
              {t('chart_container.experiences.label_description_1')}
            </BaseParagraph>
            <BaseParagraph size="xs" color="tertiary" weight="medium">
              {t('chart_container.experiences.description_1')}
            </BaseParagraph>
          </Box>
          <Box className="flex flex-col gap-[1px] lg:gap-[2px]">
            <BaseParagraph
              size="xs"
              className="text-clr-txt-line-chart-text-green"
              weight="medium"
            >
              {t('chart_container.experiences.label_description_2')}
            </BaseParagraph>
            <BaseParagraph size="xs" color="tertiary" weight="medium">
              {t('chart_container.experiences.description_2')}
            </BaseParagraph>
          </Box>
          <Box className="flex flex-col gap-[1px] lg:gap-[2px]">
            <BaseParagraph
              size="xs"
              className="text-clr-txt-line-chart-text-green"
              weight="medium"
            >
              {t('chart_container.experiences.label_description_3')}
            </BaseParagraph>
            <BaseParagraph size="xs" color="tertiary" weight="medium">
              {t('chart_container.experiences.description_3')}
            </BaseParagraph>
          </Box>
          <Box className="flex flex-col gap-[1px] lg:gap-[2px]">
            <BaseParagraph
              size="xs"
              className="text-clr-txt-line-chart-text-green"
              weight="medium"
            >
              {t('chart_container.experiences.label_description_4')}
            </BaseParagraph>
            <BaseParagraph size="xs" color="tertiary" weight="medium">
              {t('chart_container.experiences.description_4')}
            </BaseParagraph>
          </Box>
          <Box className="flex flex-col gap-[1px] lg:gap-[2px]">
            <BaseParagraph
              size="xs"
              className="text-clr-txt-line-chart-text-green"
              weight="medium"
            >
              {t('chart_container.experiences.label_description_5')}
            </BaseParagraph>
            <BaseParagraph size="xs" color="tertiary" weight="medium">
              {t('chart_container.experiences.description_5')}
            </BaseParagraph>
          </Box>
        </Box>
      </Box>
      <Chart13GuideModal
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

export default Chart13;
