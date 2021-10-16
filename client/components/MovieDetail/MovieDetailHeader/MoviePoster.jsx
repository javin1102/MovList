import Japan from "../../../public/Japan.jpg";
import Image from "next/image";
const MovieDetailPoster = ({ poster }) => {
  return (
    <figure className="w-32 h-44 rounded-xl overflow-hidden relative md:w-40 md:h-52 lg:w-52 lg:h-72">
      <Image src={poster} layout="fill" objectFit="cover" />
    </figure>
  );
};

export default MovieDetailPoster;
