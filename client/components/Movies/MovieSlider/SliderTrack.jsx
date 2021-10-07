// import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import LeftArrow from "../../UI/LeftThinArrow";
import RightArrow from "../../UI/RightThinArrow";

const SliderTrack = ({ movies, slidesShowNum }) => {
  const settings = {
    slidesToShow: slidesShowNum,
    slidesToScroll: slidesShowNum,
    arrows: true,
    infinite: false,
    speed: 500,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <>
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
