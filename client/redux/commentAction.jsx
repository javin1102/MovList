import { commentAction } from "./comment-slice";
import { uiAction } from "./ui-slice";
import axios from "axios";

export const postCommentsAction = (data) => {
  return async (dispatch) => {
    const postCommentRequest = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(data);
      const res = await axios.post(`/api/comments`, body, config);
      return res;
    };

    try {
      dispatch(uiAction.setLoading({ loading: true }));
      const postRes = await postCommentRequest();
      const { movieComments } = postRes.data;
      // console.log(movieComments);
      dispatch(commentAction.setComments({ comments: movieComments }));
      dispatch(uiAction.setLoading({ loading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setLoading({ loading: false }));
    }
  };
};

export const getCommentAction = (movieId) => {
  return async (dispatch) => {
    try {
      dispatch(uiAction.setLoading({ loading: true }));
      const getRes = await axios.get("/api/comments", { params: { movieId } });
      const { movieComments } = getRes.data;
      dispatch(commentAction.setComments({ comments: movieComments }));
      dispatch(uiAction.setLoading({ loading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setLoading({ loading: false }));
    }
  };
};

export const deleteCommentAction = (commentId, movieId) => {
  return async (dispatch) => {
    try {
      dispatch(uiAction.setLoading({ loading: true }));
      const deleteRes = await axios.delete(`/api/comments/${commentId}`, {
        params: { movieId },
      });

      dispatch(commentAction.removeComment({ commentId }));
      dispatch(uiAction.setLoading({ loading: false }));
    } catch (err) {
      console.error(err.response.status);
      dispatch(uiAction.setLoading({ loading: false }));
    }
  };
};
