import Image from "next/image";
const MovieCard = ({ poster }) => {
  return (
    <figure className="w-32 h-44 rounded-xl overflow-hidden relative md:w-40 md:h-52 lg:w-48 lg:h-72">
      <Image src={poster} layout="fill" objectFit="cover" alt="movie-poster" />
    </figure>
  );
};

export default MovieCard;
