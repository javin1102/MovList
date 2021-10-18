import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import commentSlice from "./comment-slice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    comments: commentSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
