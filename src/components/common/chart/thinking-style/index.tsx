'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import AnchorElTooltips from '@/components/common/virtual-elm-tooltip';
import cn from '@/utils/classNames';
import { AnimationBox, BoxContent, ThinkingStyleChartContainer } from './style';

interface ThinkingStyleChartProps {
  value: number;
}

const ThinkingStyleChart = (props: ThinkingStyleChartProps) => {
  const { t } = useTranslation('report');
  const [isShow, setIsShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsShow(true);
  }, []);

  const renderStrongWeaknessContent = (label?: any, content?: string) => (
    <Box className="mt-4">
      <p className={`${label} mb-2`}>
        {t(`chart_container.thinking_style.${label}`)}
      </p>
      <p className="strong-content grid-item-content text-[#344054]">
        {content}
      </p>
    </Box>
  );

  if (!props.value) return null;

  return (
    <ThinkingStyleChartContainer className="h-[90%] p-4">
      <AnimationBox isshow={isShow.toString()} className="h-full">
        <Box className="chart-title mb-4 text-[1.3em] font-bold">
          {t(`chart_container.thinking_style.chart_data.${props.value}.text`)}.{' '}
          {t(
            `chart_container.thinking_style.chart_data.${props.value}.feature`,
          )}
        </Box>
        <Box className="h-[90%] content-center">
          <Grid container className="tab-content-grid-container flex">
            <Grid className="thinkingStyleChartContainer resize-width py-2 text-center md:pr-3">
              <Box className="first-items direction-label">
                {t('chart_container.thinking_style.label_items.1')}
              </Box>
              <Box className="chart-items m-x-auto flex w-full items-center justify-center gap-3 p-3">
                <Box className="lengthwise-label whitespace-pre-line">
                  {t('chart_container.thinking_style.label_items.3')}
                </Box>
                <BoxContent
                  className={`chart-content relative flex w-full flex-wrap`}
                >
                  <Box
                    className={cn(
                      props.value === 4 && 'active',
                      'chart-content-items children-1 h-fit w-1/2 rounded-tl-2xl border-l-2 border-t-2',
                    )}
                  >
                    <AnchorElTooltips
                      title={t(
                        'chart_container.thinking_style.chart_data.4.explanation',
                      )}
                    >
                      <Box className="items-content relative w-full">
                        <p className="items-content-text absolute left-1/2 top-1/2 font-[600] text-[#344054]">
                          {t(
                            'chart_container.thinking_style.chart_data.4.name',
                          )}
                        </p>
                      </Box>
                    </AnchorElTooltips>
                  </Box>
                  <Box
                    className={cn(
                      props.value === 1 && 'active',
                      'chart-content-items children-2 h-fit w-1/2 rounded-tr-2xl border-r-2 border-t-2',
                    )}
                  >
                    <AnchorElTooltips
                      title={t(
                        'chart_container.thinking_style.chart_data.1.explanation',
                      )}
                    >
                      <Box className="items-content relative w-full">
                        <p className="items-content-text absolute left-1/2 top-1/2 font-[600] text-[#344054]">
                          {t(
                            'chart_container.thinking_style.chart_data.1.name',
                          )}
                        </p>
                      </Box>
                    </AnchorElTooltips>
                  </Box>
                  <Box
                    className={cn(
                      props.value === 3 && 'active',
                      'chart-content-items children-3 h-fit w-1/2 rounded-bl-2xl border-b-2 border-l-2',
                    )}
                  >
                    <AnchorElTooltips
                      title={t(
                        'chart_container.thinking_style.chart_data.3.explanation',
                      )}
                    >
                      <Box className="items-content relative w-full">
                        <p className="items-content-text absolute left-1/2 top-1/2 font-[600] text-[#344054]">
                          {t(
                            'chart_container.thinking_style.chart_data.3.name',
                          )}
                        </p>
                      </Box>
                    </AnchorElTooltips>
                  </Box>
                  <Box
                    className={cn(
                      props.value === 2 && 'active',
                      'chart-content-items children-4 relative h-fit w-1/2 rounded-br-2xl border-b-2 border-r-2',
                    )}
                  >
                    <AnchorElTooltips
                      title={t(
                        'chart_container.thinking_style.chart_data.2.explanation',
                      )}
                    >
                      <Box className="items-content relative w-full">
                        <p className="items-content-text absolute left-1/2 top-1/2 font-[600] text-[#344054]">
                          {t(
                            'chart_container.thinking_style.chart_data.2.name',
                          )}
                        </p>
                      </Box>
                    </AnchorElTooltips>
                  </Box>
                  <Box
                    className={cn(
                      props.value === 5 && 'active',
                      'children-5 chart-content-items chart-content-items-middle absolute left-1/2 top-1/2 z-20 w-1/3 rounded-xl border-2',
                    )}
                  >
                    <AnchorElTooltips
                      title={t(
                        'chart_container.thinking_style.chart_data.5.explanation',
                      )}
                    >
                      <Box className="items-content relative">
                        <p className="items-content-text absolute left-1/2 top-1/2 font-[600] text-[#344054]">
                          {t(
                            'chart_container.thinking_style.chart_data.5.name',
                          )}
                        </p>
                      </Box>
                    </AnchorElTooltips>
                  </Box>
                  <Box className="chart-content-items chart-content-items-middle absolute left-1/2 top-1/2 z-10 w-1/3 rounded-xl bg-white">
                    <Box className="items-content relative"></Box>
                  </Box>
                  <Box className="vector vectorY absolute left-1/2 h-full w-[2px]">
                    <Box className="content h-full"></Box>
                  </Box>
                  <Box className="vector vectorX absolute top-1/2 h-[2px] w-full">
                    <Box className="content h-full"></Box>
                  </Box>
                </BoxContent>
                <Box className="lengthwise-label whitespace-pre-line">
                  {t('chart_container.thinking_style.label_items.2')}
                </Box>
              </Box>
              <Box className="last-items direction-label">
                {t('chart_container.thinking_style.label_items.4')}
              </Box>
            </Grid>
            <Grid className="tab-content-grid-item-text resize-width">
              {renderStrongWeaknessContent(
                'strong_label',
                t(
                  `chart_container.thinking_style.chart_data.${props.value}.strong`,
                ),
              )}
              {renderStrongWeaknessContent(
                'weaknesses_label',
                t(
                  `chart_container.thinking_style.chart_data.${props.value}.weaknesses`,
                ),
              )}
            </Grid>
          </Grid>
        </Box>
      </AnimationBox>
    </ThinkingStyleChartContainer>
  );
};

export default React.memo(ThinkingStyleChart);
