import PATH_NAMES from '@/constants/PathNames';
import { logout as logoutApi } from '@/services/auth';
import { CookieNames } from '@/types/Cookie.type';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    logoutApi().then(() => {
      Cookies.remove(CookieNames.TOKEN);
      router.push(PATH_NAMES.LOGIN);
    });
  };

  return { logout };
};

export default useLogout;
