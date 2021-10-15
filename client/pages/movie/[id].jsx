import Nav from "../../components/Nav/Nav";
import MovieDetailLayout from "../../components/MovieDetail/MovieDetailLayout";
import MovieHeader from "../../components/MovieDetail/MovieDetailHeader";
import MovieSynopsis from "../../components/MovieDetail/MovieDetailSynopsis";
import CommenSection from "../../components/Comment/CommentSection";
import SimilarMovieLayout from "../../components/MovieDetail/SimilarMovie/SimilarMovieLayout";

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
      <SimilarMovieLayout />
    </>
  );
};

export default MovieDetail;
