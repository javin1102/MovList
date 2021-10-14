import H3 from "../../UI/H3";
import P from "../../UI/P";
import SimilarMovieCard from "./SimilarMovieCard";
import SimilarMovieRating from "./SimilarMovieRating";

const SimilarMovieItem = () => {
  return (
    <div className="flex mb-6 last:mb-0 cursor-pointer h-full">
      <SimilarMovieCard />
      <div className="flex flex-col justify-between ml-5">
        <H3>Naruto</H3>
        <div>
          <P>Action, Adventure, Comedy</P>
          <P>2004</P>
        </div>
        <SimilarMovieRating />
      </div>
    </div>
  );
};

export default SimilarMovieItem;
