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
import { AppModuleStates } from '@/types/AppModule.type';

const states = (): AppModuleStates => ({
  modals: [],
  snackBars: [],
  isSidebarOpen: true,
});

const app = createSlice({
  name: 'App',
  initialState: states(),
  reducers: {
    addToList: (state, action: PayloadAction<AddToListParams>) => {
      addToList({
        state,
        path: action.payload.path,
        value: action.payload.value,
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

export const actions = app.actions;
export default app.reducer;
