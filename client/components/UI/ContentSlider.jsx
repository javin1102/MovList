// import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import LeftArrow from "./LeftThinArrow";
import RightArrow from "./RightThinArrow";
const ContentSlider = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    infinite: false,
    speed: 500,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },

      {
        breakpoint: 1880,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
  };
  const imgData = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Slider {...settings}>
      {imgData.map((data, index) => (
        <SliderCard key={index} />
      ))}
    </Slider>
  );
};

export default ContentSlider;
