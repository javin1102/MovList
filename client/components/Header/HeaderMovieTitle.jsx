import Star from "../../public/svg/star.svg";
import Image from "next/image";
const HeaderMovieTitle = () => {
  return (
    <div className="flex flex-row rounded-full text-xs font-light bg-primary text-white font-poppins absolute right-4 bottom-10 w-[fit-content] px-4 py-1.5 z-[1] items-center lg:text-lg lg:px-6 lg:py-3 lg:right-10 lg:bottom-16 lg:font-medium">
      <span>Avengers: Infinity War</span>
      <span className="h-3 bg-[#ffffffe7] w-[1px] mx-2"></span>
      <div className="w-[fit-content] flex flex-row items-center">
        <div className="w-4 h-4 relative lg:w-6 lg:h-6">
          <Image
            src={Star}
            objectFit="cover"
            layout="fill"
            className="-translate-y-px"
          />
        </div>
        <span className="ml-[1px] ">8.5</span>
      </div>
    </div>
  );
};

export default HeaderMovieTitle;
