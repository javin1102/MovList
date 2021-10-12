import Button from "../UI/Button";
import CommentProfilePic from "./CommentProfilePic";

const AddComment = () => {
  return (
    <div className="flex w-full mt-8 overflow-hidden">
      <CommentProfilePic />
      <form className="w-full mt-2 text-xs md:text-sm ml-auto overflow-hidden">
        <textarea
          rows={1}
          placeholder="Add your review...."
          className="resize-none border-b-[2px] h-[fit-content] pb-2  border-primary outline-none focus:outline-none w-full ml-5 font-normal"
        />
        <div className="w-[fit-content] font-poppins  ml-auto mt-3">
          <span className="text-black font-medium mr-3 md:mr-5 lg:mr-8 cursor-pointer active:text-gray">
            Cancel
          </span>
          <Button>Add Review</Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
