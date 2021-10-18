import { MongoClient } from "mongodb";
// import { client } from "../../utils/DB";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const comment = req.body;

    try {
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db();
      const commentCollection = db.collection("movieComments");
      await commentCollection.insertOne(comment);
      const query = { movieId: comment.movieId };
      const movieComments = await await commentCollection
        .find(query)
        .sort({ date: -1 })
        .toArray();
      await client.close();
      return res
        .status(200)
        .json({ msg: "Success post a comment!", movieComments });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  }

  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db("MovList");
      const commentCollection = db.collection("movieComments");
      const query = { movieId: id };
      const movieComments = await commentCollection
        .find(query)
        .sort({ date: -1 })
        .toArray();
      await client.close();
      return res
        .status(200)
        .json({ msg: "Success retrieving comments", movieComments });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  }
}
