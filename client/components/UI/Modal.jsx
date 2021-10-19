import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { uiAction } from "../../redux/ui-slice";
import Overlay from "./Overlay";

export const Modal = () => {
  const [isClickOverlay, setIsClickOverlay] = useState(false);
  const portalEl = document.getElementById("modal");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isClickOverlay) {
      dispatch(uiAction.setModal({ modal: false }));
    }
  }, [isClickOverlay]);
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Overlay
            setIsClickOverlay={setIsClickOverlay}
            bgColor={`bg-[rgba(0,0,0,0.2)]`}
          />
          <div className="fixed w-3/4 top-1/2 left-1/2 bg-white rounded-lg flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 font-poppins px-6 md:px-12 py-6 z-30 lg:w-max">
            <h1 className="font-bold text-lg text-red-600">Delete Comment</h1>
            <p className="font-normal text-xs md:text-sm lg:text-base mt-3">
              Are you sure you want to delete the comment?
            </p>
            <div className="ml-auto mt-8 ">
              <span
                className="text-black font-medium mr-3 md:mr-5 text-xs sm:text-sm md:text-base lg:mr-8 cursor-pointer active:text-gray"
                onClick={() => dispatch(uiAction.setModal({ modal: false }))}
              >
                Cancel
              </span>
              <Button
                isAbleToSubmit={true}
                onClick={() => dispatch(uiAction.setModal({ modal: false }))}
              >
                Delete
              </Button>
            </div>
          </div>
        </>,
        portalEl
      )}
    </>
  );
};

export default Modal;
