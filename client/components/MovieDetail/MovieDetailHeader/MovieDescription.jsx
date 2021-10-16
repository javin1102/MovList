import H2 from "../../UI/H2";
import MovieDescriptionList from "./MovieDescriptionList";
import MovieDetailRating from "./MovieDescriptionRating";

const MovieDescription = ({ movie }) => {
  return (
    <div className="font-poppins ml-6 flex flex-col justify-between">
      <H2>{movie.title}</H2>
      <ul className="text-xs md:text-sm lg:text-base">
        <MovieDescriptionList type="IMDB ID" res={movie.imdb_id} />
        <MovieDescriptionList
          type="Genre"
          res={movie.genres.map((genre) => genre.name).join(", ")}
        />
        <MovieDescriptionList type="Released" res={movie.release_date} />
        <MovieDescriptionList
          type="Duration"
          res={`${movie.runtime} minutes`}
        />
      </ul>
      <MovieDetailRating
        average={movie.vote_average}
        count={movie.vote_count}
      />
    </div>
  );
};

export default MovieDescription;
