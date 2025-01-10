'use client';
import UserInformation from '@/components/app/users/[id]/user-information';
import UserWorkingHistory from '@/components/app/users/[id]/user-working-history';
import PageTitle from '@/components/common/page-title';
import Block from '@/components/layouts/block';
import PATH_NAMES from '@/constants/PathNames';
import withStore from '@/hoc/withStore';
import useApi from '@/services/useApi';
import { getDetailUser } from '@/services/user';
import { useAppSelector } from '@/store/hooks';
import { getResponseData } from '@/store/selectors';
import { OperationIds } from '@/types/OperationIds.type';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEARCH_PARAMS } from '@/constants/Common';

const DetailUserPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const { t } = useTranslation(['user-detail']);
  const { call } = useApi({
    request: () => getDetailUser(params.id),
    operationId: OperationIds.GET_USER,
  });
  const userData = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_USER),
  );

  React.useEffect(() => {
    call();
  }, []);

  return (
    <>
      <PageTitle
        title={userData?.full_name ?? ''}
        backPath={
          searchParams.get(SEARCH_PARAMS.BACK_LINK)! || PATH_NAMES.USERS()
        }
      />
      <UserInformation
        full_name={userData?.full_name}
        company_emails={userData?.company_emails}
        user_email={userData?.user_email}
      />
      <Block
        className="mb-[24px] mt-[32px]"
        title={t('user-detail:user_working_history.section_title')}
      >
        <UserWorkingHistory data={userData?.companies} />
      </Block>
    </>
  );
};

export default withStore({ operationIds: [OperationIds.GET_USER] })(
  DetailUserPage,
);
