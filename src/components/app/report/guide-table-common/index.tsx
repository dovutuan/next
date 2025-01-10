'use client';
import { GuideTableCommonRecord } from '@/types/Report.type';
import { useTableHeadConfigs } from './config';
import Box from '@mui/material/Box';

interface IProps {
  data: GuideTableCommonRecord[];
  classColumnThree?: string;
}

const PageTable = (props: IProps) => {
  const { TABLE_HEAD, TABLE_CONTENT } = useTableHeadConfigs(
    props.classColumnThree,
  );

  return (
    <Box className="w-full overflow-auto">
      <Box className="w-[976px] lg:w-full">
        {TABLE_HEAD(
          Boolean(
            props.data[0]?.plusLowDeviation && props.data[0]?.minusLowDeviation,
          ),
        )}
        {TABLE_CONTENT(props.data)}
      </Box>
    </Box>
  );
};

export default PageTable;
