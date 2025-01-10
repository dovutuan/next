import { getCompanyList } from '@/services/company';
import useApi from '@/services/useApi';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { Option } from '@/types/Common.type';
import { OperationIds } from '@/types/OperationIds.type';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useCompanyOptions = () => {
  const { t } = useTranslation(['common']);

  const listCompany = useAppSelector(
    (state) => getResponseData(state, OperationIds.COMPANIES)?.data,
  );
  const { call: callGetCompanyList } = useApi({
    operationId: OperationIds.COMPANIES,
    request: () =>
      getCompanyList({
        page: 1,
        per_page: 100,
        sort_field: 'name',
        sort_direction: 'asc',
      }),
  });

  React.useEffect(() => {
    callGetCompanyList();
  }, []);

  const companySelectOptions = React.useMemo(() => {
    if (!listCompany) return [];
    const companySelectOptions: Option[] = [];
    companySelectOptions.push({
      label: t('common:select.search_all'),
      value: 'all',
    });
    listCompany.forEach((company: any) =>
      companySelectOptions.push({ label: company.name, value: company.id }),
    );

    return companySelectOptions;
  }, [listCompany]);

  return companySelectOptions;
};

export default useCompanyOptions;
