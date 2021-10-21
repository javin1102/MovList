import MovieDescription from "./MovieDetailHeader/MovieDescription";
import MovieCard from "../UI/MovieCard";
const MovieHeader = ({ movie }) => {
  return (
    <div className="flex">
      <MovieCard poster={movie.poster_path} />
      <MovieDescription movie={movie} />
    </div>
  );
};

export default MovieHeader;
