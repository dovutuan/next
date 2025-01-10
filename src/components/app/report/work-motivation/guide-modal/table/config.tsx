import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { useTranslation } from 'react-i18next';

const useTableHeadConfigs = () => {
  const { t } = useTranslation('report');

  const TABLE_HEAD: GridColDef[] = [
    {
      field: 'name',
      headerName: t('chart_container.work_motivation.guide.table_head.name'),
      cellClassName: 'content-center',
      flex: 1,
      minWidth: 240,
    },
    {
      field: 'result',
      headerName: t('chart_container.work_motivation.guide.table_head.result'),
      cellClassName: 'content-center',
      flex: 1,
      maxWidth: 100,
      renderCell: (params) => (
        <Box className="border-clr-border-ultility-success text-clr-txt-utility-success-700 w-fit rounded-full border border-solid bg-clr-bg-success-primary px-[8px] py-[2px] font-medium leading-[18px]">
          {params.row?.result}%
        </Box>
      ),
    },
    {
      field: 'defined',
      headerName: t('chart_container.work_motivation.guide.table_head.defined'),
      cellClassName: 'content-center',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'employee_model',
      headerName: t(
        'chart_container.work_motivation.guide.table_head.employee_model',
      ),
      flex: 1.1,
      minWidth: 200,
      cellClassName: 'content-center',
    },
  ];
  return {
    TABLE_HEAD,
  };
};

export { useTableHeadConfigs };
