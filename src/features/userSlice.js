import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  wallet: '',
  isConnected: false
}

const userSlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      const { name, email, wallet } = action.payload;
      state.name = name;
      state.email = email;
      state.wallet = wallet;
      state.isConnected = true
    },
    clearLoggedInUser: (state) => {
      state.email = '';
      state.name = '';
      state.wallet = '';
      state.isConnected = false
    }
  }
})

export const { setLoggedInUser, clearLoggedInUser } = userSlice.actions;
export default userSlice.reducer;