import { IIndexable } from '@/types/Generic.type';
import { StoreModuleNames } from '@/types/StoreModules';
import has from 'lodash/has';
import set from 'lodash/set';
import get from 'lodash/get';
import { useAppDispatch } from '@/store/hooks';

const modules: IIndexable = {};
const useHandleStoreModule = (hookModuleName?: StoreModuleNames) => {
  const dispatch = useAppDispatch();
  const getModule = async (moduleName: StoreModuleNames) => {
    if (!has(modules, moduleName)) {
      const moduleContent: any = await import(`@/store/${moduleName}`);
      set(modules, moduleName, moduleContent);
    }
    return get(modules, moduleName);
  };

  const setValue = async ({
    path,
    value,
    moduleName,
  }: {
    path?: string;
    value: any;
    moduleName?: StoreModuleNames;
  }) => {
    const _moduleName = hookModuleName ?? moduleName;
    if (!_moduleName) throw new Error('No module name');
    const moduleContent = await getModule(_moduleName);
    dispatch(moduleContent.actions.setValue({ path, value }));
  };

  const initState = async (moduleName?: StoreModuleNames) => {
    const _moduleName = hookModuleName ?? moduleName;
    if (!_moduleName) throw new Error('No module name');
    const moduleContent = await getModule(_moduleName);
    dispatch(moduleContent.actions.initState());
  };

  return { setValue, initState };
};

export default useHandleStoreModule;
