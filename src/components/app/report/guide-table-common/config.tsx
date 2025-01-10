import BaseParagraph from '@/components/common/paragraph';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import GuideIcon from '/public/assets/icons/guide-tooltip-info-2.svg';
import MinusIcon from '/public/assets/icons/minus-guide.svg';
import PlusIcon from '/public/assets/icons/plus-guide.svg';
import { GuideTableCommonRecord } from '@/types/Report.type';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import cn from '@/utils/classNames';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip arrow placement="top" {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.shadows[2],
    backgroundColor: 'rgba(12, 17, 29, 0.8)',
    fontSize: 12,
    lineHeight: 1.6,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(12, 17, 29, 0.8)',
  },
}));

const useTableHeadConfigs = (classColumnThree?: string) => {
  const { t } = useTranslation('report');

  const TABLE_HEAD = (displayLowDeviation: boolean) => (
    <Box className="w-100% flex border-b border-solid border-clr-border-secondary">
      <Box className="flex max-w-[132px] flex-1 items-center bg-clr-bg-secondary py-[13px] pl-[24px]">
        <BaseParagraph size="xs" color="tertiary" weight="semibold">
          {t('chart_container.table_head.item')}
        </BaseParagraph>
      </Box>
      <Box className="flex max-w-[84px] flex-1 items-center bg-clr-bg-secondary py-[13px] pl-[24px]">
        <BaseParagraph size="xs" color="tertiary" weight="semibold">
          {t('chart_container.table_head.deviation')}
        </BaseParagraph>
      </Box>
      <Box
        className={cn(
          'flex flex-1 items-center bg-clr-bg-secondary py-[13px] pl-[24px]',
          classColumnThree,
        )}
      >
        <BaseParagraph size="xs" color="tertiary" weight="semibold">
          {t('chart_container.table_head.explanation')}
        </BaseParagraph>
      </Box>
      <Box className="min-w-[40px] max-w-[40px] flex-1 bg-clr-bg-secondary py-[13px]"></Box>
      <Box className="flex flex-1 items-center gap-[4px] bg-clr-bg-secondary py-[13px] pl-[24px]">
        <BaseParagraph size="xs" color="tertiary" weight="semibold">
          {t('chart_container.table_head.highDeviation')}
        </BaseParagraph>{' '}
        <LightTooltip
          title={
            <Box className="text-clr-bg-white whitespace-pre-line">
              {t('chart_container.guide_tooltip')}
            </Box>
          }
        >
          <Box>
            <GuideIcon className="hover:[&>g>path]:stroke-clr-fg-quinary-hover cursor-pointer" />
          </Box>
        </LightTooltip>
      </Box>
      {displayLowDeviation && (
        <Box className="flex flex-1 items-center gap-[4px] bg-clr-bg-secondary py-[13px] pl-[24px]">
          <BaseParagraph size="xs" color="tertiary" weight="semibold">
            {t('chart_container.table_head.lowDeviation')}
          </BaseParagraph>{' '}
          <LightTooltip
            title={
              <Box className="text-clr-bg-white whitespace-pre-line">
                {t('chart_container.guide_tooltip')}
              </Box>
            }
          >
            <Box>
              <GuideIcon className="hover:[&>g>path]:stroke-clr-fg-quinary-hover cursor-pointer" />
            </Box>
          </LightTooltip>
        </Box>
      )}
    </Box>
  );

  const TABLE_CONTENT = (data: GuideTableCommonRecord[]) =>
    data?.map((item) => (
      <Box
        key={item?.id}
        className="w-100% flex border-b border-solid border-clr-border-secondary"
      >
        <Box className="flex max-w-[132px] flex-1 items-center py-[36px] pl-[24px]">
          <BaseParagraph size="sm" color="tertiary" weight="semibold">
            {item?.item}
          </BaseParagraph>
        </Box>
        <Box className="flex max-w-[84px] flex-1 items-center py-[36px] pl-[24px]">
          <Box className="border-clr-border-ultility-success text-clr-txt-utility-success-700 w-fit rounded-full border border-solid bg-clr-bg-success-primary px-[8px] py-[2px] font-medium leading-[18px]">
            {item?.deviation}
          </Box>
        </Box>
        <Box
          className={cn('flex flex-1 items-center py-[36px]', classColumnThree)}
        >
          <BaseParagraph
            size="sm"
            color="tertiary"
            weight="semibold"
            className="px-[24px]"
          >
            {item?.explanation}
          </BaseParagraph>
        </Box>
        <Box className="flex min-w-[40px] max-w-[40px] flex-1 flex-col">
          <Box className="flex flex-1 items-center justify-center bg-clr-bg-secondary">
            <PlusIcon />
          </Box>
          <Box className="flex flex-1 items-center justify-center bg-clr-bg-secondary">
            <MinusIcon />
          </Box>
        </Box>
        <Box className="flex flex-1 flex-col">
          <Box
            className="flex flex-1 items-center justify-start border-b border-solid border-clr-border-secondary px-[24px] py-[16px]"
            sx={{
              backgroundColor:
                item?.deviation >= 50
                  ? STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY
                  : '',
            }}
          >
            <BaseParagraph size="sm" color="tertiary" weight="semibold">
              {item?.plusHighDeviation}
            </BaseParagraph>
          </Box>
          <Box
            className="flex flex-1 items-center justify-start px-[24px] py-[16px]"
            sx={{
              backgroundColor:
                item?.deviation >= 50
                  ? STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY
                  : '',
            }}
          >
            <BaseParagraph size="sm" color="tertiary" weight="semibold">
              {item?.minusHighDeviation}
            </BaseParagraph>
          </Box>
        </Box>
        {item?.plusHighDeviation && item?.minusLowDeviation && (
          <Box className="flex flex-1 flex-col">
            <Box
              className="flex flex-1 items-center justify-start border-b border-solid border-clr-border-secondary px-[24px] py-[16px]"
              sx={{
                backgroundColor:
                  item.deviation < 50
                    ? STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY
                    : '',
              }}
            >
              <BaseParagraph size="sm" color="tertiary" weight="semibold">
                {item.plusLowDeviation}
              </BaseParagraph>
            </Box>
            <Box
              className="flex flex-1 items-center justify-start px-[24px] py-[16px]"
              sx={{
                backgroundColor:
                  item.deviation < 50
                    ? STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY
                    : '',
              }}
            >
              <BaseParagraph size="sm" color="tertiary" weight="semibold">
                {item.minusLowDeviation}
              </BaseParagraph>
            </Box>
          </Box>
        )}
      </Box>
    ));

  return {
    TABLE_HEAD,
    TABLE_CONTENT,
  };
};

export { useTableHeadConfigs };
