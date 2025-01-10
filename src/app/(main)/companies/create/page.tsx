'use client';
import PageTitle from '@/components/common/page-title';
import withStore from '@/hoc/withStore';
import { StoreModuleNames } from '@/types/StoreModules';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateCompanyForm from '@/components/app/companies/create/form';
import { OperationIds } from '@/types/OperationIds.type';
import PATH_NAMES from '@/constants/PathNames';
import { useSearchParams } from 'next/navigation';
import { SEARCH_PARAMS } from '@/constants/Common';

const PageContent = () => {
  const { t } = useTranslation(['company-create']);
  const searchParams = useSearchParams();

  return (
    <div>
      <PageTitle
        backPath={
          searchParams.get(SEARCH_PARAMS.BACK_LINK) ?? PATH_NAMES.COMPANIES()
        }
        title={t('company-create:title')}
        classNames="mb-[24px]"
      />
      <CreateCompanyForm />
    </div>
  );
};

const CompanyCreate = withStore({
  modules: [StoreModuleNames.REQ_CREATE_COMPANY],
  operationIds: [OperationIds.CREATE_COMPANY, OperationIds.GET_SECTORS],
})(PageContent);
export default CompanyCreate;
