'use client';
import AnimationModal from '@/components/common/animation-modal';
import { ModalContent } from '@/components/common/base-modal-migrate-chart';
import BaseParagraph from '@/components/common/paragraph';
import Block from '@/components/layouts/block';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import React from 'react';
import PageTable from '../../guide-table-common';
import ChevronRightDoubleIcon from '/public/assets/icons/chevron-right-double-icon.svg';

export type ModalProps = {
  data: number[];
  onClose: () => void;
};

const GuideModalContent = (props: ModalProps) => {
  const { t } = useTranslation('report');

  const DATA_1 = [
    {
      id: 1,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_item',
      ),
      deviation: props.data[0],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_1_minusLowDeviation',
      ),
    },
    {
      id: 2,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_item',
      ),
      deviation: props.data[1],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_2_minusLowDeviation',
      ),
    },
    {
      id: 3,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_item',
      ),
      deviation: props.data[2],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_3_minusLowDeviation',
      ),
    },
    {
      id: 4,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_item',
      ),
      deviation: props.data[3],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_4_minusLowDeviation',
      ),
    },
    {
      id: 5,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_item',
      ),
      deviation: props.data[4],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_5_minusLowDeviation',
      ),
    },
    {
      id: 6,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_item',
      ),
      deviation: props.data[5],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_6_minusLowDeviation',
      ),
    },
    {
      id: 7,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_item',
      ),
      deviation: props.data[6],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_7_minusLowDeviation',
      ),
    },
    {
      id: 8,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_item',
      ),
      deviation: props.data[7],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_8_minusLowDeviation',
      ),
    },
  ];

  const DATA_2 = [
    {
      id: 9,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_item',
      ),
      deviation: props.data[8],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_9_minusLowDeviation',
      ),
    },
    {
      id: 10,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_item',
      ),
      deviation: props.data[9],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_10_minusLowDeviation',
      ),
    },
    {
      id: 11,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_item',
      ),
      deviation: props.data[10],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_11_minusLowDeviation',
      ),
    },
    {
      id: 12,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_item',
      ),
      deviation: props.data[11],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_12_minusLowDeviation',
      ),
    },
    {
      id: 13,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_item',
      ),
      deviation: props.data[12],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_13_minusLowDeviation',
      ),
    },
    {
      id: 14,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_item',
      ),
      deviation: props.data[13],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_14_minusLowDeviation',
      ),
    },
    {
      id: 15,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_item',
      ),
      deviation: props.data[14],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_15_minusLowDeviation',
      ),
    },
    {
      id: 16,
      item: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_item',
      ),
      deviation: props.data[15],
      explanation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.basic_characteristics.guide.table_content.c3_1_16_minusLowDeviation',
      ),
    },
  ];

  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  };

  return (
    <AnimationModal
      open={true}
      isShowAnimation={isOpen}
      className="xs:w-[100%] h-[100%] rounded-none md:w-[70%] xl:w-[50%]"
      align="right"
      onClose={handleCloseModal}
    >
      <>
        <Box className="border-b border-solid border-[#EAECF0] p-[26px]">
          <IconButton onClick={handleCloseModal}>
            <ChevronRightDoubleIcon />
          </IconButton>
        </Box>
        <ModalContent className="p-[24px]">
          <Block
            titleNode={
              <Box className="flex flex-col gap-[4px]">
                <BaseParagraph size="xl" color="secondary" weight="semibold">
                  {t(
                    'chart_container.basic_characteristics.guide.block_title_1',
                  )}
                </BaseParagraph>
                <BaseParagraph size="sm" color="quarterary" weight="normal">
                  {t(
                    'chart_container.basic_characteristics.guide.block_title_2',
                  )}
                </BaseParagraph>
              </Box>
            }
          >
            <BaseParagraph
              size="lg"
              color="secondary"
              weight="bold"
              className="mb-[12px]"
            >
              {t('chart_container.basic_characteristics.guide.sub_title_1')}
            </BaseParagraph>
            <PageTable data={DATA_1} />
            <BaseParagraph
              size="lg"
              color="secondary"
              weight="bold"
              className="mb-[12px] mt-[24px]"
            >
              {t('chart_container.basic_characteristics.guide.sub_title_2')}
            </BaseParagraph>
            <PageTable data={DATA_2} />
          </Block>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
