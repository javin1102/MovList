import { commentAction } from "./comment-slice";
import { uiAction } from "./ui-slice";
import axios from "axios";

export const postCommentsAction = (comment) => {
  return async (dispatch) => {
    const postCommentRequest = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(comment);
      const res = await axios.post(`/api/comments`, body, config);
      return res;
    };

    try {
      dispatch(uiAction.setPostLoading({ postLoading: true }));
      await postCommentRequest();
      dispatch(commentAction.addComment({ comment }));
      dispatch(uiAction.setPostLoading({ postLoading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setPostLoading({ postLoading: false }));
    }
  };
};

export const getCommentAction = (movieId, length) => {
  return async (dispatch) => {
    try {
      dispatch(uiAction.setGetLoading({ getLoading: true }));
      const getRes = await axios.get("/api/comments", {
        params: { movieId, length },
      });

      const { movieComments, lastComment } = getRes.data;

      dispatch(commentAction.loadMoreComment({ comments: movieComments }));
      dispatch(commentAction.setLastComment({ lastComment }));
      dispatch(uiAction.setGetLoading({ getLoading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setGetLoading({ getLoading: false }));
    }
  };
};

export const deleteCommentAction = (commentId, movieId) => {
  return async (dispatch) => {
    try {
      dispatch(uiAction.setPostLoading({ postLoading: true }));
      await axios.delete(`/api/comments/${commentId}`, {
        params: { movieId },
      });

      dispatch(commentAction.removeComment({ commentId }));
      dispatch(uiAction.setPostLoading({ postLoading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setPostLoading({ postLoading: false }));
    }
  };
};
