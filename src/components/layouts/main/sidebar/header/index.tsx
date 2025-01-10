import { Box, IconButton } from '@mui/material';
import * as React from 'react';
import ToggleIcon from '/public/assets/icons/toggle.svg';
import LogoIcon from '/public/assets/icons/logo.svg';
import LogoDotsIcon from '/public/assets/icons/logo-dots.svg';
import cn from '@/utils/classNames';

export interface IAppProps {
  onToggle: () => void;
  isOpen: boolean;
}

export default function AppDrawerHeader(props: Readonly<IAppProps>) {
  const renderLogo = () => {
    return props.isOpen ? (
      <LogoIcon className="min-w-[12px]" />
    ) : (
      <LogoDotsIcon className="min-w-[12px]" />
    );
  };
  return (
    <Box className={cn('p-[24px]', !props.isOpen && 'px-[16px]')}>
      <Box className="flex flex-row border-b border-solid border-clr-fg-quarterary pb-[16px]">
        {renderLogo()}
        <IconButton
          sx={{ marginLeft: 'auto', height: 32, minWidth: 24 }}
          onClick={props.onToggle}
        >
          <ToggleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
