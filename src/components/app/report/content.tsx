'use client';
import { ModalNames } from '@/types/ModalNames.type';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Chart10 from './chart-10';
import Chart11 from './chart-11';
import Chart13 from './chart-13';
import Chart3 from './chart-3';
import Chart4 from './chart-4';
import Chart5 from './chart-5';
import Chart6 from './chart-6';
import Chart7 from './chart-7';
import Chart9 from './chart-9';
import ThinkingStyleChartContainer from './thinking-style';
import ThinkingTypeChartContainer from './thinking-type';
import WorkMotivation from './work-motivation';

const GridContent = styled(Box)({
  border: '1px solid #D0D5DD',
  height: '100%',
  ['& .chart-item-title']: {
    fontSize: '1.4em',
    fontWeight: '600',
    padding: '15px',
    borderBottom: '1px solid #D0D5DD',
    cursor: 'pointer',
  },
  ['& .chart-item-content']: {
    padding: '21px 16px 21px 16px',
  },
});

const TitleStyled = styled('div')({
  textAlign: 'center',
  padding: '20px 0',
  fontWeight: 'bold',
  fontSize: '2em',
});

interface ReportContainerProps {
  pageData?: any;
  handleShowModal: (modalNames: ModalNames) => void;
  handleCloseModal: (modalNames: ModalNames) => void;
}

const ReportContainer = (props: ReportContainerProps) => {
  const { t } = useTranslation('report');

  return (
    <Box className="report-container" key={props.pageData}>
      <Box>
        <TitleStyled className="mb-4">
          {t('chart_container.behavioral_title')}
        </TitleStyled>
        <Grid container spacing={3} className="flex items-stretch">
          <Grid
            size={{ xs: 12, md: 12, lg: 6 }}
            sx={{
              minHeight: '450px',
            }}
          >
            <GridContent className="relative rounded-2xl">
              <ThinkingTypeChartContainer
                value={props.pageData?.c1_4}
                employeeId={props.pageData?.employee?.id}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
          {/* Chart 2 */}
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="relative rounded-2xl">
              <ThinkingStyleChartContainer
                value={props.pageData?.c1_1}
                employeeId={props.pageData?.employee?.id}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
        </Grid>
      </Box>
      <Box className="mt-[35px]">
        <Grid container spacing={3} className="flex items-stretch">
          {/* Chart 3 */}
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart3
                data={[
                  Math.floor(props.pageData?.c1_3_1),
                  Math.floor(props.pageData?.c1_3_2),
                  Math.floor(props.pageData?.c1_3_3),
                  Math.floor(props.pageData?.c1_3_4),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
          {/* Chart 4 */}
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart4
                data={[
                  Math.floor(props.pageData?.c1_2_1),
                  Math.floor(props.pageData?.c1_2_2),
                  Math.floor(props.pageData?.c1_2_3),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <TitleStyled className="mb-2 mt-[35px]">
          {t('chart_container.characteristic_title')}
        </TitleStyled>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart5
                data={[
                  Math.floor(props.pageData?.c2_1_1),
                  Math.floor(props.pageData?.c2_1_2),
                  Math.floor(props.pageData?.c2_1_3),
                  Math.floor(props.pageData?.c2_1_4),
                  Math.floor(props.pageData?.c2_1_5),
                  Math.floor(props.pageData?.c2_1_6),
                  Math.floor(props.pageData?.c2_1_7),
                  Math.floor(props.pageData?.c2_1_8),
                  Math.floor(props.pageData?.c2_1_9),
                  Math.floor(props.pageData?.c2_1_10),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart6
                data={[
                  Math.floor(props.pageData?.c2_2_1),
                  Math.floor(props.pageData?.c2_2_2),
                  Math.floor(props.pageData?.c2_2_3),
                  Math.floor(props.pageData?.c2_2_4),
                  Math.floor(props.pageData?.c2_2_5),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart7
                data={[
                  Math.floor(props.pageData?.c2_3_1),
                  Math.floor(props.pageData?.c2_3_2),
                  Math.floor(props.pageData?.c2_3_3),
                  Math.floor(props.pageData?.c2_3_4),
                  Math.floor(props.pageData?.c2_3_5),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Box className="chart-item-title divide-y divide-slate-200 p-3">
                {t('chart_container.management_potential.title')}
              </Box>
              <Box className="chart-item-content">{/* To do */}</Box>
            </GridContent>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <TitleStyled className="mb-2 mt-[35px]">
          {t('chart_container.acquired_title')}
        </TitleStyled>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart9
                data={[
                  Math.floor(props.pageData?.c3_1_1),
                  Math.floor(props.pageData?.c3_1_2),
                  Math.floor(props.pageData?.c3_1_3),
                  Math.floor(props.pageData?.c3_1_4),
                  Math.floor(props.pageData?.c3_1_5),
                  Math.floor(props.pageData?.c3_1_6),
                  Math.floor(props.pageData?.c3_1_7),
                  Math.floor(props.pageData?.c3_1_8),
                  Math.floor(props.pageData?.c3_1_9),
                  Math.floor(props.pageData?.c3_1_10),
                  Math.floor(props.pageData?.c3_1_11),
                  Math.floor(props.pageData?.c3_1_12),
                  Math.floor(props.pageData?.c3_1_13),
                  Math.floor(props.pageData?.c3_1_14),
                  Math.floor(props.pageData?.c3_1_15),
                  Math.floor(props.pageData?.c3_1_16),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart10
                data={[
                  Math.floor(props.pageData?.c3_2_1),
                  Math.floor(props.pageData?.c3_2_2),
                  Math.floor(props.pageData?.c3_2_3),
                  Math.floor(props.pageData?.c3_2_4),
                  Math.floor(props.pageData?.c3_2_5),
                  Math.floor(props.pageData?.c3_2_6),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <Chart11
                data={[
                  Math.floor(props.pageData?.c3_3_1),
                  Math.floor(props.pageData?.c3_3_2),
                  Math.floor(props.pageData?.c3_3_3),
                  Math.floor(props.pageData?.c3_3_4),
                  Math.floor(props.pageData?.c3_3_5),
                  Math.floor(props.pageData?.c3_3_6),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <GridContent className="rounded-2xl">
              <WorkMotivation
                data={props.pageData}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <TitleStyled className="mb-2 mt-[35px]">
          {t('chart_container.trait_title')}
        </TitleStyled>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <GridContent className="rounded-2xl">
              <Chart13
                data={[
                  Math.floor(props.pageData?.c4_1_1),
                  Math.floor(props.pageData?.c4_1_2),
                  Math.floor(props.pageData?.c4_1_3),
                  Math.floor(props.pageData?.c4_1_4),
                  Math.floor(props.pageData?.c4_1_5),
                ]}
                onShowModal={props.handleShowModal}
                onCloseModal={props.handleCloseModal}
              />
            </GridContent>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="mt-[26px]">
          <Grid size={{ xs: 12 }}>
            <GridContent className="rounded-2xl">
              <Box className="chart-item-title divide-y divide-slate-200 p-3">
                {t('chart_container.quality.title')}
              </Box>
              <Box className="chart-item-content min-h-[338px]"></Box>
            </GridContent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default React.memo(ReportContainer);
