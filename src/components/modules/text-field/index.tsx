import React from 'react';
import AppTextField from '@/components/common/text-field';
import omit from 'lodash/omit';
import { TextFieldProps } from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useLoadModule from '@/hooks/useLoadModule';
import { get } from 'lodash';

interface ModuleTextFieldProps
  extends Omit<TextFieldProps, 'onChange' | 'onBlur'> {
  module: string;
  path: string;
  onChange?: (e: any) => void;
  trimming?: boolean;
  onBlur?: (e: any) => void;
}

const ModuleTextField = (props: ModuleTextFieldProps) => {
  const { _module } = useLoadModule(() => import(`@/store/${props.module}`));
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => get(state, props.module.split('/')));
  const storeValue = React.useMemo(() => {
    return get(state, props.path);
  }, [state]);

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

  return (
    <AppTextField
      value={storeValue || ''}
      onChange={onChange}
      onBlur={onBlur}
      slotProps={{
        htmlInput: {
          maxLength: 100,
        },
      }}
      {...omit(props, ['module', 'path', 'onChange', 'onBlur', 'trimming'])}
    />
  );
};

export default ModuleTextField;
