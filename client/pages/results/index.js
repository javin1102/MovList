import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import MovieCard from "../../components/UI/MovieCard";
import MovieAPI from "../../utils/MovieApi";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../utils/ApolloClient";
import Link from "next/link";
import Loader from "react-loader-spinner";
import { uiAction } from "../../redux/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { commentAction } from "../../redux/comment-slice";
const Results = () => {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { search } = router.query;
  const { getLoading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (search) {
      dispatch(uiAction.setGetLoading({ getLoading: true }));
      const movies = await MovieAPI.getSearchMovies(search);
      setResults(movies);
      dispatch(uiAction.setGetLoading({ getLoading: false }));
    }
  }, [search]);

  useEffect(() => {
    dispatch(commentAction.reset());
  }, []);

  return (
    <ApolloProvider client={client}>
      <Nav />
      {console.log(results)}
      <div className=" mt-20 sm:mt-24 lg:mt-36 px-[5vw]">
        <h1 className="font-bold text-lg font-poppins sm:text-xl md:text-2xl lg:text-3xl">
          {search}
        </h1>
        {getLoading && (
          <div className="mx-auto w-[fit-content] mt-20">
            <Loader type="ThreeDots" color="#000000" height={50} width={50} />
          </div>
        )}
        <div className="mt-8 grid justify-items-center gap-4 md:gap-6 lg:gap-8 grid-cols-[repeat(auto-fit,8rem)] md:grid-cols-[repeat(auto-fit,10rem)] lg:grid-cols-[repeat(auto-fit,12rem)] ">
          {!getLoading &&
            results.length > 0 &&
            results.map((result, i) => (
              <Link href={`/movie/${result.id}`} key={i}>
                <a className="flex flex-col items-center w-min overflow-hidden cursor-pointer">
                  <MovieCard poster={result.poster_path} />
                  <h6 className="font-poppins text-[0.6rem] text-gray mt-1 line-clamp-1 sm:text-xs lg:text-base lg:mt-3 px-1 text-center">
                    {result.title}
                  </h6>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </ApolloProvider>
  );
};

// export async function getStaticProps(ctx) {
//   console.log(ctx);
// }
export default Results;
