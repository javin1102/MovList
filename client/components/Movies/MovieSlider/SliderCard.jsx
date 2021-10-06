import Image from "next/image";

const SliderCard = ({ movieTitle, poster }) => {
  return (
    <div className="w-full px-1 lg:px-3 flex flex-col items-center ">
      <figure className="w-full h-40 md:h-64 lg:h-80  rounded-lg overflow-hidden relative cursor-pointer">
        <Image src={poster} layout="fill" objectFit="cover" />
      </figure>
      <h6 className="font-poppins text-[0.6rem] text-gray mt-1 line-clamp-1 sm:text-xs lg:text-base lg:mt-3 px-1">
        {movieTitle}
      </h6>
    </div>
  );
};

export default SliderCard;
