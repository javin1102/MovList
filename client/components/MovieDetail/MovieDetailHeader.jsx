import MovieDescription from "./MovieDetailHeader/MovieDescription";
import MovieDetailPoster from "./MovieDetailHeader/MoviePoster";

const MovieHeader = ({ movie }) => {
  return (
    <div className="flex">
      <MovieDetailPoster poster={movie.poster_path} />
      <MovieDescription movie={movie} />
    </div>
  );
};

export default MovieHeader;
