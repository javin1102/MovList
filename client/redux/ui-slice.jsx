import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlay: false,
  modal: {
    isOpen: false,
    commentId: "",
  },
  getLoading: false,
  postLoading: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    resetModal: (state) => {
      state.modal = { isOpen: false, commentId: "" };
    },

    setModal: (state, action) => {
      state.modal = action.payload.modal;
    },
    setGetLoading: (state, action) => {
      state.getLoading = action.payload.getLoading;
    },
    setPostLoading: (state, action) => {
      state.postLoading = action.payload.postLoading;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
