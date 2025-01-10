'use client';
import React from 'react';
import PopupMenu, { PopupMenuItem } from '@/components/common/popup-menu';
import { PopupMenuActions } from '@/types/Common.type';
import { ModalNames } from '@/types/ModalNames.type';
import { useRouter } from 'next/navigation';
import DotsVerticalOutlineIcon from '/public/assets/icons/dot-vertical-outline.svg';
import PATH_NAMES from '@/constants/PathNames';
import useMenuOptions from './useMenuOptions';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { SEARCH_PARAMS } from '@/constants/Common';
import useGetFullPath from '@/hooks/useGetFullPath';

type ActionMenuProps = {
  companyId: number;
};

export default function ActionMenu(props: Readonly<ActionMenuProps>) {
  const router = useRouter();
  const options = useMenuOptions();
  const { openModal } = useHandleAppModule();
  const fullpath = useGetFullPath();

  const onClickPopupMenu = (item: PopupMenuItem) => {
    switch (item.additionalData?.action) {
      case PopupMenuActions.EDIT:
        router.push(
          PATH_NAMES.COMPANY_EDIT(props.companyId, {
            [SEARCH_PARAMS.BACK_LINK]: fullpath,
          }),
        );
        break;
      case PopupMenuActions.To_DIAGNOSIS_LIST:
        router.push(
          PATH_NAMES.DIAGNOSIS_LIST({
            [SEARCH_PARAMS.COMPANY]: props.companyId,
            [SEARCH_PARAMS.BACK_LINK]: fullpath,
          }),
        );
        break;
      case PopupMenuActions.REMOVE:
        openModal(ModalNames.DELETE_COMPANY);
        break;
      default:
        break;
    }
  };
  return (
    <PopupMenu
      onClickItem={onClickPopupMenu}
      items={options}
      toggleElement={<DotsVerticalOutlineIcon />}
    />
  );
}
