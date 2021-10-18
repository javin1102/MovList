import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  profImgSrc: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setUserId: (state, action) => {
      state.id = action.payload.id;
    },
    setProfImgSrc: (state, action) => {
      state.profImgSrc = action.payload.src;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
