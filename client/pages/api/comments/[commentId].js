export default async function handler(req, res) {
  if (req.method === "DELETE") {
    console.log(req.query);
    return res.status(200).json({ msg: "Success" });
  }
}
