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

  const data = [
    {
      id: 1,
      item: t('chart_container.role_potential.guide.table_content.c1_2_1_item'),
      deviation: props.data[0],
      explanation: t(
        'chart_container.role_potential.guide.table_content.c1_2_1_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_1_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_1_minusHighDeviation',
      ),
    },
    {
      id: 2,
      item: t('chart_container.role_potential.guide.table_content.c1_2_2_item'),
      deviation: props.data[1],
      explanation: t(
        'chart_container.role_potential.guide.table_content.c1_2_2_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_2_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_2_minusHighDeviation',
      ),
    },
    {
      id: 3,
      item: t('chart_container.role_potential.guide.table_content.c1_2_3_item'),
      deviation: props.data[2],
      explanation: t(
        'chart_container.role_potential.guide.table_content.c1_2_3_explanation',
      ),
      plusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_3_plusHighDeviation',
      ),
      minusHighDeviation: t(
        'chart_container.role_potential.guide.table_content.c1_2_3_minusHighDeviation',
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
                  {t('chart_container.role_potential.guide.block_title_1')}
                </BaseParagraph>
                <BaseParagraph size="sm" color="quarterary" weight="normal">
                  {t('chart_container.role_potential.guide.block_title_2')}
                </BaseParagraph>
              </Box>
            }
          >
            <PageTable data={data} classColumnThree="max-w-[240px]" />
          </Block>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
