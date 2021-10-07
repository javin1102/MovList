// import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import LeftArrow from "../../UI/LeftThinArrow";
import RightArrow from "../../UI/RightThinArrow";
import { useGetWidth } from "../../../hooks/use-get-width";
import { useEffect, useState } from "react";
const SliderTrack = ({ movies }) => {
  const { width } = useGetWidth();
  const [slidesShowNum, setSlideShowNum] = useState(1);

  useEffect(() => {
    if (width <= 640) {
      setSlideShowNum(3);
      return;
    }
    if (width <= 1280) {
      setSlideShowNum(4);
      return;
    }
    if (width <= 1440) {
      setSlideShowNum(5);
      return;
    }
    if (width <= 1880) {
      setSlideShowNum(6);
      return;
    }
  }, [width, slidesShowNum]);

  const settings = {
    slidesToShow: slidesShowNum,
    slidesToScroll: slidesShowNum,
    arrows: true,
    infinite: false,
    speed: 500,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  const imgData = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      {console.log(slidesShowNum)}
      {movies.length > 0 && (
        <Slider {...settings}>
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
