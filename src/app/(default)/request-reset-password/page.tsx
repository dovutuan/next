'use client';
import BaseButton from '@/components/common/button';
import BaseSnackBar from '@/components/common/snack-bar';
import ModuleTextField from '@/components/modules/text-field';
import withStore from '@/hoc/withStore';
import { sendEmailForgotPassword } from '@/services/auth';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { ForgotPasswordRequest } from '@/types/Request.type';
import { StoreModuleNames } from '@/types/StoreModules';
import { SnackbarCloseReason } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Key from '/public/assets/icons/key.svg';
import useServerValidation from '@/hooks/useServerValidation';
import useApi from '@/services/useApi';
import { getResponse } from '@/store/selectors';
import PATH_NAMES from '@/constants/PathNames';

const Content = () => {
  const router = useRouter();
  const { t } = useTranslation(['forgot-password', 'messages', 'common']);
  const { serverMessages } = useServerValidation(OperationIds.FORGOT_PASSWORD);
  const { call } = useApi({
    request: sendEmailForgotPassword,
    operationId: OperationIds.FORGOT_PASSWORD,
  });
  const submitData = useAppSelector(
    (state) => state.req?.[OperationIds.FORGOT_PASSWORD],
  ) as ForgotPasswordRequest;
  const forgotMessageResponse = useAppSelector((state) =>
    getResponse(state, OperationIds.FORGOT_PASSWORD),
  );
  const forgotMessages = React.useMemo(() => {
    if (forgotMessageResponse.status === 400) {
      return forgotMessageResponse.response.message;
    } else {
      return '';
    }
  }, [forgotMessageResponse]);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

  const handleBackToLogin = () => {
    router.push(PATH_NAMES.LOGIN);
  };

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleSendEmail = async () => {
    call(submitData).then(() => {
      setOpenSnackBar(true);
    });
  };

  return (
    <div className="m-auto w-4/5 bg-white bg-background-login pt-[96px]">
      <Key className="mx-auto block" />
      <h2 className="mb-[12px] mt-[24px] text-center text-[30px] font-[600]">
        {t('forgot-password:forgot_password_form_title')}
      </h2>
      <div className="m-auto mb-[40px] w-fit text-center">
        <p className="mb-3 font-normal">
          {t('forgot-password:forgot_password_guide_1')}
        </p>
        <p className="font-normal">
          {t('forgot-password:forgot_password_guide_2')}
        </p>
      </div>
      <div className="mx-auto flex w-[360px] flex-col items-center">
        <ModuleTextField
          fullWidth
          label={t('forgot-password:email_label')}
          module={StoreModuleNames.REQ_FORGOT_PASSWORD}
          path="email"
          sx={{ marginBottom: '32px' }}
          helperText={serverMessages?.email || forgotMessages}
          error={serverMessages?.email || forgotMessages}
          trimming={true}
        />
        <div className="flex w-full gap-4">
          <BaseButton
            className="grow"
            onClick={handleBackToLogin}
            variant="outlined"
            size="large"
          >
            {t('common:button.back')}
          </BaseButton>
          <BaseButton
            className="grow"
            onClick={handleSendEmail}
            variant="contained"
            size="large"
            color="primary"
          >
            {t('common:button.send')}
          </BaseButton>
        </div>
      </div>
      <BaseSnackBar
        open={openSnackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleCloseSnackBar}
        message={t('forgot-password:notification_send_email')}
      />
    </div>
  );
};

const RequestResetPassword = withStore({
  modules: [StoreModuleNames.REQ_FORGOT_PASSWORD],
  operationIds: [OperationIds.FORGOT_PASSWORD],
})(Content);
export default RequestResetPassword;
