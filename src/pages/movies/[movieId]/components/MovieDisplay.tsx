import { IMovie } from "@/database/Movie";
import styles from "./movie-display.module.scss";

interface MovieDisplayProps {
  movie: IMovie;
}
export default function MovieDisplay(props: MovieDisplayProps) {
  return (
    <div className={styles.container}>
      <h1>{props.movie.title}</h1>
      <div className={styles.block}>
        <div className={styles.left}>
          <img src={props.movie.coverURL} />
        </div>
        <div className={styles.right}>
          <div>{props.movie.description}</div>
          <div>
            <b>Categoria</b>: {props.movie.category}
          </div>
          <div>
            <b>Streaming</b>: {props.movie.streaming}
          </div>
          <div>
            <b>Nota</b>: {props.movie.rating}
          </div>
        </div>
      </div>
    </div>
  );
}
