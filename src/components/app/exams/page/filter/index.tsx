'use client';
import React from 'react';
import Clear from '/public/assets/icons/x-black.svg';
import Search from '/public/assets/icons/search-lg.svg';
import BaseButton from '@/components/common/button';
import ModuleTextField from '@/components/modules/text-field';
import ModuleBaseSelect from '@/components/modules/select';
import { useTranslation } from 'react-i18next';
import { StoreModuleNames } from '@/types/StoreModules';
import ModuleTextFieldNumber from '@/components/modules/text-field-number';
import useCompanyOptions from '@/hooks/useCompanyOptions';

type Props = {
  onSearch: () => void;
  onClear: () => void;
  forceSearch: () => void;
};
const FilterGroup = (props: Props) => {
  const { t } = useTranslation(['examination-data-list', 'common']);
  const companySelectOptions = useCompanyOptions();

  const onEnter = () => {
    props.forceSearch();
  };

  const onIdKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter();
    }
  };

  return (
    <div className="mb-[24px] flex flex-row flex-wrap gap-y-[24px] rounded-[12px] bg-clr-bg-secondary p-[24px]">
      <div className="flex flex-[1_1_80%] flex-row flex-wrap gap-[24px]">
        <div className="flex-[1_1_200px]">
          <ModuleTextField
            fullWidth
            module={StoreModuleNames.REQ_GET_EXAMS}
            path="search"
            label={t('examination-data-list:filter.search_label')}
            trimming={true}
            size="small"
            onKeyDown={onIdKeyDown}
          />
        </div>
        <div className="flex-[1_1_200px]">
          <ModuleTextFieldNumber
            fullWidth
            module={StoreModuleNames.REQ_GET_EXAMS}
            path="ids"
            label={t('examination-data-list:filter.id_label')}
            trimming={true}
            size="small"
            onKeyDown={onIdKeyDown}
          />
        </div>
        <div className="flex-[1_1_200px]">
          <ModuleBaseSelect
            fullWidth
            module={StoreModuleNames.REQ_GET_EXAMS}
            path="company_id"
            label={t('examination-data-list:filter.select_label')}
            options={companySelectOptions}
            size="small"
            onChange={props.forceSearch}
          />
        </div>
      </div>
      <div className="flex min-w-fit flex-[1_1_10%] flex-wrap justify-end gap-[8px] pl-[24px]">
        <BaseButton
          className="gap-[4px]"
          size="small"
          variant="contained"
          color="primary"
          sx={{ width: '108px' }}
          onClick={props.onSearch}
        >
          <Search />
          {t('common:button.search')}
        </BaseButton>
        <BaseButton
          className="gap-[4px]"
          size="small"
          variant="outlined"
          sx={{ width: '94px' }}
          onClick={props.onClear}
        >
          <Clear />
          {t('common:button.clear')}
        </BaseButton>
      </div>
    </div>
  );
};

export default FilterGroup;
