import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setValue } from '@/utils/storeHelpers';
import { SetValueParams } from '@/types/StoreActions.type';
import { GetDiagnosesRequest } from '@/types/Diagnosis.type';

const initialState = (): GetDiagnosesRequest => ({
  perPage: 20,
  page: 1,
  company_id: null,
});

const store = createSlice({
  name: 'GetDiagnosesRequest',
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
