const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const YOUR_API = process.env.API_KEY;

const NewMoviesType = new GraphQLObjectType({
  name: "New Movies",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    poster_path: { type: GraphQLString },
  },
});

const MovieQueryType = new GraphQLObjectType({
  name: "MovieQuery",
  fields: {
    newMovies: new GraphQLList(NewMoviesType),
    resolve() {
      return axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${YOUR_API}&language=en-US&page=1`
        )
        .then((res) => {
          const movies = res.data.results;
          movies.map(
            (movie) =>
              (movie.poster_path =
                "https://image.tmdb.org/t/p/w500" + movie.poster_path)
          );
          return movies;
        });
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Movies: MovieQueryType,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
