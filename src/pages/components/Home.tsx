import { IMovie } from "@/database/Movie";
import Movies, { MoviesProps } from "./Movies";
import SearchBar, { SearchBarProps } from "./SearchBar";
import styles from "./home.module.scss";

interface HomeProps {
  movies: MoviesProps;
  searchBar: SearchBarProps;
}
export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <SearchBar {...props.searchBar} />
      <Movies {...props.movies} />
    </div>
  );
}
