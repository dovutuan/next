import React from 'react';
import AppTextField from '@/components/common/text-field';
import omit from 'lodash/omit';
import { TextFieldProps } from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import debounce from 'lodash/debounce';
import useLoadModule from '@/hooks/useLoadModule';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '/public/assets/icons/visibility.svg';
import VisibilityOff from '/public/assets/icons/visibility-off.svg';
import { get } from 'lodash';

interface ModuleTextFieldPasswordProps
  extends Omit<TextFieldProps, 'onChange'> {
  module: string;
  path: string;
  trimming?: boolean;
  onChange?: (e: any) => void;
}

const ModuleTextFieldPassword = (props: ModuleTextFieldPasswordProps) => {
  const { _module } = useLoadModule(() => import(`@/store/${props.module}`));
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => get(state, props.module.split('/')));
  const storeValue = React.useMemo(() => {
    return get(state, props.path);
  }, [state]);

  const [showPassword, setShowPassword] = React.useState(false);

  const onChange = (e: any) => {
    if (!_module.current) return;
    dispatch(
      _module.current.actions.setValue({
        path: props.path,
        value: e.target.value,
      }),
    );
    props.onChange?.(e);
  };

  const onBlur = (e: any) => {
    if (!_module.current) return;
    if (props.trimming) {
      dispatch(
        _module.current.actions.setValue({
          path: props.path,
          value: e.target.value.trim(),
        }),
      );
    }
    props.onBlur?.(e);
  };
  // const debouncedOnChange = debounce(onChange, 500);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <AppTextField
      value={storeValue || ''}
      onChange={onChange}
      type={showPassword ? 'text' : 'password'}
      onBlur={onBlur}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        },
        htmlInput: {
          maxLength: 20,
        },
      }}
      {...omit(props, ['module', 'path', 'onChange', 'trimming'])}
    />
  );
};

export default ModuleTextFieldPassword;
