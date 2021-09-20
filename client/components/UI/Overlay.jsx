const Overlay = ({ isOpenHamburger, isClickSearch }) => {
  const overlayController =
    isOpenHamburger || isClickSearch ? "block" : "hidden";
  return (
    <div
      className={`${overlayController} fixed top-0 left-0 h-screen bg-[rgba(0,0,0,0.8)] w-full z-10`}
    ></div>
  );
};

export default Overlay;
