import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  wallet: '',
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
    },
    clearLoggedInUser: (state) => {
      state.email = '';
      state.name = '';
      state.wallet = '';
    }
  }
})

export const { setLoggedInUser, clearLoggedInUser } = userSlice.actions;
export default userSlice.reducer;