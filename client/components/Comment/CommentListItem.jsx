import H3 from "../UI/H3";
import P from "../UI/P";
import CommentProfilePic from "./CommentProfilePic";

const CommentListItem = () => {
  return (
    <div className="flex flex-row w-full mb-12">
      <CommentProfilePic />
      <div className="flex flex-col ml-2 mt-1 md:ml-3 lg:ml-4">
        <H3>Javin</H3>
        <P className="text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          provident laboriosam dolores architecto saepe ex nesciunt atque labore
          optio? Fugiat temporibus provident, a commodi nostrum libero sunt
          ducimus accusamus repellendus.
        </P>
      </div>
    </div>
  );
};

export default CommentListItem;
