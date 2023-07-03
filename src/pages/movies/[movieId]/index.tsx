import Layout from "@/components/layout/Layout";
import MovieDisplay from "./components/MovieDisplay";
import { connectMongo } from "@/database/mongo";
import { IMovie, Movie } from "@/database/Movie";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

interface IndexStaticProps {
  movie: IMovie;
}
interface IndexProps extends IndexStaticProps {}
export default function Index(props: IndexProps) {
  return (
    <Layout>
      <MovieDisplay movie={props.movie} />
    </Layout>
  );
}
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexStaticProps>> {
  const movieId = (context.params as any)["movieId"] as string;
  await connectMongo();
  const movie = await Movie.findById<IMovie>(movieId);
  return {
    props: {
      movie: JSON.parse(JSON.stringify(movie)),
    },
  };
}
export async function getStaticPaths() {
  await connectMongo();
  const moviesIds = await Movie.find<IMovie>().distinct("_id");
  const moviesIdsObject: string[] = JSON.parse(JSON.stringify(moviesIds));
  return {
    paths: moviesIdsObject.map((movieId) => ({
      params: { movieId },
    })),
    fallback: false,
  };
}
