import { useState } from "react";
import Button from "../UI/Button";
import CommentProfilePic from "./CommentProfilePic";

const AddComment = () => {
  const [canShowButton, setCanShowButton] = useState(false);
  const ButtonBlock = (
    <div className="w-[fit-content] font-poppins  ml-auto mt-3">
      <span className="text-black font-medium mr-3 md:mr-5 lg:mr-8 cursor-pointer active:text-gray">
        Cancel
      </span>
      <Button>Add Review</Button>
    </div>
  );
  const textAreaHeightHandler = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div className="flex w-full mt-8 overflow-hidden">
      <CommentProfilePic />
      <form className="w-full mt-2 text-xs md:text-sm ml-4 overflow-hidden">
        <textarea
          rows={1}
          placeholder="Add your review...."
          className="resize-none border-b-[2px] h-[fit-content] pb-2 border-primary outline-none focus:outline-none w-full ml-5 font-normal"
          onFocus={() => setCanShowButton(true)}
          onBlur={() => setCanShowButton(false)}
          onChange={textAreaHeightHandler}
        />
        {canShowButton && ButtonBlock}
      </form>
    </div>
  );
};

export default AddComment;
