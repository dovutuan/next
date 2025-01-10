'use client';
import PATH_NAMES from '@/constants/PathNames';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ResultAction from '/public/assets/icons/examination-data-list-action-1.svg';
import BaseParagraph from '@/components/common/paragraph';
import useGetFullPath from '@/hooks/useGetFullPath';
import { SEARCH_PARAMS } from '@/constants/Common';

const useTableHeader = () => {
  const { t } = useTranslation(['user-detail']);
  const fullpath = useGetFullPath();

  const headers: GridColDef[] = [
    {
      // 診断名
      field: 'name',
      headerName: t('user-detail:user_working_history.exam_name'),
      minWidth: 80,
      flex: 2,
    },
    {
      // 受検日時
      field: 'exam_date',
      headerName: t('user-detail:user_working_history.exam_finish_time'),
      minWidth: 200,
      flex: 2,
    },
    {
      // 結果
      field: '',
      headerName: t('user-detail:user_working_history.result'),
      minWidth: 180,
      flex: 1,
      renderCell: ({ row }) => {
        if (row.result_id) {
          return (
            <div className="flex items-center gap-[6px]">
              <ResultAction />
              <Link
                href={PATH_NAMES.EXAM_RESULT_REPORT(Number(row.exam_id), {
                  [SEARCH_PARAMS.BACK_LINK]: fullpath,
                })}
                className="text-[14px] font-normal text-clr-txt-tertiary"
              >
                {t('user-detail:user_working_history.action')}
              </Link>
            </div>
          );
        } else {
          return (
            <div className="flex h-full items-center">
              <BaseParagraph
                size="sm"
                weight="normal"
                className="text-clr-txt-tertiary"
              >
                {t('user-detail:user_working_history.empty_exam_results')}
              </BaseParagraph>
            </div>
          );
        }
      },
    },
  ];

  return headers;
};

export default useTableHeader;
