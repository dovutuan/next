'use client';
import { Box } from '@mui/material';
import * as React from 'react';
import MonitorIcon from '/public/assets/icons/monitor.svg';
import { useTranslation } from 'react-i18next';
import ArrowDownIcon from '/public/assets/icons/arrow-down.svg';
import LogoutIcon from '/public/assets/icons/logout.svg';
import PopupMenu, { PopupMenuItem } from '@/components/common/popup-menu';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { OperationIds } from '@/types/OperationIds.type';
import useLogout from '@/hooks/useLogout';
import { PopupMenuActions } from '@/types/Common.type';

export default function MainLayoutHeader() {
  const { t } = useTranslation('layout');
  const currentAdmin = useAppSelector((state) =>
    getResponseData(state, OperationIds.CURRENT_ADMIN),
  );
  const { logout } = useLogout();

  const onClickPopupMenu = (item: PopupMenuItem) => {
    if (item.additionalData?.action === PopupMenuActions.LOGOUT) {
      logout();
    }
  };

  return (
    <Box className="flex h-[72px] items-center border-b border-solid border-clr-border-secondary px-[24px] py-[26px]">
      <MonitorIcon className="mr-[8px]" />
      <Box
        component="span"
        className="font-semibold text-clr-txt-placeholder-subttl"
      >
        {t('secretariat_management_screen')}
      </Box>
      <Box className="ml-auto">
        <PopupMenu
          onClickItem={onClickPopupMenu}
          items={[
            {
              icon: LogoutIcon,
              label: t('common:popup_menu.logout'),
              additionalData: {
                action: PopupMenuActions.LOGOUT,
              },
            },
          ]}
          toggleElement={
            <p className="flex cursor-pointer flex-row items-center gap-[4px]">
              <span className="font-semibold leading-[20px] text-clr-txt-secondary">
                {currentAdmin?.name || ''}
              </span>
              <ArrowDownIcon />
            </p>
          }
        />
      </Box>
    </Box>
  );
}
