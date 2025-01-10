'use client';
import BaseButton from '@/components/common/button';
import ModuleTextField from '@/components/modules/text-field';
import ModuleTextFieldPassword from '@/components/modules/text-field-password';
import withStore from '@/hoc/withStore';
import { login } from '@/services/auth';
import { useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { LoginRequest } from '@/types/Request.type';
import { StoreModuleNames } from '@/types/StoreModules';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Logo from '/public/assets/icons/logo_small.svg';
import useServerValidation from '@/hooks/useServerValidation';
import useApi from '@/services/useApi';
import Cookies from 'js-cookie';
import { getResponse } from '@/store/selectors';
import React from 'react';
import PATH_NAMES from '@/constants/PathNames';
import { CookieNames } from '@/types/Cookie.type';

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation(['login', 'messages']);
  const { serverMessages } = useServerValidation(OperationIds.LOGIN);
  const { call } = useApi({ request: login, operationId: OperationIds.LOGIN });
  const submitData = useAppSelector(
    (state) => state.req?.[OperationIds.LOGIN],
  ) as LoginRequest;
  const loginResponse = useAppSelector((state) =>
    getResponse(state, OperationIds.LOGIN),
  );
  const loginMessage = React.useMemo(() => {
    if (loginResponse.status === 400) {
      return loginResponse.response.message;
    } else {
      return '';
    }
  }, [loginResponse]);

  const handleLogin = async () => {
    call(submitData).then((res) => {
      Cookies.set(CookieNames.TOKEN, res.response.data.token);
      router.push(PATH_NAMES.EXAMS());
    });
  };

  return (
    <div className="m-auto w-4/5 bg-white bg-background-login pt-[96px]">
      <Logo className="mx-auto block" style={{ transform: 'scale(1.5)' }} />
      <h2 className="mb-[40px] mt-[24px] text-center text-[30px] font-[600]">
        {t('login:login_form_title')}
      </h2>
      <div className="mx-auto flex w-[360px] flex-col items-center">
        <ModuleTextField
          fullWidth
          label={t('login:username_label')}
          module={StoreModuleNames.REQ_LOGIN}
          path="email"
          sx={{ marginBottom: '24px' }}
          helperText={serverMessages?.email}
          error={!!serverMessages?.email}
          trimming={true}
        />
        <ModuleTextFieldPassword
          fullWidth
          label={t('login:password_label')}
          module={StoreModuleNames.REQ_LOGIN}
          path="password"
          sx={{ marginBottom: '32px' }}
          helperText={serverMessages?.password || loginMessage}
          error={!!serverMessages?.password || !!loginMessage}
          trimming={true}
        />
        <BaseButton
          className="w-full"
          onClick={handleLogin}
          variant="contained"
          size="large"
          color="primary"
        >
          {t('login:btn_login')}
        </BaseButton>
        <Link
          className="mt-[16px] text-[16px] font-[600] text-clr-btn-fg-tertiary"
          href="/request-reset-password"
        >
          {t('login:forgot_password')}
        </Link>
      </div>
    </div>
  );
};
const LoginWithStore = withStore({
  modules: [StoreModuleNames.REQ_LOGIN],
  operationIds: [OperationIds.LOGIN],
})(Login);
export default LoginWithStore;
