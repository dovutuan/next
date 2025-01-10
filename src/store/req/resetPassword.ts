import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { ResetPasswordRequest } from '@/types/Request.type';

const initialState = (): ResetPasswordRequest => ({
  password: '',
  password_confirmation: '',
});

const store = createSlice({
  name: 'ResetPasswordRequest',
  initialState: initialState,
  reducers: {
    initState: () => initialState(),
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
