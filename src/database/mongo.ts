import { connect } from "mongoose";

export async function connectMongo() {
  await connect(
    "mongodb+srv://root:1234@cluster0.ohz7guz.mongodb.net/?retryWrites=true&w=majority"
  );
}
