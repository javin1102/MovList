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

const backdropImageURL = "https://image.tmdb.org/t/p/original";
const smallBackdropImageURL = "https://image.tmdb.org/t/p/w500";
const posterImageURL = "https://image.tmdb.org/t/p/w500";

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
const GenreType = new GraphQLObjectType({
  name: "genre",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

const MoviesType = new GraphQLObjectType({
  name: "Movie",
  fields: {
    id: { type: GraphQLInt },
    imdb_id: { type: GraphQLString },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    release_date: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    popularity: { type: GraphQLFloat },
    vote_average: { type: GraphQLFloat },
    backdrop_path: { type: GraphQLString },
    genres: { type: new GraphQLList(GenreType) },
    genre_ids: { type: new GraphQLList(GraphQLInt) },
    genre_name: { type: new GraphQLList(GraphQLString) },
    runtime: { type: GraphQLInt },
    vote_count: { type: GraphQLInt },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    movie: {
      type: MoviesType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/${args.id}?api_key=${YOUR_API}&language=en-US`
          )
          .then((res) => {
            const movie = res.data;

            movie.poster_path = posterImageURL + movie.poster_path;
            movie.backdrop_path = backdropImageURL + movie.backdrop_path;

            return movie;
          });
      },
    },
    similar_movie: {
      type: new GraphQLList(MoviesType),
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/${args.id}/similar?api_key=${YOUR_API}&language=en-US&page=1`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path = posterImageURL + movie.poster_path;
              movie.backdrop_path = smallBackdropImageURL + movie.backdrop_path;
              movie.genre_name = movie.genre_ids.map(
                (id) => genres.find((genre) => genre.id === id).name
              );
            });
            return movies;
          });
      },
    },
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

    carousel: {
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
            });

            return movies;
          });
      },
    },
    search: {
      type: new GraphQLList(MoviesType),
      args: {
        query: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API}&language=en-US&query=${args.query}&page=1&include_adult=true`
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
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
