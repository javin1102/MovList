import Nav from "../../components/Nav/Nav";
import MovieDetailLayout from "../../components/MovieDetail/MovieDetailLayout";
import MovieHeader from "../../components/MovieDetail/MovieDetailHeader";
import MovieSynopsis from "../../components/MovieDetail/MovieDetailSynopsis";
import CommenSection from "../../components/Comment/CommentSection";
import SimilarMovieLayout from "../../components/MovieDetail/SimilarMovie/SimilarMovieLayout";
import MovieAPI from "../../utils/MovieApi";
const MovieDetail = (props) => {
  console.log(props.movie);
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
export async function getStaticPaths(ctx) {
  const moviesId = await MovieAPI.getAllMovieId();

  return {
    paths: moviesId.map((mov) => ({
      params: {
        id: `${mov.id}`,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  const { id } = ctx.params;
  console.log(id);
  const movie = await MovieAPI.getMovie(id);
  const similar_movie = await MovieAPI.getSimilarMovie(id);
  return {
    props: {
      movie,
      similar_movie,
    },
    revalidate: 5,
  };
}
