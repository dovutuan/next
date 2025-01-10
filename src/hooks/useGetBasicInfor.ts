'use client';
import useApi from '@/services/useApi';
import { getCurrentAdmin } from '@/services/user';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { OperationIds } from '@/types/OperationIds.type';
import React from 'react';

const useGetBasicInfo = () => {
  const [fetchDone, setFetchDone] = React.useState(false);
  const { call } = useApi({
    request: getCurrentAdmin,
    operationId: OperationIds.CURRENT_ADMIN,
  });

  React.useEffect(() => {
    call().then(() => {
      setFetchDone(true);
    });
  }, []);

  const currentAdmin = useAppSelector((state) =>
    getResponseData(state, OperationIds.CURRENT_ADMIN),
  );

  return { fetchDone, currentAdmin };
};

export default useGetBasicInfo;
