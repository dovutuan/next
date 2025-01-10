'use client';
import React from 'react';
import DataTable from '@/components/common/data-table';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import TableTotalCount from '@/components/common/table-total-count';
import AppPagination from '@/components/common/pagination';
import useTableHeader from './useTableHeader';
import { ExaminationDataItem } from '@/types/ExaminationData.type';
import TableFooter from '@/components/layouts/table-footer';

type Props = {
  onChangePagination: (page: number) => void;
};

const Table = (props: Props) => {
  const headers = useTableHeader();
  const listExaminationDataResponse = useAppSelector(
    (state) => state.res[OperationIds.EXAMS],
  );
  const tableData = React.useMemo<ExaminationDataItem[]>(() => {
    return listExaminationDataResponse?.response?.data?.data;
  }, [listExaminationDataResponse]);
  const pages = React.useMemo<number>(() => {
    const count = listExaminationDataResponse?.response?.data?.total ?? 0;
    const perPage = listExaminationDataResponse?.response?.data?.perPage ?? 1;
    return Math.ceil(count / perPage);
  }, [listExaminationDataResponse]);
  const count = React.useMemo<number>(() => {
    const count = listExaminationDataResponse?.response?.data?.total ?? 0;
    return count;
  }, [listExaminationDataResponse]);
  const currentPage = React.useMemo<number>(() => {
    return listExaminationDataResponse?.response?.data?.currentPage ?? 1;
  }, [listExaminationDataResponse]);

  const renderTableFooter = () => {
    return count ? (
      <TableFooter
        count={<TableTotalCount count={count} />}
        pagination={
          <AppPagination
            page={currentPage}
            count={pages}
            onChange={(_, page: number) => props.onChangePagination(page)}
          />
        }
      />
    ) : null;
  };

  return (
    <>
      <DataTable className="mb-[20px]" columns={headers} rows={tableData} />
      {renderTableFooter()}
    </>
  );
};

export default Table;
