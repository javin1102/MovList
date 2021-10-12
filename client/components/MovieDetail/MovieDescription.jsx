import MovieDescriptionList from "./MovieDescriptionList";
import MovieDetailRating from "./MovieDetailRating";

const MovieDescription = () => {
  return (
    <div className="font-poppins ml-6 h-full flex flex-col justify-between">
      <h2 className="text-sm font-bold md:text-base lg:text-2xl">
        The Jungle Book
      </h2>
      <ul className="text-xs md:text-sm lg:text-base">
        <MovieDescriptionList type="IMDB ID" res="tt0123456" />
        <MovieDescriptionList type="Genre" res="Action, Fantasy" />
        <MovieDescriptionList type="Released" res="1992-10-10" />
        <MovieDescriptionList type="Duration" res="139 minutes" />
        <MovieDescriptionList type="Region" res="USA" />
      </ul>
      <MovieDetailRating />
    </div>
  );
};

export default MovieDescription;
