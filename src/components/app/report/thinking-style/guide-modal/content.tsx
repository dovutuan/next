'use client';
import React from 'react';
import { ModalContent } from '@/components/common/base-modal-migrate-chart';
import { useConstantTrans } from '@/constants/Report';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid2';
import cn from '@/utils/classNames';
import useGetBasicInfo from '@/hooks/useGetBasicInfor';
import DotIcon from '/public/assets/icons/dot-icon.svg';
import { BlockTitle, ContentStyled } from './style';
import ChevronRightDoubleIcon from '/public/assets/icons/chevron-right-double-icon.svg';
import { IconButton } from '@mui/material';
import { usePathname } from 'next/navigation';
import AnimationModal from '@/components/common/animation-modal';

export type ModalProps = {
  value: number;
  onClose: () => void;
  employeeId: number;
};

const GuideModalContent = (props: ModalProps) => {
  const { t } = useTranslation('report');
  const pathName = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const { currentAdmin } = useGetBasicInfo();
  const { THINKING_STYLE_OPTIONS } = useConstantTrans();

  const checkInExamSite = React.useMemo(() => {
    const rgx = /^\/exam-results\/\d+\/report$/;
    return rgx.exec(pathName);
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  };

  const renderStrongWeaknessContent = (label: string, content: string) => (
    <Box className="mb-4">
      <p className={`${label} py-4 font-bold`}>
        {t(`chart_container.thinking_type.${label}`)}
      </p>
      <p className="strong-content grid-item-content whitespace-pre-line text-[#344054]">
        {content}
      </p>
    </Box>
  );

  const renderResultExam = () => {
    let key = 'personal_style';
    if (props.employeeId === currentAdmin?.id || checkInExamSite)
      key = 'your_style';
    return (
      <Box className="result-exam-active flex items-center bg-[#EFF8FF] px-2 py-1">
        <DotIcon className="mt-[1px]" />
        <p className="ml-2 text-[13px] font-[500] !leading-4 text-[#175CD3]">
          {t(`chart_container.thinking_style.${key}`)}
        </p>
      </Box>
    );
  };

  const renderDataList = (item: any) => {
    const isActive = item.id === props.value;
    return (
      <ContentStyled
        className={cn(
          isActive && '!border-[#75BAEC] bg-[#E5F3FB]',
          'content-items sizing-border mb-[20px] px-[20px] py-3',
        )}
        key={item.id}
      >
        <Box className="flex items-center gap-3">
          <p className="content-items-title py-3 text-[16px] font-bold text-[#344054]">
            {item.text}. {item.feature}
          </p>
          {isActive && renderResultExam()}
        </Box>
        <Box className="mt-3">{item.explanation}</Box>
        <Box className="content-list mt-4">
          <Box className="content-item-text">
            <Grid container spacing={{ xs: 2, md: 3, xl: 4 }}>
              <Grid size={{ xs: 12, md: 6, xl: 6 }}>
                {renderStrongWeaknessContent('strong_label', item.strong)}
              </Grid>
              <Grid size={{ xs: 12, md: 6, xl: 6 }}>
                {renderStrongWeaknessContent(
                  'weaknesses_label',
                  item.weaknesses,
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ContentStyled>
    );
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
          <BlockTitle>
            <Box className="pb-3 text-[20px] font-bold text-[#344054]">
              {t('chart_container.thinking_style.title')}
            </Box>
            <Box className="text-[#667085]">
              {t('chart_container.thinking_style.description')}
            </Box>
          </BlockTitle>
          <Box className="content pt-[30px]">
            {THINKING_STYLE_OPTIONS.map((item: any) => renderDataList(item))}
          </Box>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
