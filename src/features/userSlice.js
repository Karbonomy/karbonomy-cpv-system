import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  wallet: '',
  isConnected: false,
  carbonAmount: 0,
  projectSharded: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      const { name, email, wallet } = action.payload;
      state.name = name;
      state.email = email;
      state.wallet = wallet;
      state.isConnected = true;
    },
    updateCarbonAmount: (state, action) => {
      state.carbonAmount += action.payload;
    },
    updateProjectSharded: (state, action) => {
      if (!state.projectSharded.includes(action.payload)) {
        state.projectSharded.push(action.payload)
      }
    },
    isProjectSharded: (state, action) => {
      return state.projectSharded.includes(action.payload);
    },
    clearLoggedInUser: (state) => {
      state.email = '';
      state.name = '';
      state.wallet = '';
      state.isConnected = false;
    }
  }
})

export const {
  setLoggedInUser,
  updateCarbonAmount,
  updateProjectSharded,
  isProjectSharded,
  clearLoggedInUser
} = userSlice.actions;
export default userSlice.reducer;