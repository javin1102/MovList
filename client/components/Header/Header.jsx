import Slider from "react-slick";
import Image from "next/image";
import Giyu from "../../public/Giyu.jpg";
import Joker from "../../public/Joker.jpg";
import Kimi from "../../public/Kimi.jpg";
import LeftArrow from "../UI/LeftFatArrow";
import RightArrow from "../UI/RightFatArrow";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  const imgData = [Giyu, Joker, Kimi];
  return (
    <header className="w-full h-[fit-content]">
      <Slider {...settings}>
        {imgData.map((img, index) => (
          <div
            className="w-full h-[300px] sm:h-[450px] lg:h-[600px] relative"
            key={index}
          >
            <Image src={img.src} layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
