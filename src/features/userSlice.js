import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  wallet: '',
  isConnected: false,
  carbonAmount: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      const { name, email, wallet, carbonAmount } = action.payload;
      state.name = name;
      state.email = email;
      state.wallet = wallet;
      state.isConnected = true;
      state.carbonAmount = carbonAmount;
    },
    clearLoggedInUser: (state) => {
      state.email = '';
      state.name = '';
      state.wallet = '';
      state.isConnected = false;
      state.carbonAmount = 0;
    }
  }
})

export const { setLoggedInUser, clearLoggedInUser } = userSlice.actions;
export default userSlice.reducer;