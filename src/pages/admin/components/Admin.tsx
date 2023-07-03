import { IMovie } from "@/database/Movie";
import Movies, { MoviesProps } from "./Movies";
import SearchBar, { SearchBarProps } from "./SearchBar";
import styles from "./admin.module.scss";
import Link from "next/link";

interface AdminProps {
  movies: MoviesProps;
  searchBar: SearchBarProps;
}
export default function Admin(props: AdminProps) {
  return (
    <div className={styles.container}>
      <Link href="/admin/form" className={styles.registerButton}>
        Cadastrar novo filme
      </Link>
      <SearchBar {...props.searchBar} />
      <Movies {...props.movies} />
    </div>
  );
}
