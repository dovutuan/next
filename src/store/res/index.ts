import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addKeysToObject,
  removeKeysFromObject,
  setValue,
} from '@/utils/storeHelpers';
import {
  AddKeysToObjectParams,
  InitDefaultResItemParams,
  SetValueParams,
} from '@/types/StoreActions.type';
import { OperationIds } from '@/types/OperationIds.type';
import { BaseAPIResponse } from '@/types/BaseApi.type';

export type ResModuleItem = {
  response: BaseAPIResponse | null;
  status: number | null;
};

type StoreState = {
  [key in OperationIds]?: ResModuleItem;
};
export const defaultResponse = () => ({
  response: null,
  status: null,
});
const initialState = (): StoreState => ({
  [OperationIds.CURRENT_ADMIN]: defaultResponse(),
});

const responses = createSlice({
  name: 'Responses',
  initialState: initialState(),
  reducers: {
    setValue: (state, action: PayloadAction<SetValueParams>) => {
      setValue({
        state,
        path: action.payload.path,
        value: action.payload.value,
      });
    },
    initDefaultResItem: (
      state,
      action: PayloadAction<InitDefaultResItemParams>,
    ) => {
      const data = action.payload.operationIds.map(
        (operationId: OperationIds) => {
          return {
            path: operationId,
            value: defaultResponse(),
          };
        },
      );
      addKeysToObject({ state, data });
    },
    removeKeysFromObject: (
      state,
      action: PayloadAction<InitDefaultResItemParams>,
    ) => {
      removeKeysFromObject({ state, paths: action.payload.operationIds });
    },
    addKeysToObject: (
      state,
      action: PayloadAction<AddKeysToObjectParams<ResModuleItem>>,
    ) => {
      addKeysToObject({ state, data: action.payload.data });
    },
  },
  extraReducers: () => {},
});

export const actions = responses.actions;
export default responses.reducer;
