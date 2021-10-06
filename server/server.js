require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const axios = require("axios");
const schema = require("./schema");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening on PORT 5000"));

// const query = `{
//     newMovies{
//       id
//       poster_path
//       title
//     }
//   }`;

// const d = async () => {
//   await axios
//     .post("http://localhost:4000/graphql", {
//       query,
//     })
//     .then((res) => {
//       const movies = res.data.data;
//       console.log(movies);
//     });
// };
// d();
