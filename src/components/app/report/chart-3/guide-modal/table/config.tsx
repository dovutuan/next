import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { useTranslation } from 'react-i18next';

const useTableHeadConfigs = () => {
  const { t } = useTranslation('report');

  const TABLE_HEAD: GridColDef[] = [
    {
      field: 'item',
      headerName: t('chart_container.job_potential.guide.table_head.item'),
      cellClassName: 'content-center',
      minWidth: 140,
    },
    {
      field: 'deviation',
      headerName: t('chart_container.job_potential.guide.table_head.deviation'),
      cellClassName: 'content-center',
      minWidth: 84,
      renderCell: (params) => (
        <Box className="border-clr-border-ultility-success text-clr-txt-utility-success-700 w-fit rounded-full border border-solid bg-clr-bg-success-primary px-[8px] font-medium leading-[18px]">
          {params.row.deviation}
        </Box>
      ),
    },
    {
      field: 'job',
      headerName: t('chart_container.job_potential.guide.table_head.job'),
      cellClassName: 'content-center',
      flex: 1,
      minWidth: 240,
    },
    {
      field: 'example',
      headerName: t('chart_container.job_potential.guide.table_head.example'),
      flex: 1.5,
      cellClassName: 'content-center',
      minWidth: 300,
    },
  ];
  return {
    TABLE_HEAD,
  };
};

export { useTableHeadConfigs };
