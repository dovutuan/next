'use client';
import AnimationModal from '@/components/common/animation-modal';
import { ModalContent } from '@/components/common/base-modal-migrate-chart';
import BaseParagraph from '@/components/common/paragraph';
import Block from '@/components/layouts/block';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import React from 'react';
import PageTable from '../../chart-3/guide-modal/table';
import ChevronRightDoubleIcon from '/public/assets/icons/chevron-right-double-icon.svg';
import InfoIcon from '/public/assets/icons/info-circle-cyan.svg';

export type ModalProps = {
  data: number[];
  onClose: () => void;
};

const GuideModalContent = (props: ModalProps) => {
  const { t } = useTranslation('report');

  const data = [
    {
      id: 1,
      item: t('chart_container.job_potential.guide.table_content.item_1'),
      deviation: props.data[0],
      job: t('chart_container.job_potential.guide.table_content.job_1'),
      example: t('chart_container.job_potential.guide.table_content.example_1'),
    },
    {
      id: 2,
      item: t('chart_container.job_potential.guide.table_content.item_2'),
      deviation: props.data[1],
      job: t('chart_container.job_potential.guide.table_content.job_2'),
      example: t('chart_container.job_potential.guide.table_content.example_2'),
    },
    {
      id: 3,
      item: t('chart_container.job_potential.guide.table_content.item_3'),
      deviation: props.data[2],
      job: t('chart_container.job_potential.guide.table_content.job_3'),
      example: t('chart_container.job_potential.guide.table_content.example_3'),
    },
    {
      id: 4,
      item: t('chart_container.job_potential.guide.table_content.item_4'),
      deviation: props.data[3],
      job: t('chart_container.job_potential.guide.table_content.job_4'),
      example: t('chart_container.job_potential.guide.table_content.example_4'),
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
                  {t('chart_container.job_potential.guide.block_title_1')}
                </BaseParagraph>
                <BaseParagraph size="sm" color="quarterary" weight="normal">
                  {t('chart_container.job_potential.guide.block_title_2')}
                </BaseParagraph>
              </Box>
            }
          >
            <PageTable data={data} />
          </Block>
          <Box className="flex w-[100%] gap-[8px] rounded-[10px] bg-clr-bg-brand-primary p-[12px]">
            <InfoIcon className="min-w-[24px]" />
            <Box className="flex flex-col">
              <BaseParagraph size="sm" color="brandSecondary" weight="normal">
                {t('chart_container.job_potential.guide.text_1')}
              </BaseParagraph>
              <BaseParagraph size="sm" color="brandSecondary" weight="normal">
                {t('chart_container.job_potential.guide.text_2')}
              </BaseParagraph>
            </Box>
          </Box>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
