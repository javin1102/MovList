import Star from "../../../public/svg/star.svg";
import Image from "next/image";
const MovieDetailRating = ({ average, count }) => {
  return (
    <div className="w-[fit-content] flex flex-row items-center">
      <div className="w-6 h-6 relative lg:w-8 lg:h-8">
        <Image
          src={Star}
          objectFit="cover"
          layout="fill"
          className="-translate-y-px"
        />
      </div>
      <span className="ml-[1px] text-sm font-semibold md:font-bold md:text-base lg:text-xl">
        {average}
      </span>
      <span className="text-xs font-normal text-gray md:text-sm lg:text-base">
        &nbsp;({count} votes)
      </span>
    </div>
  );
};

export default MovieDetailRating;
