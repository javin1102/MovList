import H3 from "../../UI/H3";
import P from "../../UI/P";
import SimilarMovieCard from "./SimilarMovieCard";
import SimilarMovieRating from "./SimilarMovieRating";

const SimilarMovieItem = ({ movie }) => {
  return (
    <div className="flex mb-6 last:mb-0 cursor-pointer h-full">
      <SimilarMovieCard poster={movie.backdrop_path} />
      <div className="flex flex-col justify-between ml-5">
        <H3 className="line-clamp-1">{movie.title}</H3>
        <div>
          <P className="line-clamp-1">{movie.genre_name.join(", ")}</P>
          <P>{movie.release_date}</P>
        </div>
        <SimilarMovieRating
          average={movie.vote_average.toFixed(1)}
          count={movie.vote_count}
        />
      </div>
    </div>
  );
};

export default SimilarMovieItem;
