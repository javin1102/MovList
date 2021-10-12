import H2 from "../UI/H2";
import P from "../UI/P";

const CommentHeader = () => {
  return (
    <div className="flex w-full">
      <H2>Give us your reviews</H2>
      <P className="ml-auto">5 review(s)</P>
    </div>
  );
};

export default CommentHeader;
