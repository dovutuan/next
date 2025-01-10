'use client';
import { SEARCH_PARAMS } from '@/constants/Common';
import PATH_NAMES from '@/constants/PathNames';
import useGetFullPath from '@/hooks/useGetFullPath';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ResultAction from '/public/assets/icons/examination-data-list-action-1.svg';

const useTableHeader = () => {
  const { t } = useTranslation(['examination-data-list', 'common']);
  const fullpath = useGetFullPath();

  const headers: GridColDef[] = [
    {
      // 企業ID
      field: 'id',
      headerName: t('examination-data-list:table_header.user_id'),
      minWidth: 80,
      flex: 0.5,
    },
    {
      // 名前
      field: 'username',
      headerName: t('examination-data-list:table_header.exam_taker'),
      minWidth: 200,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Link
            href={PATH_NAMES.USER_DETAIL(params.row.employee.user_id, {
              [SEARCH_PARAMS.BACK_LINK]: fullpath,
            })}
            className="cursor-pointer text-clr-txt-brand-secondary"
          >
            {params.row.employee?.last_name} {params.row.employee?.first_name}
          </Link>
        );
      },
    },
    {
      // 企業名
      field: 'company_name',
      headerName: t('examination-data-list:table_header.company_name'),
      minWidth: 180,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Link
            href={PATH_NAMES.COMPANY_DETAIL(params.row.company.id, {
              [SEARCH_PARAMS.BACK_LINK]: fullpath,
            })}
            className="cursor-pointer text-clr-txt-brand-secondary"
          >
            {params.row.company?.name}
          </Link>
        );
      },
    },
    {
      // 診断名
      field: 'diagnosis_name',
      headerName: t('examination-data-list:table_header.exam_name'),
      minWidth: 150,
      flex: 1,
      renderCell: (params) => params.row.diagnosis?.name,
    },
    {
      // 受検日時
      field: 'started_at',
      headerName: t('examination-data-list:table_header.exam_date_time'),
      minWidth: 150,
      flex: 1,
      renderCell: (params) =>
        params.row.started_at
          ? dayjs(params.row?.started_at).format('YYYY/MM/DD HH:mm:ss')
          : '',
    },
    {
      // 結果/actions
      field: '',
      headerName: t('examination-data-list:table_header.exam_result'),
      minWidth: 155,
      renderCell: ({ row }) => {
        if (row.result_id) {
          return (
            <div className="flex items-center gap-[6px]">
              <ResultAction />
              <Link
                href={PATH_NAMES.EXAM_RESULT_REPORT(Number(row.id), {
                  [SEARCH_PARAMS.BACK_LINK]: fullpath,
                })}
                className="text-[14px] font-normal text-clr-txt-tertiary"
              >
                {t('examination-data-list:table_header.action')}
              </Link>
            </div>
          );
        }
      },
    },
  ];

  return headers;
};

export default useTableHeader;
