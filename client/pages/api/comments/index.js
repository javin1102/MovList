import { MongoClient } from "mongodb";
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
      await client.close();
      return res.status(200).json({ msg: "Success post a comment!" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  }

  if (req.method === "GET") {
    const { movieId, length } = req.query;

    try {
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db("MovList");
      const commentCollection = db.collection("movieComments");
      const query = { movieId };
      const movieComments = await commentCollection
        .find(query)
        .skip(Number(length))
        .sort({ date: -1 })
        .limit(5)
        .toArray();
      const lastComment = await commentCollection.findOne(
        {},
        { sort: { _id: 1 } }
      );
      await client.close();
      return res.status(200).json({
        msg: "Success retrieving comments",
        movieComments,
        lastComment,
      });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
    }
  }
}
