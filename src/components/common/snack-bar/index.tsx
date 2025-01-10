'use client';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import CloseIcon from '/public/assets/icons/close.svg';
import VIcon from '/public/assets/icons/snack-bar.svg';
import { SnackbarContent } from '@mui/material';

interface BaseSnackBarProps extends SnackbarProps {}

const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: STYLE_VARIABLES.CLR_BG_SUCCESS_PRIMARY,
          color: '#fff',
          borderRadius: STYLE_VARIABLES.RADIUS_MD,
          '@media (min-width:600px)': {
            minWidth: '360px',
          },
          boxShadow: STYLE_VARIABLES.BOX_SHADOW_XS,
        },
        message: {
          fontFamily: STYLE_VARIABLES.FONT_SECONDARY,
          color: STYLE_VARIABLES.CLR_TXT_SECONDARY,
        },
      },
    },
  },
});

const BaseSnackBar: React.FunctionComponent<BaseSnackBarProps> = (props) => {
  const action = (
    <IconButton onClick={props.onClose as any}>
      <CloseIcon />
    </IconButton>
  );
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        {...props}
      >
        <SnackbarContent
          message={
            <span className="flex items-center gap-[8.5px]">
              <VIcon />
              {props.message}
            </span>
          }
          action={action}
        />
      </Snackbar>
    </ThemeProvider>
  );
};

export default BaseSnackBar;
