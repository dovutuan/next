import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { CreateCompanyRequest } from '@/types/Company.type';

const initialState = (): CreateCompanyRequest => ({
  name: '',
  industry_id: null,
  first_name: '',
  first_name_kana: '',
  last_name: '',
  last_name_kana: '',
  email: '',
  sector_id: null,
});

export const store = createSlice({
  name: 'CreateCompanyRequest',
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
