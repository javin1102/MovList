import MovieDescription from "./MovieDescription";
import MovieDetailPoster from "./MovieDetailPoster";

const MovieHeader = () => {
  return (
    <div className="flex">
      <MovieDetailPoster />
      <MovieDescription />
    </div>
  );
};

export default MovieHeader;
