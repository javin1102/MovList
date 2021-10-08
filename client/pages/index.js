import LatestUpdate from "../components/Movies/LatestUpdate";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Popular from "../components/Movies/Popular";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function Home({ newMovies, popularMovies }) {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Header />
      <LatestUpdate newMovies={newMovies} />
      <Popular popularMovies={popularMovies} />
      <div className="min-h-[1000px]"></div>
    </ApolloProvider>
  );
}

const newMoviesGraphQL = async (page) => {
  const movies = await client.query({
    query: gql`
      query {
        newMovies(page: ${page}) {
          title
          poster_path
        }
      }
    `,
  });
  return movies.data.newMovies;
};

const popularMoviesGraphQL = async (page) => {
  const movies = await client.query({
    query: gql`
      query {
        popularMovies(page: ${page}) {
          title
          poster_path
        }
      }
    `,
  });
  return movies.data.popularMovies;
};

export async function getStaticProps() {
  const newMovies1 = await newMoviesGraphQL(1);
  const newMovies2 = await newMoviesGraphQL(2);

  const popularMovies1 = await popularMoviesGraphQL(2);
  const popularMovies2 = await popularMoviesGraphQL(3);

  const newMovies = [...newMovies1, ...newMovies2];
  const popularMovies = [...popularMovies1, ...popularMovies2];

  return {
    props: {
      newMovies,
      popularMovies,
    },
    revalidate: 10,
  };
}
