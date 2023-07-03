import { Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo();
  const result = await Movie.findByIdAndDelete(req.body.id);
  res.status(200).write(result._id);
}
