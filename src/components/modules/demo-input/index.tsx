import DemoInput, { DemoInputProps } from '@/components/common/demo-input';
import * as React from 'react';
import omit from 'lodash/omit';
import { useAppDispatch } from '@/store/hooks';
import debounce from 'lodash/debounce';

interface ModuleDemoInputProps extends DemoInputProps {
  module: string;
  path: string;
  onChange?: () => void;
}

const ModuleDemoInput: React.FunctionComponent<ModuleDemoInputProps> = (
  props,
) => {
  const _module = React.useRef<any>(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    loadModule();
  }, []);

  const loadModule = async () => {
    _module.current = await import(`@/store/${props.module}`);
  };

  const onChange = (e: any) => {
    if (!_module.current) return;
    dispatch(
      _module.current.actions.setValue({
        path: props.path,
        value: e.target.value,
      }),
    );
    props.onChange?.();
  };
  const debouncedOnChange = debounce(onChange, 500);

  return (
    <DemoInput
      {...omit(props, ['module', 'path', 'onChange'])}
      onChange={debouncedOnChange}
    />
  );
};

export default ModuleDemoInput;
