import H2 from "../../UI/H2";
import MovieDescriptionList from "./MovieDescriptionList";
import MovieDetailRating from "./MovieDescriptionRating";

const MovieDescription = () => {
  return (
    <div className="font-poppins ml-6 flex flex-col justify-between">
      <H2>The Jungle Book</H2>
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
