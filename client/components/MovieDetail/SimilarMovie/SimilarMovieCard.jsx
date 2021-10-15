import Image from "next/image";
import Joker from "../../../public/Joker.jpg";
const SimilarMovieCard = () => {
  return (
    <figure className="relative w-40 h-28 rounded-lg overflow-hidden">
      <Image src={Joker} layout="fill" objectFit="cover" />
    </figure>
  );
};

export default SimilarMovieCard;
