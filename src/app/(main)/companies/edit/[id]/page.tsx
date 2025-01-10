'use client';
import PageTitle from '@/components/common/page-title';
import withStore from '@/hoc/withStore';
import { StoreModuleNames } from '@/types/StoreModules';
import React from 'react';
import EditCompanyForm from '@/components/app/companies/create/form';
import { FormTypes } from '@/types/Common.type';
import { getDetailCompany } from '@/services/company';
import { useParams, useSearchParams } from 'next/navigation';
import { OperationIds } from '@/types/OperationIds.type';
import useApi from '@/services/useApi';
import { actions } from '@/store/req/editCompany';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import PATH_NAMES from '@/constants/PathNames';
import { SEARCH_PARAMS } from '@/constants/Common';

const Content = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params.id;
  const { call } = useApi({
    request: () => getDetailCompany(id),
    operationId: OperationIds.GET_DETAIL_COMPANY,
  });
  const detailCompany = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DETAIL_COMPANY),
  );
  const searchParams = useSearchParams();

  React.useEffect(() => {
    call().then((data) => {
      dispatch(
        actions.setValue({
          value: data.response.data,
        }),
      );
    });
  }, []);

  return (
    <div>
      <PageTitle
        backPath={
          searchParams.get(SEARCH_PARAMS.BACK_LINK) ?? PATH_NAMES.COMPANIES()
        }
        title={detailCompany?.name}
        classNames="mb-[24px]"
      />
      <EditCompanyForm type={FormTypes.EDIT} />
    </div>
  );
};

const CompanyEdit = withStore({
  modules: [StoreModuleNames.REQ_EDIT_COMPANY],
  operationIds: [
    OperationIds.EDIT_COMPANY,
    OperationIds.GET_SECTORS,
    OperationIds.GET_DETAIL_COMPANY,
  ],
})(Content);
export default CompanyEdit;
