'use client';
import { DetailUser } from '@/types/User.type';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InfoTable, InfoTableRow } from '@/components/layouts/info-table';

interface UserInformationProps extends Partial<DetailUser> {}

const UserInformation: React.FunctionComponent<UserInformationProps> = (
  props,
) => {
  const { full_name, company_emails, user_email } = props;
  const { t } = useTranslation(['user-detail']);

  return (
    <div className="mt-[24px] w-full">
      <InfoTable>
        <InfoTableRow title={t('user-detail:user_information.name')}>
          {full_name}
        </InfoTableRow>

        <InfoTableRow
          className="multiple_row last:[&>div]:p-[0px]"
          title={t('user-detail:user_information.email')}
        >
          {company_emails?.map((email, index) => (
            <p
              className={`${index === 0 ? '' : 'border-t border-solid border-clr-border-secondary'} py-[17px] pl-[24px] text-clr-txt-tertiary`}
              key={email}
            >
              {email}
            </p>
          ))}
        </InfoTableRow>
        <InfoTableRow title={t('user-detail:user_information.sub_emai')}>
          {user_email}
        </InfoTableRow>
      </InfoTable>
    </div>
  );
};

export default UserInformation;
