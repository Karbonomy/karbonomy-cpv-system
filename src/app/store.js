import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import certificateReducer from "../features/certificateSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    certificate: certificateReducer
  }
})

export default store;