'use client';
import PageTitle from '@/components/common/page-title';
import * as React from 'react';
import BaseButton from '@/components/common/button';
import { useTranslation } from 'react-i18next';
import PlusIcon from '/public/assets/icons/plus.svg';
import Table from '@/components/app/companies/page/table';
import { useRouter } from 'next/navigation';
import { StoreModuleNames } from '@/types/StoreModules';
import withStore from '@/hoc/withStore';
import { OperationIds } from '@/types/OperationIds.type';
import PATH_NAMES from '@/constants/PathNames';
import { getCompanyList } from '@/services/company';
import useSearch from '@/hooks/useSearch';
import { initialState } from '@/store/req/companies';
import { SEARCH_PARAMS } from '@/constants/Common';
import useGetFullPath from '@/hooks/useGetFullPath';

interface IAppProps {}
const Content: React.FunctionComponent<IAppProps> = () => {
  const { t } = useTranslation(['common', 'company-list']);
  const router = useRouter();
  const { onChangePagination } = useSearch({
    operationId: OperationIds.COMPANIES,
    moduleName: StoreModuleNames.REQ_GET_COMPANIES,
    request: getCompanyList,
    pathname: PATH_NAMES.COMPANIES(),
    initialState: initialState(),
  });
  const fullpath = useGetFullPath();

  const onClickCreateBtn = () => {
    router.push(
      PATH_NAMES.COMPANY_CREATE({
        [SEARCH_PARAMS.BACK_LINK]: fullpath,
      }),
    );
  };

  return (
    <React.Fragment>
      <div className="mb-[24px] flex w-full flex-row flex-wrap justify-between gap-1">
        <PageTitle title={t('company-list:title')} />
        <BaseButton
          variant="contained"
          size="large"
          className="ml-auto"
          onClick={onClickCreateBtn}
        >
          <PlusIcon className="mr-[8px]" />
          {t('common:button.create_new')}
        </BaseButton>
      </div>
      <Table onChangePagination={onChangePagination} />
    </React.Fragment>
  );
};

const CompanyList = withStore({
  modules: [StoreModuleNames.REQ_GET_COMPANIES],
  operationIds: [OperationIds.COMPANIES],
})(Content);
export default CompanyList;
