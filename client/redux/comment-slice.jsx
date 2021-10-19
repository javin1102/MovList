import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  comments: [],
  lastComment: {},
  hasFetch: false,
};
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    reset: () => initialState,

    addComment: (state, action) => {
      const { comment } = action.payload;
      state.comments.unshift(comment);
    },
    loadMoreComment: (state, action) => {
      const { comments } = action.payload;
      state.comments = [...state.comments, ...comments];
      state.hasFetch = true;
    },
    removeComment: (state, action) => {
      const { commentId } = action.payload;

      const newComments = state.comments.filter(
        (comment) => comment.commentId !== commentId
      );
      state.comments = newComments;
    },
    setLastComment: (state, action) => {
      state.lastComment = action.payload.lastComment;
    },
  },
});

export const commentAction = commentSlice.actions;
export default commentSlice;
