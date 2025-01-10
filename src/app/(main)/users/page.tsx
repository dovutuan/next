'use client';
import PageTitle from '@/components/common/page-title';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Table from '@/components/app/users/page/table';
import FilterGroup from '@/components/app/users/page/filter';
import { StoreModuleNames } from '@/types/StoreModules';
import withStore from '@/hoc/withStore';
import { OperationIds } from '@/types/OperationIds.type';
import useSearch from '@/hooks/useSearch';
import { getUsers } from '@/services/user';
import PATH_NAMES from '@/constants/PathNames';
import { initialState } from '@/store/req/getUsers';

interface IListUserProps {}

const Content: React.FunctionComponent<IListUserProps> = () => {
  const { t } = useTranslation(['user-list', 'common']);
  const { onSearch, onClear, onChangePagination, forceSearch } = useSearch({
    operationId: OperationIds.GET_USERS,
    moduleName: StoreModuleNames.REQ_GET_USERS,
    request: getUsers,
    pathname: PATH_NAMES.USERS(),
    initialState: initialState(),
    emptyValue: 'all',
    keyEmptyValue: 'company_id',
  });

  return (
    <>
      <div className="mb-[24px] flex w-full flex-row flex-wrap justify-between gap-1">
        <PageTitle title={t('user-list:examination_data_page_breadcrum')} />
      </div>
      <FilterGroup
        onSearch={onSearch}
        onClear={onClear}
        forceSearch={forceSearch}
      />
      <Table onChangePagination={onChangePagination} />
    </>
  );
};

const Users = withStore({
  modules: [StoreModuleNames.REQ_GET_USERS],
  operationIds: [OperationIds.GET_USERS, OperationIds.COMPANIES],
})(Content);

export default Users;
