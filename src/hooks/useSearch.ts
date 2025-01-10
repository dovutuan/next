import { OperationIds } from '@/types/OperationIds.type';
import { useRouter, useSearchParams } from 'next/navigation';
import useHandleStoreModule from './useHandleStoreModule';
import { StoreModuleNames } from '@/types/StoreModules';
import { useAppSelector } from '@/store/hooks';
import { getRequest } from '@/store/selectors';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import isNumeric from '@/utils/isNumeric';
import useApi from '@/services/useApi';
import { IIndexable } from '@/types/Generic.type';
import isEmpty from 'lodash/isEmpty';
import entries from 'lodash/entries';
import buildPathWithSearch from '@/utils/buildPathWithSearch';

type UseSearchParams = {
  operationId: OperationIds;
  moduleName: StoreModuleNames;
  request: any;
  pathname: string;
  initialState: any;
  emptyValue?: string;
  keyEmptyValue?: string;
};

const useSearch = ({
  operationId,
  moduleName,
  request,
  pathname,
  initialState,
  emptyValue,
  keyEmptyValue,
}: UseSearchParams) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setValue } = useHandleStoreModule(moduleName);
  const requestParams = useAppSelector((state) =>
    getRequest(state, operationId),
  );
  const { call } = useApi({
    operationId,
    request,
  });
  const [triggerSearch, setTriggerSearch] = React.useState<null | boolean>(
    null,
  );

  React.useEffect(() => {
    fromUrlToRequest();
  }, [searchParams]);

  React.useEffect(() => {
    if (triggerSearch !== null) {
      onSearch();
    }
  }, [triggerSearch]);

  const fromUrlToRequest = () => {
    const searchParamsObj: IIndexable = Object.fromEntries(
      searchParams.entries(),
    );
    let _requestParams = cloneDeep(requestParams);
    if (isEmpty(searchParamsObj)) {
      _requestParams = cloneDeep(initialState);
    } else {
      entries(searchParamsObj).forEach(([key, value]) => {
        if (!value) {
          _requestParams[key] = null;
        } else {
          _requestParams[key] = isNumeric(value) ? +value : value;
        }
      });
    }
    if (
      keyEmptyValue &&
      emptyValue &&
      _requestParams[keyEmptyValue] === emptyValue
    ) {
      call({ ..._requestParams, [keyEmptyValue]: null });
    } else {
      call(_requestParams);
    }
    setValue({ value: _requestParams });
  };

  const onSearch = () => {
    const _request = cloneDeep(requestParams);
    _request.page = 1;
    router.push(buildPathWithSearch(pathname, _request));
  };
  const onClear = () => {
    const _initialState = cloneDeep(initialState);
    router.push(buildPathWithSearch(pathname, _initialState));
  };
  const onChangePagination = (page: number) => {
    const _requestParams = cloneDeep(requestParams);
    _requestParams.page = page;
    router.push(buildPathWithSearch(pathname, _requestParams));
  };
  const forceSearch = () => {
    setTriggerSearch(!triggerSearch);
  };

  return {
    fromUrlToRequest,
    onSearch,
    onClear,
    onChangePagination,
    forceSearch,
  };
};

export default useSearch;
