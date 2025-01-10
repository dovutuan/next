import React from 'react';
import { styled } from '@mui/material/styles';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 429,
  },
});

const CustomTooltip = () => {
  const { t } = useTranslation(['reset-password']);
  const renderTooltip = () => {
    return (
      <div className="p-2">
        <p className="whitespace-pre-line text-xs font-semibold text-white">
          {t('reset-password:tooltip')}
        </p>
      </div>
    );
  };
  return (
    <CustomWidthTooltip title={renderTooltip()} placement="top">
      <div className="mb-[24px] mt-[6px] flex items-center self-end text-sm font-semibold text-clr-btn-fg-tertiary">
        <HelpOutlineRoundedIcon />
        {t('reset-password:tooltip_title')}
      </div>
    </CustomWidthTooltip>
  );
};

export default CustomTooltip;
