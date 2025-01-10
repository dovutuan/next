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

interface StoreState {
  isClicked: boolean;
}
type State = StoreState | null;
const initialState = (): StoreState => ({
  isClicked: false,
});

const resetPasswordStore = createSlice({
  name: 'ResetPasswordStore',
  initialState: null as State,
  reducers: {
    initState: () => {
      return initialState();
    },
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
    resetState: () => {
      return null;
    },
  },
  extraReducers: () => {},
});

export const actions = resetPasswordStore.actions;
export default resetPasswordStore.reducer;
