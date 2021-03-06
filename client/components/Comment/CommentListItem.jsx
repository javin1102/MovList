import H3 from "../UI/H3";
import P from "../UI/P";
import CommentProfilePic from "./CommentProfilePic";
import Image from "next/image";
import Trash from "../../public/svg/trash.svg";
import { timeSince } from "../../utils/IntervalDateFormat";
import { useDispatch } from "react-redux";
import { uiAction } from "../../redux/ui-slice";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import Modal from "../UI/Modal";
import React, { useMemo } from "react";

const CommentListItem = ({ comment }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const date = useMemo(() => timeSince(comment.date), [comment.date]);
  const [session] = useSession();
  return (
    <div className="flex flex-row w-full mb-12">
      {modal.isOpen && <Modal />}
      <CommentProfilePic src={comment.userImgSrc} />
      <div className="flex w-full flex-col ml-2 mt-1 md:ml-3 lg:ml-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <h4 className="w-[fit-content] font-bold">{comment.username}</h4>
            <p className="ml-3 text-xs text-gray">{date} ago</p>
          </div>
          {session && session.user.id == comment.userId && (
            <Image
              className="cursor-pointer"
              src={Trash}
              layout="fixed"
              width={20}
              height={20}
              onClick={() => {
                const modal = { isOpen: true, commentId: comment.commentId };
                dispatch(uiAction.setModal({ modal }));
              }}
            />
          )}
        </div>

        <P>{comment.text}</P>
      </div>
    </div>
  );
};

export default CommentListItem;
