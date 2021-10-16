import Star from "../../../public/svg/star.svg";
import Image from "next/image";
const SimilarMovieRating = ({ count, average }) => {
  return (
    <div className="w-[fit-content] flex flex-row items-center">
      <div className="w-4 h-4 relative lg:w-6 lg:h-6">
        <Image
          src={Star}
          objectFit="cover"
          layout="fill"
          className="-translate-y-px"
        />
      </div>
      <span className="ml-[1px] text-xs font-semibold md:font-bold md:text-base lg:text-base">
        {average}
      </span>
      <span className="text-xs font-normal text-gray md:text-sm lg:text-base">
        &nbsp;({count} votes)
      </span>
    </div>
  );
};

export default SimilarMovieRating;
