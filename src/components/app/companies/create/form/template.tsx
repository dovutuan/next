'use client';
import React from 'react';
import ModuleAppSelect from '@/components/modules/select';
import BaseButton from '@/components/common/button';
import Block from '@/components/layouts/block';
import ModuleTextField from '@/components/modules/text-field';
import { StoreModuleNames } from '@/types/StoreModules';
import { IIndexable } from '@/types/Generic.type';
import { FormTypes, Option } from '@/types/Common.type';
import { InfoTable, InfoTableRow } from '@/components/layouts/info-table';
import { useTranslation } from 'react-i18next';
import {
  CompanyDetailResponse,
  CreateCompanyRequest,
} from '@/types/Company.type';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { OperationIds } from '@/types/OperationIds.type';

type Props = {
  errorMessages: IIndexable;
  type: FormTypes;
  industryOptions: Option[];
  sectorOptions: Option[];
  onCreateCompany: () => void;
  submitData: Partial<CreateCompanyRequest>;
  storeModuleName: StoreModuleNames;
  onChangeIndustry: (event: any) => void
};

const Template = (props: Props) => {
  const detailCompany = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DETAIL_COMPANY),
  ) as CompanyDetailResponse;
  const { t } = useTranslation(['company-create', 'common']);
  const buttonText =
    props.type === FormTypes.CREATE
      ? t('common:button.register')
      : t('common:button.save');

  const renderSupervisorSection = () => {
    if (props.type === FormTypes.EDIT) {
      return (
        <Block title={t('company-create:supervisor_information')}>
          <InfoTable>
            <InfoTableRow title={t('company-create:form_label.administrator')}>
              {detailCompany?.root_user_name}
            </InfoTableRow>
            <InfoTableRow title={t('company-create:form_label.mail')}>
              {detailCompany?.email}
            </InfoTableRow>
          </InfoTable>
        </Block>
      );
    }
    return (
      <Block title={t('company-create:supervisor_information')}>
        <p className="mb-[8px] font-semibold leading-[24px] text-clr-txt-tertiary">
          {t('company-create:form_label.full_name')}
        </p>
        <div className="mb-[24px] flex gap-[24px]">
          <ModuleTextField
            sx={{ maxWidth: 230 }}
            fullWidth
            label={t('company-create:form_label.last_name')}
            module={props.storeModuleName}
            path={'last_name'}
            helperText={props.errorMessages?.last_name}
            error={!!props.errorMessages?.last_name}
          />
          <ModuleTextField
            sx={{ maxWidth: 230 }}
            fullWidth
            label={t('company-create:form_label.first_name')}
            module={props.storeModuleName}
            path={'first_name'}
            helperText={props.errorMessages?.first_name}
            error={!!props.errorMessages?.first_name}
          />
        </div>
        <div className="mb-[24px] flex gap-[24px]">
          <ModuleTextField
            sx={{ maxWidth: 230 }}
            fullWidth
            label={t('company-create:form_label.last_name_kana')}
            module={props.storeModuleName}
            path={'last_name_kana'}
            helperText={props.errorMessages?.last_name_kana}
            error={!!props.errorMessages?.last_name_kana}
          />
          <ModuleTextField
            sx={{ maxWidth: 230 }}
            fullWidth
            label={t('company-create:form_label.first_name_kana')}
            module={props.storeModuleName}
            path={'first_name_kana'}
            helperText={props.errorMessages?.first_name_kana}
            error={!!props.errorMessages?.first_name_kana}
          />
        </div>
        <ModuleTextField
          fullWidth
          sx={{ maxWidth: 484 }}
          label={t('company-create:form_label.mail')}
          module={props.storeModuleName}
          path={'email'}
          error={!!props.errorMessages?.email}
          helperText={props.errorMessages?.email}
        />
      </Block>
    );
  };

  return (
    <div>
      <Block title={t('company-create:company_info')}>
        <div className="mb-[24px] w-[484px]">
          <ModuleTextField
            fullWidth
            label={t('company-create:form_label.company_name')}
            module={props.storeModuleName}
            path={'name'}
            helperText={props.errorMessages?.name}
            error={!!props.errorMessages?.name}
            trimming={true}
          />
        </div>
        <div className="flex gap-[24px]">
          <div className="w-[230px]">
            <ModuleAppSelect
              module={props.storeModuleName}
              path="sector_id"
              label={t('company-create:form_label.industry')}
              options={props.sectorOptions}
              error={!!props.errorMessages?.sector_id}
              helpertext={props.errorMessages?.sector_id}
              onChange={props.onChangeIndustry}
            />
          </div>
          <div className="w-[230px]">
            <ModuleAppSelect
              module={props.storeModuleName}
              path="industry_id"
              label={t('company-create:form_label.industry_detail')}
              options={props.industryOptions}
              disabled={!props.submitData?.sector_id}
              error={!!props.errorMessages?.industry_id}
              helpertext={props.errorMessages?.industry_id}
            />
          </div>
        </div>
      </Block>
      {renderSupervisorSection()}
      <section className="text-center">
        <BaseButton
          variant="contained"
          size="large"
          sx={{ width: 120 }}
          onClick={props.onCreateCompany}
        >
          {buttonText}
        </BaseButton>
      </section>
    </div>
  );
};

export default Template;
