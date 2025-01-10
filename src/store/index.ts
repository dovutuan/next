import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import entries from 'lodash/entries';
import resReducer from './res';
import appReducer from './app';
import { IIndexable } from '@/types/Generic.type';
import camelCase from 'lodash/camelCase';

let store: any;

type ReducersMap = {
  [key: string]: Reducer<any, any> | ReducersMap | null;
};

const rootReducer: ReducersMap = {
  res: resReducer,
  app: appReducer,
};

let asyncReducers: ReducersMap = {};

export const makeStore = () => {
  store = configureStore({
    reducer: combineReducers(rootReducer),
    devTools: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development',
  });
  return store;
};

export const generateKeyPath = (path: string) => {
  const splits = path.split('/');
  const baseKey = splits[0];
  const childKey = splits
    .slice(1, splits.length)
    .map((item: string) => camelCase(item))
    .join('_');
  return { baseKey, childKey };
};

export const injectReducers = (data: any) => {
  const _reducers: IIndexable = {};
  data.forEach(({ module, reducer }: any) => {
    const { baseKey, childKey } = generateKeyPath(module);
    _reducers[baseKey] = {
      ..._reducers[baseKey],
      [childKey]: reducer,
    };
  });
  Object.assign(asyncReducers, _reducers);
  const storeReducers: IIndexable = {};
  entries(asyncReducers).forEach(([key, value]) => {
    storeReducers[key] = combineReducers(value as ReducersMap);
  });
  store.replaceReducer(
    combineReducers({
      ...rootReducer,
      ...storeReducers,
    }),
  );
};
export const removeAsyncReducers = () => {
  asyncReducers = {};
  store.replaceReducer(combineReducers({ ...rootReducer }));
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
