import H3 from "../UI/H3";
import P from "../UI/P";
import CommentProfilePic from "./CommentProfilePic";
import Image from "next/image";
import Trash from "../../public/svg/trash.svg";
const CommentListItem = ({ comment }) => {
  return (
    <div className="flex flex-row w-full mb-12">
      <CommentProfilePic src={comment.userImgSrc} />
      <div className="flex w-full flex-col ml-2 mt-1 md:ml-3 lg:ml-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <H3 className="w-[fit-content]">{comment.username}</H3>
            <P className="ml-3 lg:text-xs">3 minutes ago</P>
          </div>
          <Image
            className="cursor-pointer"
            src={Trash}
            layout="fixed"
            width={20}
            height={20}
          />
        </div>

        <P>{comment.text}</P>
      </div>
    </div>
  );
};

export default CommentListItem;
