'use client';
import PageTitle from '@/components/common/page-title';
import Block from '@/components/layouts/block';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { InfoTable, InfoTableRow } from '@/components/layouts/info-table';
import useApi from '@/services/useApi';
import { getDetailCompany } from '@/services/company';
import { OperationIds } from '@/types/OperationIds.type';
import { useParams, useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { CompanyDetailResponse } from '@/types/Company.type';
import { ModalNames } from '@/types/ModalNames.type';
import DeleteCompanyModal from '@/components/modules/delete-company-modal';
import SendEmailModal from '@/components/app/companies/[id]/send-email-modal';
import KiteIcon from '/public/assets/icons/kite.svg';
import ActionMenu from '@/components/app/companies/[id]/action-menu';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import PATH_NAMES from '@/constants/PathNames';
import withStore from '@/hoc/withStore';
import { SEARCH_PARAMS } from '@/constants/Common';

const CompanyDetail = () => {
  const { t } = useTranslation(['company-create', 'company-list']);
  const params = useParams();
  const companyId = params.id;
  const responseData = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DETAIL_COMPANY),
  ) as CompanyDetailResponse;
  const { openModal } = useHandleAppModule();
  const { call } = useApi({
    request: getDetailCompany,
    operationId: OperationIds.GET_DETAIL_COMPANY,
  });
  const searchParams = useSearchParams();

  React.useEffect(() => {
    call(companyId);
  }, []);

  const handleOpenSendEmailModal = () => {
    openModal(ModalNames.SEND_EMAIL_INSTRUCTION);
  };

  return (
    <>
      <PageTitle
        backPath={
          searchParams.get(SEARCH_PARAMS.BACK_LINK) ?? PATH_NAMES.COMPANIES()
        }
        title={responseData?.name}
        postFix={<ActionMenu companyId={Number(companyId)} />}
        classNames="mb-[24px]"
      />
      <Block title={t('company-create:company_info')}>
        <InfoTable>
          <InfoTableRow title={t('company-create:form_label.company_name')}>
            {responseData?.name}
          </InfoTableRow>
          <InfoTableRow title={t('company-create:form_label.industry')}>
            {responseData?.industry_name}
          </InfoTableRow>
        </InfoTable>
      </Block>
      <Block title={t('company-create:supervisor_information')}>
        <InfoTable>
          <InfoTableRow title={t('company-create:form_label.administrator')}>
            {responseData?.root_user_name}
          </InfoTableRow>
          <InfoTableRow title={t('company-create:form_label.mail')}>
            <div className="flex w-full flex-row justify-between">
              <span>{responseData?.email}</span>
              {!responseData?.users?.length && (
                <div className="flex gap-[6px]">
                  <KiteIcon
                    className="cursor-pointer"
                    onClick={handleOpenSendEmailModal}
                  />
                  <button
                    className="font-[14px] font-semibold text-clr-btn-fg-tertiary"
                    onClick={handleOpenSendEmailModal}
                  >
                    {t('company-list:send_user_registration_guide')}
                  </button>
                </div>
              )}
            </div>
          </InfoTableRow>
        </InfoTable>
      </Block>
      <DeleteCompanyModal companyId={Number(companyId)} />
      <SendEmailModal />
    </>
  );
};

export default withStore({
  operationIds: [
    OperationIds.GET_DETAIL_COMPANY,
    OperationIds.SEND_EMAIL_INSTRUCTION,
    OperationIds.DELETE_COMPANY,
  ],
})(CompanyDetail);
