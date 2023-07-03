import Layout from "@/components/layout/Layout";
import UpdateForm from "./components/UpdateForm";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { connectMongo } from "@/database/mongo";
import { IMovie, Movie } from "@/database/Movie";

interface IndexStaticProps {
  movie: IMovie;
}
interface IndexProps extends IndexStaticProps {}
export default function Index(props: IndexProps) {
  if (!props.movie) {
    return <></>;
  }
  return (
    <Layout isAdmin>
      <UpdateForm movie={props.movie} />
    </Layout>
  );
}
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexStaticProps>> {
  const movieId = (context.params as any)["movieId"] as string;
  await connectMongo();
  try {
    const movie = await Movie.findById<IMovie>(movieId);
    return {
      props: {
        movie: JSON.parse(JSON.stringify(movie)),
      },
    };
  } catch {}
  return { notFound: true };
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
