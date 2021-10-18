import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  id: "",
  comments: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setUserId: (state, action) => {
      state.id = action.payload.id;
    },
    setComments: (state, action) => {
      state.comments = action.payload.comments;
    },
    addComment: (state, action) => {
      const comment = {
        id: uuidv4(),
        text: action.payload.comment,
      };
      state.comments.unshift(comment);
    },
    removeComment: (state, action) => {
      const { id } = action.payload.id;
      const selectedComment = state.comments.filter(
        (comment) => comment.id !== id
      );
      state.comments = selectedComment;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
