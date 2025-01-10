'use client';
import BaseButton from '@/components/common/button';
import BaseSnackBar from '@/components/common/snack-bar';
import ModuleTextFieldPassword from '@/components/modules/text-field-password';
import withStore from '@/hoc/withStore';
import { resetPassword } from '@/services/auth';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { ResetPasswordRequest } from '@/types/Request.type';
import { StoreModuleNames } from '@/types/StoreModules';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Key from '/public/assets/icons/key.svg';
import useServerValidation from '@/hooks/useServerValidation';
import { getRequest, getResponse } from '@/store/selectors';
import React from 'react';
import useApi from '@/services/useApi';
import TickIcon from '/public/assets/icons/tick.svg';
import CustomTooltip from '@/components/app/setting-new-password/tooltip';
import PATH_NAMES from '@/constants/PathNames';
import { SEARCH_PARAMS } from '@/constants/Common';

const Content = () => {
  const { t } = useTranslation(['reset-password', 'messages', 'common']);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { call } = useApi({
    request: resetPassword,
    operationId: OperationIds.RESET_PASSWORD,
  });
  const { serverMessages } = useServerValidation(OperationIds.RESET_PASSWORD);
  const resetPswResponse = useAppSelector((state) =>
    getResponse(state, OperationIds.RESET_PASSWORD),
  );
  const resetPswMessage = React.useMemo(() => {
    if (resetPswResponse.status === 400) {
      return resetPswResponse.response.message;
    } else {
      return '';
    }
  }, [resetPswResponse]);
  const submitData = useAppSelector((state) =>
    getRequest(state, OperationIds.RESET_PASSWORD),
  ) as ResetPasswordRequest;
  const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
    router.push(PATH_NAMES.LOGIN);
  };

  const handleResetPassword = async () => {
    call({
      ...submitData,
      otp: searchParams.get(SEARCH_PARAMS.OTP),
    }).then(() => {
      setOpenSnackBar(true);
      router.push(PATH_NAMES.LOGIN);
    });
  };

  const renderSnackbarMsg = () => {
    return (
      <p className="flex flex-row gap-[8px]">
        <TickIcon />
        {t('reset-password:snack_bar_content')}
      </p>
    );
  };

  return (
    <div className="m-auto w-4/5 bg-white bg-background-login pt-[96px]">
      <Key className="mx-auto block" />
      <div className="m-auto mb-[40px] mt-[24px] w-fit">
        <h2 className="mb-[12px] text-center text-[30px] font-[600]">
          {t('reset-password:form_title')}
        </h2>
        <p className="font-normal">{t('reset-password:guide')}</p>
      </div>
      <div className="mx-auto flex w-[360px] flex-col items-center">
        <ModuleTextFieldPassword
          fullWidth
          label={t('reset-password:password_label')}
          module={StoreModuleNames.REQ_RESET_PASSWORD}
          path="password"
          helperText={serverMessages?.password}
          error={serverMessages?.password}
          trimming={true}
        />
        <CustomTooltip />
        <ModuleTextFieldPassword
          fullWidth
          label={t('reset-password:confirm_password_label')}
          module={StoreModuleNames.REQ_RESET_PASSWORD}
          path="password_confirmation"
          sx={{ marginBottom: '32px' }}
          helperText={serverMessages?.password_confirmation || resetPswMessage}
          error={serverMessages?.password_confirmation || resetPswMessage}
          trimming={true}
        />
        <BaseButton
          className="mt-2 w-full"
          onClick={handleResetPassword}
          variant="contained"
          size="large"
          color="primary"
        >
          {t('common:button.reset_password')}
        </BaseButton>
      </div>
      <BaseSnackBar
        open={openSnackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleCloseSnackBar}
        message={renderSnackbarMsg()}
      />
    </div>
  );
};

const SettingNewPassword = withStore({
  modules: [StoreModuleNames.REQ_RESET_PASSWORD],
  operationIds: [OperationIds.RESET_PASSWORD],
})(Content);
export default SettingNewPassword;
