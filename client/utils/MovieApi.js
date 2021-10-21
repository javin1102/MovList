import { client } from "./ApolloClient";
import { gql } from "@apollo/client";

export default class MovieAPI {
  static async getUpcomingMovies(page) {
    const movies = await client.query({
      query: gql`
          query {
            upcoming(page: ${page}) {
              id
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
              id
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
              id
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
              id
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
              id
              title
              poster_path
            }
          }
        `,
    });
    return movies.data.top_rated;
  }

  static async getCarouselMovies() {
    const movies = await client.query({
      query: gql`
        query {
          carousel {
            id
            title
            vote_average
            backdrop_path
          }
        }
      `,
    });
    return movies.data.carousel;
  }

  static async getMovie(id) {
    const movie = await client.query({
      query: gql`
      query{
        movie(id:${id}){
          title
          imdb_id
          genres{
            name
          }
          release_date
          runtime
          vote_average
          vote_count
          overview
          poster_path
          
        }
      }
      `,
    });
    return movie.data.movie;
  }

  static async getSimilarMovie(id) {
    const similarMovie = await client.query({
      query: gql`
        query{
          similar_movie(id:${id}){
            id
            title
            poster_path
            release_date
            genre_name
            release_date
            vote_average
            vote_count
            backdrop_path
          }
        }
      `,
    });
    return similarMovie.data.similar_movie;
  }

  static async getAllMovieId() {
    const upcoming1 = await client.query({
      query: gql`
        query {
          upcoming(page: 1) {
            id
          }
        }
      `,
    });

    const upcoming2 = await client.query({
      query: gql`
        query {
          upcoming(page: 2) {
            id
          }
        }
      `,
    });

    const popular1 = await client.query({
      query: gql`
        query {
          popular(page: 2) {
            id
          }
        }
      `,
    });

    const popular2 = await client.query({
      query: gql`
        query {
          popular(page: 3) {
            id
          }
        }
      `,
    });

    const trending1 = await client.query({
      query: gql`
        query {
          trending(page: 1) {
            id
          }
        }
      `,
    });
    const trending2 = await client.query({
      query: gql`
        query {
          trending(page: 2) {
            id
          }
        }
      `,
    });

    const recommendation1 = await client.query({
      query: gql`
        query {
          recommendation(page: 1) {
            id
          }
        }
      `,
    });

    const recommendation2 = await client.query({
      query: gql`
        query {
          recommendation(page: 2) {
            id
          }
        }
      `,
    });

    const top_rated1 = await client.query({
      query: gql`
        query {
          top_rated(page: 1) {
            id
          }
        }
      `,
    });

    const top_rated2 = await client.query({
      query: gql`
        query {
          top_rated(page: 2) {
            id
          }
        }
      `,
    });

    const upcoming = [...upcoming1.data.upcoming, ...upcoming2.data.upcoming];
    const popular = [...popular1.data.popular, ...popular2.data.popular];
    const trending = [...trending1.data.trending, ...trending2.data.trending];
    const recommendation = [
      ...recommendation1.data.recommendation,
      ...recommendation2.data.recommendation,
    ];
    const top_rated = [
      ...top_rated1.data.top_rated,
      ...top_rated2.data.top_rated,
    ];

    const moviesId = [
      ...upcoming,
      ...popular,
      ...trending,
      ...recommendation,
      ...top_rated,
    ];
    return moviesId;
  }
  static async getSearchMovies(query) {
    const searchMovie = await client.query({
      query: gql`
        query {
          search(query: "${query}") {
            id
            title
            poster_path
          }
        }
      `,
    });
    return searchMovie.data.search;
  }
}
