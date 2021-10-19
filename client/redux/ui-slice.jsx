import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlay: false,
  modal: {
    isOpen: false,
    commentId: "",
  },
  loading: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    resetModal: (state) => {
      state.modal = { isOpen: false, commentId: "" };
    },
    setOverlay: (state, action) => {
      state.overlay = action.payload.overlay;
    },
    setModal: (state, action) => {
      state.modal = action.payload.modal;
    },
    setOverlay: (state, action) => {
      state.loading = action.payload.loading;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
