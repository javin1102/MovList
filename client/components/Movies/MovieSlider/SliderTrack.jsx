// import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import LeftArrow from "../../UI/LeftThinArrow";
import RightArrow from "../../UI/RightThinArrow";
import { useRef } from "react";

const SliderTrack = ({
  movies,
  slidesShowNum,
  setCurrentPageNum,
  setCanChangePage,
  canChangePage,
  totalPageNum,
  currentPageNum,
}) => {
  const sliderRef = useRef();
  const settings = {
    slidesToShow: slidesShowNum,
    slidesToScroll: slidesShowNum,
    arrows: true,
    infinite: false,
    speed: 400,
    prevArrow: (
      <LeftArrow
        sliderRef={sliderRef}
        setCurrentPageNum={setCurrentPageNum}
        setCanChangePage={setCanChangePage}
        canChangePage={canChangePage}
        currentPageNum={currentPageNum}
      />
    ),
    nextArrow: (
      <RightArrow
        sliderRef={sliderRef}
        setCurrentPageNum={setCurrentPageNum}
        setCanChangePage={setCanChangePage}
        canChangePage={canChangePage}
        totalPageNum={totalPageNum}
        currentPageNum={currentPageNum}
      />
    ),
  };

  return (
    <>
      {movies.length > 0 && (
        <Slider {...settings} ref={sliderRef}>
          {movies.map((movie, index) => (
            <SliderCard
              key={index}
              movieTitle={movie.title}
              poster={movie.poster_path}
            />
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderTrack;
