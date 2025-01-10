'use client';
import React from 'react';
import DataTable from '@/components/common/data-table';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { CompanyItem } from '@/types/Company.type';
import TableTotalCount from '@/components/common/table-total-count';
import AppPagination from '@/components/common/pagination';
import useTableConfig from './useTableConfig';
import { getResponseData } from '@/store/selectors';
import TableFooter from '@/components/layouts/table-footer';

type Props = {
  onChangePagination: (page: number) => void;
};

const Table = (props: Props) => {
  const tableConfig = useTableConfig();
  const listCompanyResponse = useAppSelector((state) =>
    getResponseData(state, OperationIds.COMPANIES),
  );
  const tableData = React.useMemo<CompanyItem[]>(
    () => listCompanyResponse?.data,
    [listCompanyResponse],
  );
  const pages = React.useMemo<number>(() => {
    const count = listCompanyResponse?.total ?? 0;
    const perPage = listCompanyResponse?.perPage ?? 1;
    return Math.ceil(count / perPage);
  }, [listCompanyResponse]);
  const count = React.useMemo<number>(
    () => listCompanyResponse?.total ?? 0,
    [listCompanyResponse],
  );
  const currentPage = React.useMemo<number>(
    () => listCompanyResponse?.currentPage ?? 1,
    [listCompanyResponse],
  );

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
      <DataTable className="mb-[20px]" columns={tableConfig} rows={tableData} />
      {renderTableFooter()}
    </>
  );
};

export default Table;
