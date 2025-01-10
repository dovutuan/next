'use client';
import React from 'react';
import PageTitle from '@/components/common/page-title';
import { getDetailCompany } from '@/services/company';
import useApi from '@/services/useApi';
import { useSearchParams } from 'next/navigation';
import { OperationIds } from '@/types/OperationIds.type';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import DiagnosesTable from '@/components/app/diagnoses/page/table';
import { StoreModuleNames } from '@/types/StoreModules';
import withStore from '@/hoc/withStore';
import PATH_NAMES from '@/constants/PathNames';
import ActionMenu from '@/components/app/diagnoses/page/action-menu';
import DeleteCompanyModal from '@/components/modules/delete-company-modal';
import { SEARCH_PARAMS } from '@/constants/Common';

const Content = () => {
  const searchParams = useSearchParams();
  const companyId = searchParams.get(SEARCH_PARAMS.COMPANY);
  const { call } = useApi({
    request: getDetailCompany,
    operationId: OperationIds.GET_DETAIL_COMPANY,
  });
  const companyDetailData = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DETAIL_COMPANY),
  );

  React.useEffect(() => {
    call(companyId);
  }, []);

  return (
    <div>
      <PageTitle
        classNames="mb-[24px] "
        backPath={
          searchParams.get(SEARCH_PARAMS.BACK_LINK) ?? PATH_NAMES.COMPANIES()
        }
        title={companyDetailData?.name}
        postFix={<ActionMenu companyId={Number(companyId)} />}
      />
      <DiagnosesTable />
      <DeleteCompanyModal companyId={Number(companyId)} />
    </div>
  );
};

const Diagnoses = withStore({
  modules: [StoreModuleNames.REQ_GET_DIAGNOSES],
  operationIds: [OperationIds.GET_DIAGNOSES, OperationIds.GET_DETAIL_COMPANY],
})(Content);

export default Diagnoses;
