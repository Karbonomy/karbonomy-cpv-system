import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/companySlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer,
  }
})

export default store;