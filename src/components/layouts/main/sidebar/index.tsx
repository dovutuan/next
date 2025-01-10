'use client';
import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { SIDEBAR_MINI_WIDTH, SIDEBAR_WIDTH } from '@/constants/Common';
import { Theme, CSSObject, styled } from '@mui/material/styles';
import AppDrawerHeader from './header';
import AppDrawerNavigationList from './navigation-list';
import useHandleStoreModule from '@/hooks/useHandleStoreModule';
import { StoreModuleNames } from '@/types/StoreModules';
import { useAppSelector } from '@/store/hooks';

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `${SIDEBAR_MINI_WIDTH}px`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    background: STYLE_VARIABLES.CLR_BG_SECONDARY_SOLID,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

const AppDrawer: React.FunctionComponent = () => {
  const isSidebarOpen = useAppSelector((state) => state.app.isSidebarOpen);
  const { setValue } = useHandleStoreModule(StoreModuleNames.APP);

  const onToggle = () => {
    setValue({
      path: 'isSidebarOpen',
      value: !isSidebarOpen,
    });
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isSidebarOpen}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <AppDrawerHeader onToggle={onToggle} isOpen={isSidebarOpen} />
      <AppDrawerNavigationList isOpen={isSidebarOpen} />
    </Drawer>
  );
};

export default AppDrawer;
