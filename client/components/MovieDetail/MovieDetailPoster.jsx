import Giyu from "../../public/Japan.jpg";
import Image from "next/image";
const MovieDetailPoster = () => {
  return (
    <figure className="w-36 h-44 rounded-xl overflow-hidden relative cursor-pointer md:w-40 md:h-52 lg:w-52 lg:h-72">
      <Image src={Giyu} layout="fill" objectFit="cover" />
    </figure>
  );
};

export default MovieDetailPoster;
