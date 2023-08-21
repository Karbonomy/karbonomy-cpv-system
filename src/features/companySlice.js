import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  wallet: '',
}

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setLoggedInCompany: (state, action) => {
      const { name, email, wallet } = action.payload;
      state.name = name;
      state.email = email;
      state.wallet = wallet;
    },
    clearLoggedInCompany: (state) => {
      state.email = '';
      state.name = '';
      state.wallet = '';
    }
  }
})

export const { setLoggedInCompany, clearLoggedInCompany } = companySlice.actions;
export default companySlice.reducer;