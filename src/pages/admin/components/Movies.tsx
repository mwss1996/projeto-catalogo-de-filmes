import { IMovie } from "@/database/Movie";
import Movie from "./Movie";
import styles from "./movies.module.scss";

export interface MoviesProps {
  movies: IMovie[];
  highlightText?: string;
}
export default function Movies(props: MoviesProps) {
  return (
    <div className={styles.container}>
      {props.movies.map((movie) => {
        return (
          <Movie
            highlightText={props.highlightText}
            key={movie._id}
            id={movie._id}
            coverUrl={movie.coverURL}
            title={movie.title}
            streaming={movie.streaming}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
}
