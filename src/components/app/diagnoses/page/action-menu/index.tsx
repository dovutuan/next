'use client';
import React from 'react';
import PopupMenu, { PopupMenuItem } from '@/components/common/popup-menu';
import DotsVerticalOutlineIcon from '/public/assets/icons/dot-vertical-outline.svg';
import useMenuOptions from '@/components/app/companies/[id]/action-menu/useMenuOptions';
import { useRouter } from 'next/navigation';
import { PopupMenuActions } from '@/types/Common.type';
import PATH_NAMES from '@/constants/PathNames';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { ModalNames } from '@/types/ModalNames.type';
import useApi from '@/services/useApi';
import { OperationIds } from '@/types/OperationIds.type';
import { getDiagnosisList } from '@/services/company';
import { useAppSelector } from '@/store/hooks';
import { SEARCH_PARAMS } from '@/constants/Common';
import useGetFullPath from '@/hooks/useGetFullPath';

type ActionMenuProps = {
  companyId: number;
};

export default function ActionMenu(props: Readonly<ActionMenuProps>) {
  const router = useRouter();
  const options = useMenuOptions();
  const { openModal } = useHandleAppModule();
  const getDiagnosisRequest = useAppSelector(
    (state) => state.req?.[OperationIds.GET_DIAGNOSES],
  );
  const { call } = useApi({
    operationId: OperationIds.GET_DIAGNOSES,
    request: getDiagnosisList,
  });
  const fullpath = useGetFullPath();

  const onClickPopupMenu = (item: PopupMenuItem) => {
    switch (item.additionalData?.action) {
      case PopupMenuActions.To_DIAGNOSIS_LIST:
        call(getDiagnosisRequest);
        break;
      case PopupMenuActions.EDIT:
        router.push(
          PATH_NAMES.COMPANY_EDIT(props.companyId, {
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
