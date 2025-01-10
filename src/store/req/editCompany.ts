import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { CreateCompanyRequest } from '@/types/Company.type';

const initialState = (): Partial<CreateCompanyRequest> => ({
  name: '',
  industry_id: null,
  sector_id: null,
  email: '',
});

export const store = createSlice({
  name: 'EditCompanyRequest',
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
