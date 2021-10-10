import { client } from "./ApolloClient";
import { gql } from "@apollo/client";

export default class MovieAPI {
  static async getUpcomingMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            upcoming(page: ${page}) {
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.upcoming;
  }

  static async getPopularMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            popular(page: ${page}) {
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.popular;
  }

  static async getRecommendationMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            recommendation(page: ${page}) {
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.recommendation;
  }
  static async getTrendingMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            trending(page: ${page}) {
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.trending;
  }

  static async getTopRatedMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            top_rated(page: ${page}) {
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.top_rated;
  }
}
