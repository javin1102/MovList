import AddComment from "./AddComment";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";

const CommentSection = () => {
  return (
    <div className="flex flex-col w-full py-4 md:py-6 lg:py-8">
      <CommentHeader />
      <AddComment />
      <CommentList />
    </div>
  );
};

export default CommentSection;
