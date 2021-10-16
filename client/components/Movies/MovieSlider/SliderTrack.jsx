// import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import LeftArrow from "../../UI/LeftThinArrow";
import RightArrow from "../../UI/RightThinArrow";
import { useRef } from "react";

const SliderTrack = ({
  movies,
  slidesShowNum,
  setCurrentSlidePage,
  setCanChangePage,
  canChangePage,
  totalPageNum,
  currentSlidePage,
}) => {
  const sliderRef = useRef();
  const settings = {
    slidesToShow: slidesShowNum,
    slidesToScroll: slidesShowNum,
    arrows: true,
    infinite: false,
    speed: 380,
    swipe: false,
    prevArrow: (
      <LeftArrow
        sliderRef={sliderRef}
        setCurrentSlidePage={setCurrentSlidePage}
        setCanChangePage={setCanChangePage}
        canChangePage={canChangePage}
        currentSlidePage={currentSlidePage}
      />
    ),
    nextArrow: (
      <RightArrow
        sliderRef={sliderRef}
        setCurrentSlidePage={setCurrentSlidePage}
        setCanChangePage={setCanChangePage}
        canChangePage={canChangePage}
        totalPageNum={totalPageNum}
        currentSlidePage={currentSlidePage}
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
              id={movie.id}
            />
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderTrack;
