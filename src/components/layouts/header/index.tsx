'use client';
import React from 'react';
import { SCREEN_TITLE, LOGIN_TITLE } from '@/constants/Layout';
import Logo from '/public/assets/icons/logo_small.svg';
import Logout from '/public/assets/icons/logout.svg';
import Laptop from '/public/assets/icons/laptop-01.svg';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import PATH_NAMES from '@/constants/PathNames';

const Header: React.FunctionComponent = () => {
  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.push(PATH_NAMES.LOGIN);
  };

  return (
    <div className="flex justify-between bg-white px-4 py-5">
      <div className="flex cursor-default items-center">
        <Logo />
        <span className="ml-6 flex items-center gap-[8px] border-l border-solid border-l-clr-fg-senary pl-6 text-[16px] font-[700] text-clr-txt-placeholder-subttl">
          <Laptop />
          {SCREEN_TITLE}
        </span>
      </div>
      <IconButton
        className="flex cursor-pointer items-center"
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={handleRedirectToLogin}
      >
        <Logout />
        <p className="ml-1.5 text-sm font-semibold">{LOGIN_TITLE}</p>
      </IconButton>
    </div>
  );
};

export default Header;
