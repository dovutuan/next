'use client';
import React from 'react';
import { ModalContent } from '@/components/common/base-modal-migrate-chart';
import { useConstantTrans } from '@/constants/Report';
import { ThinkingChartAnimalType, ThinkingChartTab } from '@/types/Report.type';
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
  tabFocus: ThinkingChartTab;
  employeeId: number;
};

const GuideModalContent = (props: ModalProps) => {
  const { t } = useTranslation('report');
  const pathName = usePathname();
  const labelList = [1, 4, 8];
  const isFeature = props.tabFocus === ThinkingChartTab.feature;
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const { currentAdmin } = useGetBasicInfo();
  const { THINKING_TYPE_OPTIONS, LEADER_SHIP_OPTIONS } = useConstantTrans();
  const renderImageUrl = (id: number) => {
    const imageUrls: any = {
      [ThinkingChartAnimalType.fox]: 'fox',
      [ThinkingChartAnimalType.raccoon]: 'raccoon',
      [ThinkingChartAnimalType.sheep]: 'sheep',
      [ThinkingChartAnimalType.tiger]: 'tiger',
      [ThinkingChartAnimalType.seal]: 'seal',
      [ThinkingChartAnimalType.lion]: 'lion',
      [ThinkingChartAnimalType.horse]: 'horse',
      default: 'monkey',
    };
    return imageUrls[id] || imageUrls.default;
  };

  const valueMapping = React.useMemo(() => {
    if (!isFeature) {
      const mapping: Record<number, number[]> = {
        1: [1, 4, 6],
        2: [2, 3, 6],
        3: [2, 4, 6],
        4: [1, 3, 6],
        5: [2, 3, 5],
        6: [1, 3, 5],
        7: [1, 4, 5],
        8: [2, 4, 5],
      };
      return mapping[props.value] || {};
    }
  }, [props.value, isFeature]);

  const checkInExamSite = React.useMemo(() => {
    const rgx = /^\/exam-results\/\d+\/report$/;
    return rgx.exec(pathName);
  }, []);

  const renderResultExam = () => {
    let key = 'personal_style';
    if (props.employeeId === currentAdmin?.id || checkInExamSite)
      key = 'your_style';
    const tabKey = isFeature ? 'feature' : 'leader_style';
    return (
      <Box className="result-exam-active flex items-center bg-[#EFF8FF] px-2 py-1">
        <DotIcon className="mt-[1px]" />
        <p className="ml-2 text-[13px] font-[500] !leading-4 text-[#175CD3]">
          {t(`chart_container.thinking_type.tab.${tabKey}.${key}`)}
        </p>
      </Box>
    );
  };

  const renderTabName = () => {
    const key =
      props.tabFocus === ThinkingChartTab.feature ? 'feature' : 'leader_style';
    return t(`chart_container.thinking_type.tab.${key}.name`);
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

  const renderFeatureItems = (options: any) => {
    return options.map((item: any) => {
      const image = `/assets/image/${renderImageUrl(item.id)}.png`;
      const isActive = item.id === props.value;
      return (
        <Box
          key={item.id}
          className={cn(
            isActive && '!border-[#75BAEC] bg-[#E5F3FB]',
            'content-items sizing-border mb-[20px] px-[20px] py-3',
          )}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 3, xl: 2 }} className="content-center">
              <Box className="mx-auto max-w-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" />
                <p className="mx-auto mt-2 w-fit rounded-[12px] border border-solid border-[#B2DDFF] bg-[#EFF8FF] px-[10px] py-[2px] text-[12px] text-[#175CD3]">
                  {item?.name}
                </p>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 9, xl: 10 }}>
              <Box className="flex items-center gap-3">
                <p className="content-items-title py-3 text-[16px] font-bold text-[#344054]">
                  {item.id}. {item.feature}
                </p>
                {isActive && renderResultExam()}
              </Box>
              <Box className="content-item-text">
                <Grid container spacing={4}>
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
            </Grid>
          </Grid>
        </Box>
      );
    });
  };

  const renderLeaderStyleItems = (options: any) => {
    return (
      <Grid container spacing={2} className="items-stretch">
        {options.map((item: any) => {
          const isActive = valueMapping?.includes(item.id);
          return (
            <Grid
              size={{ xs: 12, md: 6, xl: 6 }}
              key={`${item.title}_leader_style`}
            >
              <Box
                className={cn(
                  isActive && '!border-[#75BAEC] bg-[#E5F3FB]',
                  'content-items h-full px-[20px] py-3',
                )}
              >
                <Box className="flex items-center gap-3">
                  <p className="content-items-title pb-3 pt-4 text-[16px] font-bold text-[#344054]">
                    {item.title}
                  </p>
                  {isActive && renderResultExam()}
                </Box>
                <Box className="content-item-text">
                  <Box className="mb-3">
                    {renderStrongWeaknessContent('strong_label', item.strong)}
                  </Box>
                  <Box>
                    {renderStrongWeaknessContent(
                      'weaknesses_label',
                      item.weaknesses,
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderDataList = (value: number, index: number) => {
    const func = isFeature ? renderFeatureItems : renderLeaderStyleItems;
    const key = 'chart_container.thinking_type';
    let groupName = t(`${key}.animal.${value}.group_name`);
    if (!isFeature) {
      groupName = [
        t(`${key}.relationship_label`),
        t(`${key}.directive_label`),
        t(`${key}.note_label`),
      ][index];
    }

    const options = (
      isFeature ? THINKING_TYPE_OPTIONS : LEADER_SHIP_OPTIONS
    ).filter((item) => item.groupName === groupName);

    return (
      <ContentStyled className="mb-[40px]" key={groupName}>
        <Box className="content-title py-3 pl-[20px] text-[16px] font-bold">
          {groupName}
        </Box>
        <Box className="content-list mt-[20px]">{func(options)}</Box>
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
      align="right"
      className="xs:w-[100%] h-[100%] rounded-none md:w-[70%] xl:w-[50%]"
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
              {t('chart_container.thinking_type.title')}
            </Box>
            <Box className="text-[#667085]">
              {t('chart_container.thinking_type.description')}
            </Box>
          </BlockTitle>
          <Box className="pt-[30px] text-[20px] font-bold text-[#344054]">
            {renderTabName()}
          </Box>
          <Box className="content pt-[30px]">
            {labelList.map((v: number, index: number) => {
              return renderDataList(v, index);
            })}
          </Box>
        </ModalContent>
      </>
    </AnimationModal>
  );
};

export default React.memo(GuideModalContent);
