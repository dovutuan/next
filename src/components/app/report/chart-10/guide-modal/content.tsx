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

  const DATA = [
    {
      id: 1,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_item',
      ),
      deviation: props.data[0],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_1_minusLowDeviation',
      ),
    },
    {
      id: 2,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_item',
      ),
      deviation: props.data[1],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_2_minusLowDeviation',
      ),
    },
    {
      id: 3,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_item',
      ),
      deviation: props.data[2],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_3_minusLowDeviation',
      ),
    },
    {
      id: 4,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_item',
      ),
      deviation: props.data[3],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_4_minusLowDeviation',
      ),
    },
    {
      id: 5,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_item',
      ),
      deviation: props.data[4],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_5_minusLowDeviation',
      ),
    },
    {
      id: 6,
      item: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_item',
      ),
      deviation: props.data[5],
      explanation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_minusHighDeviation',
      ),
      plusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_plusLowDeviation',
      ),
      minusLowDeviation: t(
        'chart_container.emotional_trait.guide.table_content.c3_2_6_minusLowDeviation',
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
                  {t('chart_container.emotional_trait.guide.block_title_1')}
                </BaseParagraph>
                <BaseParagraph size="sm" color="quarterary" weight="normal">
                  {t('chart_container.emotional_trait.guide.block_title_2')}
                </BaseParagraph>
              </Box>
            }
          >
            <PageTable data={DATA} />
          </Block>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
