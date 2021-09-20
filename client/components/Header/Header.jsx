import Slider from "react-slick";
import Image from "next/image";
import Giyu from "../../public/Giyu.jpg";
import Joker from "../../public/Joker.jpg";
import Kimi from "../../public/Kimi.jpg";
const Header = () => {
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
  };
  const imgData = [Giyu, Joker, Kimi];
  return (
    <header className="w-full h-[fit-content]">
      <Slider {...settings}>
        {imgData.map((img, index) => (
          <img src={img.src} className="object-cover h-[600px]" key={index} />
        ))}
      </Slider>
    </header>
  );
};

export default Header;
