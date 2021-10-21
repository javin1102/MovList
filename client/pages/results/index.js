import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import MovieCard from "../../components/UI/MovieCard";
import MovieAPI from "../../utils/MovieApi";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../utils/ApolloClient";
import Link from "next/link";
const Results = () => {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { search } = router.query;

  useEffect(async () => {
    if (search) {
      const movies = await MovieAPI.getSearchMovies(search);
      setResults(movies);
    }
  }, [search]);

  return (
    <ApolloProvider client={client}>
      <Nav />
      {console.log(results)}
      <div className=" mt-20 sm:mt-24 lg:mt-36 px-[5vw]">
        <h1 className="font-bold text-lg font-poppins sm:text-xl md:text-2xl lg:text-3xl">
          {search}
        </h1>
        <div className="mt-8 grid justify-items-center gap-4 md:gap-6 lg:gap-8 grid-cols-[repeat(auto-fit,8rem)] md:grid-cols-[repeat(auto-fit,10rem)] lg:grid-cols-[repeat(auto-fit,12rem)] ">
          {results.length > 0 &&
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
