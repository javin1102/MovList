import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { commentId, movieId } = req.query;

    try {
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db();
      const commentCollection = db.collection("movieComments");
      await commentCollection.deleteOne({ commentId: commentId });
      const query = { movieId: movieId };
      const movieComments = await commentCollection
        .find(query)
        .limit(20)
        .sort({ date: -1 })
        .toArray();
      return res.status(200).json({ msg: "Success", movieComments });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error!" });
    }
  }
}
