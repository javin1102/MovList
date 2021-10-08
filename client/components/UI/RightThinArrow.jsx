const RightThinArrow = (props) => {
  const {
    sliderRef,
    setCurrentPageNum,
    setCanChangePage,
    canChangePage,
    totalPageNum,
    currentPageNum,
  } = props;

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 z-[1] cursor-pointer -right-10 scale-50 -translate-y-3/4 md:scale-75 lg:scale-100 lg:-right-20"
      onClick={() => {
        if (canChangePage && currentPageNum < totalPageNum) {
          sliderRef?.current?.slickNext();
          setCurrentPageNum((prev) => (prev += 1));
          //slider is animating, set can change page to false
          setCanChangePage(false);
        }
      }}
    >
      <path
        d="M24 13.3333L42.6667 32L24 50.6667"
        stroke="#E73959"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightThinArrow;
