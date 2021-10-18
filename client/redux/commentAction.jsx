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
      console.log(movieComments);
      dispatch(commentAction.setComments({ comments: movieComments }));
    } catch (err) {
      console.error(err.response.status);
    }
  };
};

export const getCommentAction = ({ id }) => {
  return async (dispatch) => {
    try {
      const getRes = await axios.get("/api/comments", { params: { id } });
      const { movieComments } = getRes.data;
      dispatch(commentAction.setComments({ comments: movieComments }));
    } catch (err) {
      console.error(err.response.status);
    }
  };
};

export const deleteCommentAction = (commentId) => {
  return async (dispatch) => {
    try {
      const deleteRes = await axios.delete(`/comments/${commentId}`);
    } catch (err) {
      console.error(err.response.status);
    }
  };
};
