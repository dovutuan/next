import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import styled from '@emotion/styled';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';

const CustomTextField = styled(TextField)((params) => {
  const height = params.size === 'small' ? 36 : 44;
  const top = params.size === 'small' ? 0 : -3;

  return {
    '& .MuiFormLabel-root': {
      top,
      color: STYLE_VARIABLES.CLR_TXT_PLACEHOLDER,

      '&.Mui-focused': {
        color: STYLE_VARIABLES.CLR_TXT_PLACEHOLDER,
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'red',
      lineHeight: 1.4,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 5,
    },
    '& .MuiOutlinedInput-root': {
      height,
      backgroundColor: STYLE_VARIABLES.CLR_BG_WHITE,
      '& input': {
        padding: 11,
      },
      '& fieldset': {
        borderColor: STYLE_VARIABLES.CLR_BTN_BORDER_SECONDARY,
        borderWidth: 1,
        borderRadius: STYLE_VARIABLES.RADIUS_MD,
      },
      '&:hover fieldset': {
        borderColor: STYLE_VARIABLES.CLR_BTN_BORDER_SECONDARY,
        borderWidth: 1,
        borderRadius: STYLE_VARIABLES.RADIUS_MD,
      },
      '&.Mui-focused fieldset': {
        borderColor: STYLE_VARIABLES.CLR_BTN_BORDER_SECONDARY,
        borderWidth: 1,
        borderRadius: STYLE_VARIABLES.RADIUS_MD,
      },
    },
  };
});

const AppTextField: React.FC<TextFieldProps> = React.forwardRef(
  (props, ref) => {
    return <CustomTextField inputRef={ref} {...props} />;
  },
) as React.FC<TextFieldProps>;

AppTextField.displayName = 'AppTextField';

export default AppTextField;
