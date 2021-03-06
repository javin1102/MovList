import Nav from "../../components/Nav/Nav";
import MovieDetailLayout from "../../components/MovieDetail/MovieDetailLayout";
import MovieHeader from "../../components/MovieDetail/MovieDetailHeader";
import MovieSynopsis from "../../components/MovieDetail/MovieDetailSynopsis";
import CommenSection from "../../components/Comment/CommentSection";
import SimilarMovieLayout from "../../components/MovieDetail/SimilarMovie/SimilarMovieLayout";
import MovieAPI from "../../utils/MovieApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { commentAction } from "../../redux/comment-slice";

const MovieDetail = ({ movie, similar_movie }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentAction.reset());
  }, []);
  return (
    <>
      <div id="modal"></div>
      <Nav />
      <MovieDetailLayout>
        <MovieHeader movie={movie} />
        <MovieSynopsis overview={movie.overview} />
        <hr className="text-primary border-t-2" />
        <CommenSection />
      </MovieDetailLayout>
      <SimilarMovieLayout similar={similar_movie} />
    </>
  );
};

export default MovieDetail;
export async function getStaticPaths() {
  const moviesId = await MovieAPI.getAllMovieId();

  return {
    paths: moviesId.map((mov) => ({
      params: {
        id: `${mov.id}`,
      },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps(ctx) {
  const { id } = ctx.params;
  try {
    const movie = await MovieAPI.getMovie(id);
    const similar_movie = await MovieAPI.getSimilarMovie(id);
    return {
      props: {
        movie,
        similar_movie,
      },
      revalidate: 5,
    };
  } catch (err) {
    if (err) {
      return { notFound: true };
    }
  }
}
