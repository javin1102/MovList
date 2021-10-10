const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = require("graphql");

const YOUR_API = process.env.API_KEY;

let genres = [];
const genresRequest = async () => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${YOUR_API}&language=en-US`
    )
    .then((res) => {
      const genreData = res.data.genres;
      genres = [...genreData];
    });
};

genresRequest();
const backdropImageURL = "https://image.tmdb.org/t/p/original";
const posterImageURL = "https://image.tmdb.org/t/p/w500";
const MoviesType = new GraphQLObjectType({
  name: "NewMovies",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    release_date: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    popularity: { type: GraphQLFloat },
    vote_average: { type: GraphQLFloat },
    backdrop_path: { type: GraphQLString },
    genre_ids: { type: new GraphQLList(GraphQLInt) },
    genre_name: { type: new GraphQLList(GraphQLString) },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    recommendation: {
      type: new GraphQLList(MoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/3/recommendations?api_key=${YOUR_API}&language=en-US&page=${args.page}`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },
    upcoming: {
      type: new GraphQLList(MoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${YOUR_API}&language=en-US`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },

    trending: {
      type: new GraphQLList(MoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${YOUR_API}&language=en-US&page=${args.page}`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },

    popular: {
      type: new GraphQLList(MoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${YOUR_API}&language=en-US&page=${args.page}`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },

    top_rated: {
      type: new GraphQLList(MoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${YOUR_API}&language=en-US&page=${args.page}`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },

    slider: {
      type: new GraphQLList(MoviesType),
      resolve() {
        return axios
          .get(
            `https://api.themoviedb.org/3/list/3?api_key=${YOUR_API}&language=en-US`
          )
          .then((res) => {
            const movies = res.data.items;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = backdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });

            return movies;
          });
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
