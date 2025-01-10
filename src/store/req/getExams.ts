import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { GetExamsRequest } from '@/types/ExaminationData.type';
import { PER_PAGE } from '@/constants/Common';

export const initialState = (): GetExamsRequest => ({
  ids: null,
  search: null,
  company_id: 'all',
  per_page: PER_PAGE,
  page: 1,
});

const store = createSlice({
  name: 'GetExamsRequest',
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
