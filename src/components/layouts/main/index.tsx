'use client';
import MainLayoutSidebar from '@/components/layouts/main/sidebar';
import React from 'react';
import MainLayoutHeader from '@/components/layouts/main/header';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { SIDEBAR_MINI_WIDTH, SIDEBAR_WIDTH } from '@/constants/Common';
import { useAppSelector } from '@/store/hooks';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }: any) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }: { open: boolean }) => open,
      style: {
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: `${SIDEBAR_WIDTH}px`,
      },
    },
    {
      props: ({ open }: { open: boolean }) => !open,
      style: {
        width: `calc(100% - ${SIDEBAR_MINI_WIDTH}px)`,
        marginLeft: `${SIDEBAR_MINI_WIDTH}px`,
      },
    },
  ],
}));

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarOpen = useAppSelector((state) => state.app.isSidebarOpen);
  return (
    <Box className="w-full">
      <MainLayoutSidebar />
      <Main open={isSidebarOpen}>
        <MainLayoutHeader />
        <Box className="p-[24px]">{children}</Box>
      </Main>
    </Box>
  );
}
