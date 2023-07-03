import { Schema, model, models } from "mongoose";

export interface IMovie {
  _id: string;
  title: string;
  description: string;
  coverURL: string;
  category: string;
  streaming: string;
  rating: number;
}
const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverURL: { type: String, required: true },
  category: { type: String, required: true },
  streaming: { type: String, required: true },
  rating: { type: Number, required: true },
});
export const Movie = models.Movie || model<IMovie>("Movie", movieSchema);
