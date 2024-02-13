import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/userDetailsSlice";

const store = configureStore({
  reducer: {
    user: userDetailsReducer,
  },
});

export default store;
