import MovieDescription from "./MovieDetailHeader/MovieDescription";
import MovieDetailPoster from "./MovieDetailHeader/MoviePoster";

const MovieHeader = () => {
  return (
    <div className="flex">
      <MovieDetailPoster />
      <MovieDescription />
    </div>
  );
};

export default MovieHeader;
