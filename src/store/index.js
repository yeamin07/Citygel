import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/adsPostSlice";
const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});

export default store;
