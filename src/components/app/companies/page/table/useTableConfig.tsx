'use client';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import DotsVerticalIcon from '/public/assets/icons/dots-vertical.svg';
import PopupMenu, { PopupMenuItem } from '@/components/common/popup-menu';
import ListIcon from '/public/assets/icons/list.svg';
import ExitIcon from '/public/assets/icons/exit.svg';
import PencilIcon from '/public/assets/icons/pencil.svg';
import { useTranslation } from 'react-i18next';
import { PopupMenuActions } from '@/types/Common.type';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PATH_NAMES from '@/constants/PathNames';
import { SEARCH_PARAMS } from '@/constants/Common';
import useGetFullPath from '@/hooks/useGetFullPath';

const useTableHeader = () => {
  const { t } = useTranslation(['company-list', 'common']);
  const router = useRouter();
  const fullpath = useGetFullPath();

  const onClickPopupMenu = (data: PopupMenuItem) => {
    switch (data.additionalData?.action) {
      case PopupMenuActions.EDIT:
        router.push(
          PATH_NAMES.COMPANY_EDIT(data.additionalData?.rowData.id, {
            [SEARCH_PARAMS.BACK_LINK]: fullpath,
          }),
        );
        break;
      case PopupMenuActions.To_DIAGNOSIS_LIST:
        router.push(
          PATH_NAMES.DIAGNOSIS_LIST({
            [SEARCH_PARAMS.COMPANY]: data.additionalData?.rowData.id,
            [SEARCH_PARAMS.BACK_LINK]: fullpath,
          }),
        );
        break;
      default:
        break;
    }
  };

  const config: GridColDef[] = [
    {
      // 企業ID
      field: 'id',
      headerName: t('company-list:table_header.company_id'),
      minWidth: 100,
      flex: 1,
    },
    {
      // 企業名
      field: 'name',
      headerName: t('company-list:table_header.company_name'),
      minWidth: 250,
      flex: 3.5,
      renderCell: (params) => {
        return (
          <Link
            href={PATH_NAMES.COMPANY_DETAIL(params.row.id, {
              [SEARCH_PARAMS.BACK_LINK]: fullpath,
            })}
            className="cursor-pointer text-clr-txt-brand-secondary"
          >
            {params.row.name}
          </Link>
        );
      },
    },
    {
      // 診断数
      field: 'diagnoses_count',
      headerName: t('company-list:table_header.diagnoses_count'),
      minWidth: 100,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      // 最終受検日時
      field: 'last_diagnosed_at',
      headerName: t('company-list:table_header.last_diagnosed_at'),
      minWidth: 170,
      flex: 3,
    },
    {
      // 登録日時
      field: 'created_at',
      headerName: t('company-list:table_header.created_at'),
      minWidth: 170,
      flex: 3,
    },
    {
      // actions
      field: '',
      minWidth: 85,
      flex: 0.5,
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <PopupMenu
            onClickItem={onClickPopupMenu}
            items={[
              {
                icon: ListIcon,
                label: t('common:popup_menu.diagnosis_list'),
                additionalData: {
                  action: PopupMenuActions.To_DIAGNOSIS_LIST,
                  rowData: params.row,
                },
              },
              {
                icon: ExitIcon,
                label: t('common:popup_menu.login'),
                additionalData: {
                  action: PopupMenuActions.LOGIN,
                  rowData: params.row,
                },
              },
              {
                icon: PencilIcon,
                label: t('common:popup_menu.edit'),
                additionalData: {
                  action: PopupMenuActions.EDIT,
                  rowData: params.row,
                },
              },
            ]}
            toggleElement={<DotsVerticalIcon />}
          />
        );
      },
    },
  ];

  return config;
};

export default useTableHeader;
