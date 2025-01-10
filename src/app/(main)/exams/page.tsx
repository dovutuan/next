'use client';
import FilterGroup from '@/components/app/exams/page/filter';
import Table from '@/components/app/exams/page/table';
import PageTitle from '@/components/common/page-title';
import PATH_NAMES from '@/constants/PathNames';
import withStore from '@/hoc/withStore';
import useSearch from '@/hooks/useSearch';
import { getExaminationData } from '@/services/exams';
import { initialState } from '@/store/req/getExams';
import { OperationIds } from '@/types/OperationIds.type';
import { StoreModuleNames } from '@/types/StoreModules';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface IExaminationDataProps {}
const Content: React.FunctionComponent<IExaminationDataProps> = () => {
  const { t } = useTranslation(['examination-data-list', 'common']);
  const { onSearch, onClear, onChangePagination, forceSearch } = useSearch({
    operationId: OperationIds.EXAMS,
    moduleName: StoreModuleNames.REQ_GET_EXAMS,
    request: getExaminationData,
    pathname: PATH_NAMES.EXAMS(),
    initialState: initialState(),
    emptyValue: 'all',
    keyEmptyValue: 'company_id',
  });

  return (
    <>
      <div className="mb-[24px] flex w-full flex-row flex-wrap justify-between gap-1">
        <PageTitle
          title={t('examination-data-list:examination_data_page_breadcrum')}
        />
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

const ExaminationData = withStore({
  modules: [StoreModuleNames.REQ_GET_EXAMS],
  operationIds: [OperationIds.EXAMS, OperationIds.COMPANIES],
})(Content);

export default ExaminationData;
