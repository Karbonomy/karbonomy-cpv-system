import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/companySlice";
import userReducer from "../features/userSlice";
import certificateReducer from "../features/certificateSlice"

const store = configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer,
    certificate: certificateReducer
  }
})

export default store;