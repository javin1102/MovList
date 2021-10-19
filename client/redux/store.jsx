import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import commentSlice from "./comment-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    comments: commentSlice.reducer,
    ui: uiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
