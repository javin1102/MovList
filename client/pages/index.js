import LatestUpdate from "../components/Movies/LatestUpdate";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Header />
      <LatestUpdate />
      <div className="min-h-[1000px]"></div>
    </ApolloProvider>
  );
}
