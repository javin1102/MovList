import Image from "next/image";

const SimilarMovieCard = ({ poster }) => {
  return (
    <figure className="relative min-w-[10rem] h-28 rounded-lg overflow-hidden">
      <Image src={poster} layout="fill" objectFit="cover" />
    </figure>
  );
};

export default SimilarMovieCard;
