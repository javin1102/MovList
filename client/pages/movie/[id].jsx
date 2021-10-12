import Nav from "../../components/Nav/Nav";
import MovieDetailLayout from "../../components/MovieDetail/MovieDetailLayout";
import MovieHeader from "../../components/MovieDetail/MovieDetailHeader";
import MovieSynopsis from "../../components/MovieDetail/MovieDetailSynopsis";
import CommenSection from "../../components/Comment/CommentSection";

const MovieDetail = () => {
  return (
    <>
      <Nav />
      <MovieDetailLayout>
        <MovieHeader />
        <MovieSynopsis />
        <hr className="text-primary border-t-2" />
        <CommenSection />
      </MovieDetailLayout>
    </>
  );
};

export default MovieDetail;
