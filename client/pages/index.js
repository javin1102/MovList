import LatestUpdate from "../components/Movies/LatestUpdate";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function Home({ newMovies }) {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Header />
      <LatestUpdate newMovies={newMovies} />
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

export async function getStaticProps() {
  const newMovies1 = await newMoviesGraphQL(1);
  const newMovies2 = await newMoviesGraphQL(2);

  const newMovies = [...newMovies1, ...newMovies2];

  return {
    props: {
      newMovies,
    },
    revalidate: 10,
  };
}
