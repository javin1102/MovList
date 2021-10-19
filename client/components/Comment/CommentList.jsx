import CommentListItem from "./CommentListItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCommentAction } from "../../redux/commentAction";
import { useEffect } from "react";
const CommentList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id: movieId } = router.query;
  const { comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getCommentAction(movieId));
  }, [movieId]);

  return (
    <div className="w-full mt-8">
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <CommentListItem key={id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentList;
