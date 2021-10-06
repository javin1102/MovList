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
const genres = [];
const genresRequest = async () => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${YOUR_API}&language=en-US`
    )
    .then((res) => {
      const genreData = res.data.genres;
      genreData.map((genre) => genres.push(genre));
    });
};
genresRequest();
const NewMoviesType = new GraphQLObjectType({
  name: "NewMovies",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
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
    newMovies: {
      type: new GraphQLList(NewMoviesType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${YOUR_API}&language=en-US&page=${args.page}`
          )
          .then((res) => {
            const movies = res.data.results;
            movies.map((movie) => {
              movie.poster_path =
                "https://image.tmdb.org/t/p/w500" + movie.poster_path;
              movie.backdrop_path =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
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
