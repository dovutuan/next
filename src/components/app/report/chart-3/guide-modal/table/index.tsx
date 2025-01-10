'use client';
import DataTable from '@/components/common/data-table';
import { gridClasses } from '@mui/x-data-grid';
import { useTableHeadConfigs } from './config';

interface IProps {
  data: any;
}

const PageTable = (props: IProps) => {
  const { TABLE_HEAD } = useTableHeadConfigs();

  return (
    <DataTable
      rows={props.data}
      columns={TABLE_HEAD}
      getRowHeight={() => 'auto'}
      sx={{
        [`& .${gridClasses.cell}`]: {
          py: 2.5,
          whiteSpace: 'pre-line !important',
          wordBreak: 'break-word',
        },
      }}
    />
  );
};

export default PageTable;
