import Nav from "../../components/Nav/Nav";
import MovieDetailLayout from "../../components/MovieDetail/MovieDetailLayout";
import MovieHeader from "../../components/MovieDetail/MovieHeader";

const MovieDetail = () => {
  return (
    <>
      <Nav />
      <MovieDetailLayout>
        <MovieHeader />
      </MovieDetailLayout>
    </>
  );
};

export default MovieDetail;
