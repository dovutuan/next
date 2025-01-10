'use client';
import BaseSelect, { AppSelectProps } from '@/components/common/select';
import * as React from 'react';
import omit from 'lodash/omit';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { SelectChangeEvent } from '@mui/material';
import useLoadModule from '@/hooks/useLoadModule';
import get from 'lodash/get';

interface ModuleBaseSelectProps extends Omit<AppSelectProps, 'onChange'> {
  module: string;
  path: string;
  onChange?: (event: any) => void;
}

const ModuleBaseSelect: React.FunctionComponent<ModuleBaseSelectProps> = (
  props,
) => {
  const { _module } = useLoadModule(() => import(`@/store/${props.module}`));
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => get(state, props.module.split('/')));
  const storeValue = React.useMemo(() => {
    return get(state, props.path);
  }, [state]);

  const onChange = (event: SelectChangeEvent<unknown>) => {
    if (!_module.current) return;
    dispatch(
      _module.current.actions.setValue({
        path: props.path,
        value: event.target.value,
      }),
    );
    props.onChange?.(event);
  };

  return (
    <BaseSelect
      value={storeValue || ''}
      onChange={onChange}
      {...omit(props, ['module', 'path', 'onChange'])}
    />
  );
};

export default ModuleBaseSelect;
