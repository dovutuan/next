import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { useTranslation } from 'react-i18next';

const useTableConfig = () => {
  const { t } = useTranslation(['diagnosis-list']);

  const config: GridColDef[] = [
    {
      // ID
      field: 'id',
      headerName: t('diagnosis-list:table_header.id'),
      minWidth: 100,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      // 診断名
      field: 'name',
      headerName: t('diagnosis-list:table_header.diagnosis_name'),
      minWidth: 200,
      flex: 3,
      renderCell: (params) => params.row.name,
    },
    {
      // 受検数
      field: 'examinee_count',
      headerName: t('diagnosis-list:table_header.examinee_count'),
      minWidth: 100,
      flex: 1.5,
      headerAlign: 'center',
      align: 'center',
    },
    {
      // 受検期間
      field: 'exam_period',
      headerName: t('diagnosis-list:table_header.examinationPeriod'),
      minWidth: 280,
      flex: 4,
      renderCell: (params) =>
        params.row.started_at + ' 〜 ' + params.row.completed_at,
    },
    {
      // 登録日時
      field: 'created_at',
      headerName: t('diagnosis-list:table_header.register_date'),
      minWidth: 150,
      flex: 3,
    },
  ];

  return config;
};

export default useTableConfig;
