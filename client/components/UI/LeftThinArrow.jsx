const LeftThinArrow = (props) => {
  const {
    sliderRef,
    setCurrentPageNum,
    setCanChangePage,
    canChangePage,
    currentPageNum,
  } = props;

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 z-[1] cursor-pointer -left-10 scale-50 -translate-y-3/4 md:scale-75 lg:scale-100 lg:-left-20"
      onClick={() => {
        if (canChangePage && currentPageNum > 1) {
          sliderRef?.current?.slickPrev();
          setCurrentPageNum((prev) => (prev -= 1));
          //slider is animating, set can change page to false
          setCanChangePage(false);
        }
      }}
    >
      <path
        d="M40 50.6667L21.3333 32L40 13.3333"
        stroke="#E73959"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftThinArrow;
