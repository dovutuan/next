import React from 'react';
import Select, { BaseSelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import { Option } from '@/types/Common.type';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import FormHelperText from '@mui/material/FormHelperText';
import ArrowDownRoundedIcon from '/public/assets/icons/arrow-down-rounded.svg';

export interface AppSelectProps extends BaseSelectProps {
  options: Option[];
  disabled?: boolean;
  helpertext?: string;
}

const StyledSelect = styled(Select)((params) => {
  const height = params.size === 'small' ? 36 : 44;

  return {
    height,
    backgroundColor: STYLE_VARIABLES.CLR_BG_WHITE,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: STYLE_VARIABLES.CLR_BORDER_PRIMARY,
      borderWidth: 1,
      borderRadius: STYLE_VARIABLES.RADIUS_MD,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: STYLE_VARIABLES.CLR_BORDER_PRIMARY,
      borderWidth: 1,
      borderRadius: STYLE_VARIABLES.RADIUS_MD,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: STYLE_VARIABLES.CLR_BORDER_PRIMARY,
      borderWidth: 1,
      borderRadius: STYLE_VARIABLES.RADIUS_MD,
    },
    '&.Mui-disabled .MuiSelect-select': {
      backgroundColor: STYLE_VARIABLES.CLR_BG_TERTIARY,
      borderColor: STYLE_VARIABLES.CLR_BORDER_PRIMARY,
      borderWidth: 1,
      height: '100%',
      padding: 0,
    },
    '& .MuiSelect-select': {
      borderColor: STYLE_VARIABLES.CLR_BORDER_PRIMARY,
    },
  };
});

const AppSelect: React.FC<AppSelectProps> = (props) => {
  const inputLabelTop = props.size === 'small' ? -7 : -3;
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [selectWidth, setSelectWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (selectRef.current) {
      setSelectWidth(selectRef.current.offsetWidth);
    }
  }, [selectRef]);

  return (
    <FormControl
      fullWidth
      variant="outlined"
      disabled={props.disabled}
      error={props.error}
      sx={{ maxWidth: selectWidth ? `${selectWidth}px` : 'auto' }}
    >
      <InputLabel
        sx={{
          top: inputLabelTop,
          '&.Mui-focused': {
            color: STYLE_VARIABLES.CLR_TXT_PLACEHOLDER,
          },
        }}
      >
        {props.label}
      </InputLabel>
      <StyledSelect
        ref={selectRef}
        {...props}
        IconComponent={ArrowDownRoundedIcon}
        fullWidth
      >
        {props.options?.map((option) => (
          <MenuItem
            sx={{ maxWidth: selectWidth }}
            key={option.value}
            value={option.value!}
          >
            <div className="truncate">{option.label}</div>
          </MenuItem>
        ))}
      </StyledSelect>
      {props.error && props.helpertext && (
        <FormHelperText sx={{ marginLeft: 0, minHeight: 24 }}>
          {props.helpertext}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default AppSelect;
