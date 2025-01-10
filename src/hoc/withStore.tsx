'use client';
import { useEffect, useState } from 'react';
import { injectReducers, removeAsyncReducers } from '@/store';
import { OperationIds } from '@/types/OperationIds.type';
import { StoreModuleNames } from '@/types/StoreModules';
import { actions as resActions } from '@/store/res';
import { useAppDispatch } from '@/store/hooks';

const withStore =
  ({
    modules,
    operationIds,
  }: {
    modules?: StoreModuleNames[];
    operationIds?: OperationIds[];
  }) =>
  (Component: any) => {
    return function Wrapper(props: any) {
      const [storeInitDone, setStoreInitDone] = useState(false);
      const dispatch = useAppDispatch();
      const _operationIds = operationIds ?? [];
      const _modules = modules ?? [];
      const storeModules: any = [];

      useEffect(() => {
        initStore();
        return cleanUp;
      }, []);

      const initStore = () => {
        dispatch(
          resActions.initDefaultResItem({ operationIds: _operationIds }),
        );
        Promise.all(
          _modules.map(async (module: string) => {
            const data: any = await import(`@/store/${module}`);
            storeModules.push(data);
            return { module, reducer: data.default };
          }),
        ).then((res) => {
          injectReducers(res);
          setStoreInitDone(true);
        });
      };

      const cleanUp = () => {
        removeAsyncReducers();
        storeModules.forEach((module: any) => {
          dispatch(module.actions.initState());
        });
        dispatch(
          resActions.removeKeysFromObject({
            operationIds: _operationIds,
          }),
        );
      };

      if (storeInitDone) {
        return <Component {...props} />;
      } else {
        return null;
      }
    };
  };

export default withStore;
