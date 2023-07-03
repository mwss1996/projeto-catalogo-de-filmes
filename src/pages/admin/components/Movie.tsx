import styles from "./movie.module.scss";

interface MovieProps {
  id: string;
  coverUrl: string;
  title: string;
  streaming: string;
  rating: number;
  highlightText?: string;
}
export default function Movie(props: MovieProps) {
  const highlightedTitle =
    props.highlightText && props.title
      ? props.title.replace(
          createSearchRegex(props.highlightText),
          '<span style="background-color: yellow; color: black;">$1</span>'
        )
      : props.title;
  return (
    <a href={"/admin/form/" + props.id} className={styles.container}>
      <span className={styles.title}>
        <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
      </span>
      <span>id: {props.id}</span>
      <span>Streaming: {props.streaming}</span>
      <span>Nota: {props.rating}</span>
    </a>
  );
}
export function createSearchRegex(search: string) {
  return new RegExp(`(${search.trim()})`, "i");
}
