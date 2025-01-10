'use client';
import React from 'react';
import { ModalContent } from '@/components/common/base-modal-migrate-chart';
import { useConstantTrans } from '@/constants/Report';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { BlockTitle, ContentStyled } from './style';
import ChevronRightDoubleIcon from '/public/assets/icons/chevron-right-double-icon.svg';
import { IconButton } from '@mui/material';
import PageTable from './table';
import AnimationModal from '@/components/common/animation-modal';

export type ModalProps = {
  value: number[];
  onClose: () => void;
};

const GuideModalContent = (props: ModalProps) => {
  const { t } = useTranslation('report');
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const { WORK_MOTIVATION_DATA } = useConstantTrans();

  const renderLayoutTable = (index: number) => {
    const stt = index * 2;
    const data = WORK_MOTIVATION_DATA.slice(stt, stt + 2).map((item: any) => {
      return { ...item, result: props.value[item.id - 1] };
    });
    return <PageTable data={data} />;
  };

  const renderDataList = (key: string, index: number) => {
    return (
      <ContentStyled className="mb-[40px]">
        <Box className="content-title py-3 pl-[20px]">
          <p className="text-[16px] font-bold">
            {t(`chart_container.work_motivation.guide.${key}.name`)}
          </p>
          <p className="mt-2 text-[14px]">
            {t(`chart_container.work_motivation.guide.${key}.define_system`)}
          </p>
        </Box>
        <Box className="content-list mt-[20px]">{renderLayoutTable(index)}</Box>
      </ContentStyled>
    );
  };

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
      className="h-[100%] rounded-none sm:w-[100%] md:w-[70%] xl:w-[50%]"
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
          <BlockTitle>
            <Box className="pb-3 text-[20px] font-bold text-[#344054]">
              {t('chart_container.work_motivation.title')}
            </Box>
            <Box className="text-[#667085]">
              {t('chart_container.work_motivation.description')}
            </Box>
          </BlockTitle>
          <Box className="content pt-[30px]">
            {['internal_system', 'external_system', 'reward_system'].map(
              (langKey: string, index: number) => {
                return renderDataList(langKey, index);
              },
            )}
          </Box>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
