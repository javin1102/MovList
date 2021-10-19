import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCommentAction } from "../../redux/commentAction";

import useInView from "react-cool-inview";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { commentAction } from "../../redux/comment-slice";

const CommentListItem = dynamic(() => import("./CommentListItem"));

const CommentList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id: movieId } = router.query;
  const { comments, lastComment, hasFetch } = useSelector(
    (state) => state.comments
  );
  const { getLoading, postLoading } = useSelector((state) => state.ui);

  const { observe } = useInView({
    threshold: 1,
    onEnter: () => {
      if (
        hasFetch &&
        (comments.length === 0 ||
          comments[comments.length - 1].commentId === lastComment.commentId)
      )
        return;
      console.log("fetch data ");
      if (!getLoading) {
        dispatch(getCommentAction(movieId, comments.length));
      }
    },
  });

  useEffect(() => {
    //Reset comment list if change page
    dispatch(commentAction.reset());
  }, [movieId]);

  return (
    <div className="w-full mt-8">
      {postLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.8)] z-30">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[fit-content]">
            <Loader type="TailSpin" color="#ffffff" height={30} width={30} />
          </div>
        </div>
      )}
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <CommentListItem key={id} comment={comment} />
        ))}

      {getLoading && (
        <div className="mx-auto w-[fit-content]">
          <Loader type="ThreeDots" color="#000000" height={50} width={50} />
        </div>
      )}
      <div className="h-20" ref={observe}></div>
    </div>
  );
};

export default CommentList;
