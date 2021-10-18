import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import MoviesListSlider from "../components/Movies/MovieListSlider";
import { client } from "../utils/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import MovieAPI from "../utils/MovieApi";
import Footer from "../components/Footer/Footer";

export default function Home({
  upcoming,
  popular,
  trending,
  recommendation,
  top_rated,
  carousel,
}) {
  return (
    <ApolloProvider client={client}>
      <Nav isHomePage={true} />
      <Header movies={carousel} />
      <MoviesListSlider headline="Top Rated" movies={top_rated} />
      <MoviesListSlider headline="Recommendation" movies={recommendation} />
      <MoviesListSlider headline="Popular" movies={popular} />
      <MoviesListSlider headline="Trending" movies={trending} />
      <MoviesListSlider headline="Upcoming" movies={upcoming} />
      <Footer />
    </ApolloProvider>
  );
}

export async function getStaticProps() {
  const upcoming1 = await MovieAPI.getUpcomingMovies(1);
  const upcoming2 = await MovieAPI.getUpcomingMovies(2);

  const popular1 = await MovieAPI.getPopularMovies(2);
  const popular2 = await MovieAPI.getPopularMovies(3);

  const trending1 = await MovieAPI.getTrendingMovies(1);
  const trending2 = await MovieAPI.getTrendingMovies(2);

  const recommendation1 = await MovieAPI.getRecommendationMovies(1);
  const recommendation2 = await MovieAPI.getRecommendationMovies(2);

  const top_rated1 = await MovieAPI.getTopRatedMovies(1);
  const top_rated2 = await MovieAPI.getTopRatedMovies(2);

  const carousel = await MovieAPI.getCarouselMovies();

  const upcoming = [...upcoming1, ...upcoming2];
  const popular = [...popular1, ...popular2];
  const trending = [...trending1, ...trending2];
  const recommendation = [...recommendation1, ...recommendation2];
  const top_rated = [...top_rated1, ...top_rated2];

  return {
    props: {
      upcoming,
      popular,
      trending,
      recommendation,
      top_rated,
      carousel,
    },
    revalidate: 10,
  };
}
