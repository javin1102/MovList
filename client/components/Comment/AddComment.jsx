import { useEffect, useState } from "react";
import { postCommentsAction } from "../../redux/commentAction";
import { useDispatch } from "react-redux";
import { useSession, signIn } from "next-auth/client";
import { v4 as uuid } from "uuid";
import Button from "../UI/Button";
import CommentProfilePic from "./CommentProfilePic";
import { useRouter } from "next/router";
const AddComment = () => {
  const [canShowButton, setCanShowButton] = useState(false);
  const [isAbleToSubmit, setIsAbleToSubmit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [session] = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const ButtonBlock = (
    <div className="w-[fit-content] font-poppins  ml-auto mt-3">
      <span
        className="text-black font-medium mr-3 md:mr-5 lg:mr-8 cursor-pointer active:text-gray"
        onClick={() => setCanShowButton(false)}
      >
        Cancel
      </span>
      <Button isAbleToSubmit={isAbleToSubmit}>Add Review</Button>
    </div>
  );
  const textAreaHeightHandler = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  const textAreaHandler = (e) => {
    textAreaHeightHandler(e);
    setInputValue(e.target.value);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    dispatch(
      postCommentsAction({
        commentId: uuid(),
        userId: session.user.id,
        username: session.user.name,
        userImgSrc: session.user.image,
        text: `${inputValue}`,
        movieId: id,
        date: Date.now(),
      })
    );
    setCanShowButton(false);
    setInputValue("");
  };

  useEffect(() => {
    if (inputValue !== "") setIsAbleToSubmit(true);
    else setIsAbleToSubmit(false);
  }, [inputValue]);

  return (
    <div className="flex w-full mt-8 overflow-hidden">
      <CommentProfilePic src={session && session.user.image} />
      <form
        className="w-full mt-2 text-xs md:text-sm overflow-hidden"
        onSubmit={onSubmitComment}
      >
        <textarea
          rows={1}
          placeholder="Add your review...."
          className="resize-none border-b-[2px] h-[fit-content] pb-2 border-primary outline-none focus:outline-none w-full ml-5 font-normal"
          onFocus={() => {
            !session && signIn("google");
            setCanShowButton(true);
          }}
          onChange={textAreaHandler}
          value={inputValue}
        />
        {canShowButton && ButtonBlock}
      </form>
    </div>
  );
};

export default AddComment;
