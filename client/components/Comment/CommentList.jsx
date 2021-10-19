import CommentListItem from "./CommentListItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCommentAction } from "../../redux/commentAction";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
const CommentList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [firstLoadPage, setFirstLoadPage] = useState(true);
  const { id: movieId } = router.query;
  const { comments } = useSelector((state) => state.comments);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    //if change page, then first time load comment
    setFirstLoadPage(true);
    dispatch(getCommentAction(movieId));
  }, [movieId]);

  useEffect(() => {
    //after comment loaded, first time load is false
    if (!loading) setFirstLoadPage(false);
  }, [loading]);
  return (
    <div className="w-full mt-8">
      {/* only show loading bar when first time load */}
      {loading && (
        <div className="mx-auto w-[fit-content]">
          <Loader type="ThreeDots" color="#000000" height={50} width={50} />
        </div>
      )}
      {/* not first load then show all comment */}
      {!firstLoadPage &&
        comments.length > 0 &&
        comments.map((comment, id) => (
          <CommentListItem key={id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentList;
