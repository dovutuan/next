import { SEARCH_PARAMS } from '@/constants/Common';
import PATH_NAMES from '@/constants/PathNames';
import useGetFullPath from '@/hooks/useGetFullPath';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const useTableHeader = () => {
  const { t } = useTranslation(['user-list', 'common']);
  const fullpath = useGetFullPath();

  const headers: GridColDef[] = [
    {
      // 企業ID
      field: 'id',
      headerName: t('user-list:table_header.user_id'),
      minWidth: 80,
      flex: 0.5,
    },
    {
      // 名前
      field: 'full_name',
      headerName: t('user-list:table_header.exam_taker'),
      minWidth: 180,
      flex: 3,
      renderCell: (params) => {
        return (
          <Link
            href={PATH_NAMES.USER_DETAIL(params.row.id, {
              [SEARCH_PARAMS.BACK_LINK]: fullpath,
            })}
            className="cursor-pointer text-clr-txt-brand-secondary"
          >
            {params.row.full_name}
          </Link>
        );
      },
    },
    {
      // 企業名
      field: 'name_company',
      headerName: t('user-list:table_header.company_name'),
      minWidth: 180,
      flex: 3,
      renderCell: (params) => {
        return (
          <Link
            href={PATH_NAMES.COMPANY_DETAIL(params.row.id, {
              [SEARCH_PARAMS.BACK_LINK]: fullpath,
            })}
            className="cursor-pointer text-clr-txt-brand-secondary"
          >
            {params.row.name_company}
          </Link>
        );
      },
    },
    {
      // 登録日時
      field: 'created_at',
      headerName: t('user-list:table_header.register_date'),
      minWidth: 150,
      flex: 2,
    },
  ];

  return headers;
};

export default useTableHeader;
