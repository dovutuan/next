import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { GetCompaniesRequest } from '@/types/Company.type';

export const initialState = (): GetCompaniesRequest => ({
  per_page: 20,
  page: 1,
});

const store = createSlice({
  name: 'GetCompaniesRequest',
  initialState: initialState(),
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
