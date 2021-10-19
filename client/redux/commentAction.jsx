import { commentAction } from "./comment-slice";
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
      const postRes = await postCommentRequest();
      const { movieComments } = postRes.data;
      // console.log(movieComments);
      dispatch(commentAction.setComments({ comments: movieComments }));
    } catch (err) {
      console.error(err.response.status);
    }
  };
};

export const getCommentAction = (movieId) => {
  return async (dispatch) => {
    try {
      const getRes = await axios.get("/api/comments", { params: { movieId } });
      const { movieComments } = getRes.data;
      dispatch(commentAction.setComments({ comments: movieComments }));
    } catch (err) {
      console.error(err.response.status);
    }
  };
};

export const deleteCommentAction = (commentId, movieId) => {
  return async (dispatch) => {
    try {
      const deleteRes = await axios.delete(`/api/comments/${commentId}`, {
        params: { movieId },
      });
      console.log(deleteRes);
      dispatch(commentAction.removeComment({ commentId }));
    } catch (err) {
      console.error(err.response.status);
    }
  };
};
