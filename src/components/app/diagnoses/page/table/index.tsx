'use client';

import React from 'react';
import DataTable from '@/components/common/data-table';
import useTableConfig from './useTableConfig';
import { getResponseData } from '@/store/selectors';
import { OperationIds } from '@/types/OperationIds.type';
import { useAppSelector } from '@/store/hooks';
import TableTotalCount from '@/components/common/table-total-count';
import AppPagination from '@/components/common/pagination';
import useGetDiagnosis from './useGetDiagnosis';
import { DiagnosisItemResponse } from '@/types/Diagnosis.type';
import TableFooter from '@/components/layouts/table-footer';

export default function Table() {
  const tableConfig = useTableConfig();
  const { onChangePagination } = useGetDiagnosis();
  const diagnosisResponse = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DIAGNOSES),
  );
  const tableData = React.useMemo<DiagnosisItemResponse[]>(
    () => diagnosisResponse?.data,
    [diagnosisResponse],
  );
  const pages = React.useMemo<number>(() => {
    const count = diagnosisResponse?.total ?? 0;
    const perPage = diagnosisResponse?.perPage ?? 1;
    return Math.ceil(count / perPage);
  }, [diagnosisResponse]);
  const count = React.useMemo<number>(
    () => diagnosisResponse?.total ?? 0,
    [diagnosisResponse],
  );
  const currentPage = React.useMemo<number>(
    () => diagnosisResponse?.currentPage ?? 1,
    [diagnosisResponse],
  );

  const renderTableFooter = () => {
    return count ? (
      <TableFooter
        count={<TableTotalCount count={count} />}
        pagination={
          <AppPagination
            page={currentPage}
            count={pages}
            onChange={onChangePagination}
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
}
