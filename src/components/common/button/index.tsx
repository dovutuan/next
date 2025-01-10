'use client';
import Button, { ButtonProps } from '@mui/material/Button';
import * as React from 'react';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import convertHexToRGBA from '@/utils/fromHexToRgba';

const theme = createTheme({
  palette: {
    error: {
      main: STYLE_VARIABLES.CLR_BTN_ERROR_BG_PRIMARY,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontFamily: STYLE_VARIABLES.FONT_FAMILY,
          fontWeight: '600',
          boxShadow: 'none',
          padding: '10px 18px',
          borderRadius: STYLE_VARIABLES.RADIUS_MD,
        },
        containedPrimary: {
          backgroundColor: STYLE_VARIABLES.CLR_BTN_BG_PRIMARY,
          color: '#fff',
          '&:hover': {
            backgroundColor: convertHexToRGBA(
              STYLE_VARIABLES.CLR_BTN_BG_PRIMARY,
              0.9,
            ),
          },
        },
        // containedSecondary: {
        //   backgroundColor: variables.clrSky,
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: convertHexToRGBA(variables.clrSky, 0.9),
        //   },
        // },
        outlinedPrimary: {
          color: STYLE_VARIABLES.CLR_BTN_FG_SECONDARY,
          borderColor: STYLE_VARIABLES.CLR_BTN_BORDER_SECONDARY,
        },
        sizeSmall: {
          height: '36px',
          fontSize: '14px',
          padding: '12px',
        },
        sizeMedium: {
          height: '40px',
        },
        sizeLarge: {
          height: '44px',
        },
      },
    },
  },
});

interface BaseButtonProps extends ButtonProps {}

const BaseButton: React.FunctionComponent<BaseButtonProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{props.children}</Button>
    </ThemeProvider>
  );
};

export default BaseButton;
