import Layout from "@/components/layout/Layout";
import { IMovie, Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";
import { GetStaticPropsResult } from "next";
import { useState } from "react";
import Admin from "./components/Admin";

interface IndexStaticProps {
  movies: IMovie[];
}
interface IndexProps extends IndexStaticProps {}
export default function Index(props: IndexProps) {
  const [searchText, setSearchText] = useState("");
  const searchRegex = createSearchRegex(searchText.trim());
  const filteredMovies = props.movies.filter((movie) =>
    searchRegex.test(movie.title)
  );
  return (
    <Layout isAdmin>
      <Admin
        movies={{
          movies: filteredMovies,
          highlightText: searchText,
        }}
        searchBar={{
          searchText,
          onChangeSearchText: (search) => setSearchText(search),
        }}
      />
    </Layout>
  );
}
export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexStaticProps>
> {
  connectMongo();
  const movies = await Movie.find<IMovie>().sort({
    _id: -1,
  });
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
export function createSearchRegex(search: string) {
  return new RegExp(`(${search.trim()})`, "i");
}
