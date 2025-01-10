import React from 'react';
import { getDiagnosisList } from '@/services/company';
import useApi from '@/services/useApi';
import { OperationIds } from '@/types/OperationIds.type';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { actions } from '@/store/req/getDiagnoses';
import { useSearchParams } from 'next/navigation';
import { SEARCH_PARAMS } from '@/constants/Common';

const useGetDiagnosis = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { call } = useApi({
    operationId: OperationIds.GET_DIAGNOSES,
    request: getDiagnosisList,
  });
  const getDiagnosisRequest = useAppSelector(
    (state) => state.req?.[OperationIds.GET_DIAGNOSES],
  );

  React.useEffect(() => {
    dispatch(
      actions.setValue({
        path: 'company_id',
        value: +searchParams.get(SEARCH_PARAMS.COMPANY)!,
      }),
    );
  }, []);

  React.useEffect(() => {
    if (getDiagnosisRequest.company_id) {
      call(getDiagnosisRequest);
    }
  }, [getDiagnosisRequest]);

  const onChangePagination = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    dispatch(
      actions.setValue({
        path: 'page',
        value: page,
      }),
    );
  };

  return { onChangePagination };
};

export default useGetDiagnosis;
