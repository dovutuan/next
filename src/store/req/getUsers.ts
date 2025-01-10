import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { GetUsersRequest } from '@/types/User.type';

export const initialState = (): GetUsersRequest => ({
  ids: null,
  multi_search: null,
  company_id: 'all',
  per_page: 20,
  page: 1,
});

const store = createSlice({
  name: 'GetUsersRequest',
  initialState: initialState(),
  reducers: {
    initState: () => {
      return initialState();
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
