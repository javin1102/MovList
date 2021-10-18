import CommentListItem from "./CommentListItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCommentAction } from "../../redux/commentAction";
import { useEffect } from "react";
const CommentList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { comments } = useSelector((state) => state.comments);
  console.log(comments);
  useEffect(() => {
    dispatch(getCommentAction({ id }));
  }, [id]);

  return (
    <div className="w-full mt-8">
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <CommentListItem key={id} comment={comment} />
        ))}
      {/* <CommentListItem />
      <CommentListItem />
      <CommentListItem /> */}
    </div>
  );
};

export default CommentList;
