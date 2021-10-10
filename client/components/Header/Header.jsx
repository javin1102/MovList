import Slider from "react-slick";
import Image from "next/image";
import LeftArrow from "../UI/LeftFatArrow";
import RightArrow from "../UI/RightFatArrow";
import HeaderMovieTitle from "./HeaderMovieTitle";
const Header = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const movData = movies.slice(0, 7);
  return (
    <header className="w-full h-[fit-content]">
      {movData.length > 0 && (
        <Slider {...settings}>
          {movData.map((mov, index) => (
            <div
              className="w-full h-[300px] sm:h-[450px] lg:h-[700px] relative"
              key={index}
            >
              <HeaderMovieTitle
                title={mov.title}
                vote_average={mov.vote_average}
              />
              <Image src={mov.backdrop_path} layout="fill" objectFit="cover" />
            </div>
          ))}
        </Slider>
      )}
    </header>
  );
};

export default Header;
