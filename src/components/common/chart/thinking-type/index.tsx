'use client';
import React from 'react';
import Tab from '@mui/material/Tab';
import { useConstantTrans } from '@/constants/Report';
import { ThinkingChartAnimalType, ThinkingChartTab } from '@/types/Report.type';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import {
  ImageAnimation,
  TabContent,
  TabListStyled,
  TextAnimation,
} from './style';

interface ThinkingTypeChartProps {
  value: number;
  handleChange?: (data: any) => void;
  defaultTarget: number;
}

const ThinkingTypeChart = (props: ThinkingTypeChartProps) => {
  const { t } = useTranslation('report');
  const [value, setValue] = React.useState<number>(props.defaultTarget);
  const { THINKING_TYPE_TABS, THINKING_TYPE_OPTIONS } = useConstantTrans();
  const data = THINKING_TYPE_OPTIONS.find((item) => item.id === props.value);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props.handleChange?.(newValue);
  };

  const renderImageUrl = () => {
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
    return imageUrls[props.value] || imageUrls.default;
  };

  const renderTabContent = (options: any) => {
    const renderStrongWeaknessContent = (
      label: string,
      content: string,
      delay: number,
    ) => (
      <TextAnimation className="mb-4" delay={delay * 0.1}>
        <p className={`${label} mb-2`}>
          {t(`chart_container.thinking_type.${label}`)}
        </p>
        <p className="strong-content grid-item-content text-[#344054]">
          {content}
        </p>
      </TextAnimation>
    );

    return (
      <TabContent className="mt-3" key={`${value}_value`}>
        <p className="tab-content-description py-3">{options?.groupName}</p>
        <Box className="tab-content-title text-[1.3em] font-bold">
          {`${props.value}. ${options?.feature}`}
        </Box>
        <Box className="mt-3 content-center">
          <Grid container className="tab-content-grid-container mt-3">
            <Grid className="tab-content-grid-item-image w40 py-2 pr-3 text-center">
              <ImageAnimation>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="tab-content-image inline w-[200px]"
                  alt=""
                  src={`/assets/image/${renderImageUrl()}.png`}
                />
              </ImageAnimation>

              <Box className="mx-auto mt-2 w-fit rounded-[12px] border border-solid border-[#B2DDFF] bg-[#EFF8FF] px-[10px] py-[2px] text-[#175CD3]">
                {options?.name}
              </Box>
            </Grid>
            <Grid className="tab-content-grid-item-text w60">
              {renderStrongWeaknessContent('strong_label', options?.strong, 0)}
              {renderStrongWeaknessContent(
                'weaknesses_label',
                options?.weaknesses,
                1,
              )}
            </Grid>
          </Grid>
        </Box>
      </TabContent>
    );
  };

  const renderLeaderStyleContent = (options: any) => {
    const renderLeaderContent = (
      label: string,
      content: string,
      delay: number,
    ) => (
      <TextAnimation className="mt-4" delay={delay * 0.1}>
        <p className="leader-style-content-label mb-2">
          {t(`chart_container.thinking_type.${label}`)}
        </p>
        <p className="weaknesses-content grid-item-content text-[#344054]">
          {content}
        </p>
      </TextAnimation>
    );

    return (
      <TabContent className="mt-3" key={`${value}_value`}>
        <p className="tab-content-description py-3">{options?.groupName}</p>
        <Box className="tab-content-title text-[1.3em] font-bold">
          {`${options?.leader_style}`}
        </Box>
        <Grid container className="tab-content-grid-container mt-3">
          <Grid className="tab-content-grid-item-image w40 py-2 pr-3 text-center">
            <ImageAnimation>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="tab-content-image inline w-[200px]"
                alt=""
                src={`/assets/image/${renderImageUrl()}.png`}
              />
            </ImageAnimation>

            <Box className="mx-auto mt-2 w-fit rounded-[12px] border border-solid border-[#B2DDFF] bg-[#EFF8FF] px-[10px] py-[2px] text-[#175CD3]">
              {options?.name}
            </Box>
          </Grid>
          <Grid className="tab-content-grid-item-text w60">
            {renderLeaderContent(
              'relationship_label',
              options?.relationship,
              0,
            )}
            {renderLeaderContent('directive_label', options?.directive, 1)}
            {renderLeaderContent('note_label', options?.note, 2)}
          </Grid>
        </Grid>
      </TabContent>
    );
  };

  if (!props.value) return null;

  return (
    <Box className="overflow-hidden px-4 pb-4">
      <TabListStyled
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="fullWidth"
      >
        {THINKING_TYPE_TABS.map(({ value, label }) => (
          <Tab value={value} label={label} key={label} />
        ))}
      </TabListStyled>
      {value === ThinkingChartTab.feature
        ? renderTabContent(data)
        : renderLeaderStyleContent(data)}
    </Box>
  );
};

export default React.memo(ThinkingTypeChart);
