import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  comments: [],
};
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    reset: () => initialState,
    setComments: (state, action) => {
      state.comments = action.payload.comments;
    },
    addComment: (state, action) => {
      const comment = {
        commentId: uuidv4(),
        username: action.payload.username,
        userId: action.payload.userId,
        userImgSrc: action.payload.src,
        text: action.payload.comment,
        movieId: action.payload.movieId,
        date: Date.now(),
      };
      state.comments.unshift(comment);
    },
    removeComment: (state, action) => {
      const { commentId } = action.payload;
      console.log(commentId);
      const newComments = state.comments.filter(
        (comment) => comment.commentId !== commentId
      );
      state.comments = newComments;
    },
  },
});

export const commentAction = commentSlice.actions;
export default commentSlice;
