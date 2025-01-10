import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addToList,
  removeFromListByIndex,
  removeItemFromList,
  setValue,
} from '@/utils/storeHelpers';
import {
  AddToListParams,
  RemoveFromListParams,
  RemoveItemInListParams,
  SetValueParams,
} from '@/types/StoreActions.type';
import { OperationIds } from '@/types/OperationIds.type';
import { IIndexable } from '@/types/Generic.type';

type ValidateState = {
  [key in OperationIds]?: IIndexable;
};
const initialState = (): ValidateState => ({
  [OperationIds.CREATE_COMPANY]: {},
});

const store = createSlice({
  name: 'ValidationStore',
  initialState: initialState(),
  reducers: {
    addToList: (state, action: PayloadAction<AddToListParams>) => {
      addToList({
        state,
        path: action.payload.path,
        value: action.payload.value,
        index: action.payload.index,
      });
    },
    removeInListByIndex: (
      state,
      action: PayloadAction<RemoveFromListParams>,
    ) => {
      removeFromListByIndex({
        state,
        path: action.payload.path,
        index: action.payload.index,
      });
    },
    removeItemInList: (
      state,
      action: PayloadAction<RemoveItemInListParams>,
    ) => {
      removeItemFromList({
        state,
        path: action.payload.path,
        value: action.payload.value,
      });
    },
    setValue: (state, action: PayloadAction<SetValueParams>) => {
      setValue({
        state,
        path: action.payload.path,
        value: action.payload.value,
      });
    },
  },
  extraReducers: () => {},
});

export const actions = store.actions;
export default store.reducer;
