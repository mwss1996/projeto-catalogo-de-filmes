import { Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo();
  if (req.body.id) {
    const result = await Movie.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      description: req.body.description,
      coverURL: req.body.coverURL,
      category: req.body.category,
      streaming: req.body.streaming,
      rating: req.body.rating,
    });
    res.status(200).write(result._id);
  } else {
    const result = await Movie.create({
      title: req.body.title,
      description: req.body.description,
      coverURL: req.body.coverURL,
      category: req.body.category,
      streaming: req.body.streaming,
      rating: req.body.rating,
    });
    res.status(200).write(result._id);
  }
}
