'use client';
import React from 'react';
import DataTable from '@/components/common/data-table';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import TableTotalCount from '@/components/common/table-total-count';
import AppPagination from '@/components/common/pagination';
import useTableHeader from './useTableHeader';
import { User } from '@/types/User.type';
import TableFooter from '@/components/layouts/table-footer';

type Props = {
  onChangePagination: (page: number) => void;
};
const Table = (props: Props) => {
  const headers = useTableHeader();
  const listUserResponse = useAppSelector(
    (state) => state.res[OperationIds.GET_USERS],
  );

  const tableData = React.useMemo<User[]>(() => {
    return listUserResponse?.response?.data?.data;
  }, [listUserResponse]);

  const pages = React.useMemo<number>(() => {
    const count = listUserResponse?.response?.data?.total ?? 0;
    const perPage = listUserResponse?.response?.data?.perPage ?? 1;
    return Math.ceil(count / perPage);
  }, [listUserResponse]);

  const count = React.useMemo<number>(() => {
    const count = listUserResponse?.response?.data?.total ?? 0;
    return count;
  }, [listUserResponse]);

  const currentPage = React.useMemo<number>(() => {
    return listUserResponse?.response?.data?.currentPage ?? 1;
  }, [listUserResponse]);

  const renderTableFooter = () => {
    return count ? (
      <TableFooter
        count={<TableTotalCount count={count} />}
        pagination={
          <AppPagination
            page={currentPage}
            count={pages}
            onChange={(_, page) => props.onChangePagination(page)}
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
