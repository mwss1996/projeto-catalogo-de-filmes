import { useState } from "react";
import styles from "./update-form.module.scss";
import { IMovie, Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";
import axios from "axios";

interface UpdateFormProps {
  movie: IMovie;
}
export default function UpdateForm(props: UpdateFormProps) {
  const [formState, setFormState] = useState({
    titleInputText: props.movie.title,
    descriptionInputText: props.movie.description,
    coverURLInputText: props.movie.coverURL,
    categoryInputText: props.movie.category,
    streamingInputText: props.movie.streaming,
    ratingInputText: props.movie.rating.toString(),
  });
  return (
    <div className={styles.container}>
      <h1>Editar filme</h1>
      <form action="/admin">
        <div className={styles.field}>
          <label htmlFor="title">Título</label>
          <input
            name="title"
            type="text"
            placeholder="Insira o título do filme"
            value={formState.titleInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                titleInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            placeholder="Insira a descrição do filme"
            value={formState.descriptionInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                descriptionInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="coverURL">URL da capa</label>
          <input
            name="coverURL"
            type="text"
            placeholder="Insira a URL da capa"
            value={formState.coverURLInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                coverURLInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="category">Categoria</label>
          <input
            name="category"
            type="text"
            placeholder="Insira a categoriia do filme"
            value={formState.categoryInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                categoryInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="streaming">Streaming</label>
          <input
            name="streaming"
            type="text"
            placeholder="Insira o streaming onde o filme está disponível"
            value={formState.streamingInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                streamingInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="rating">Nota</label>
          <input
            name="rating"
            type="number"
            placeholder="Insira a nota do filme"
            value={formState.ratingInputText}
            onChange={(event) =>
              setFormState({
                ...formState,
                ratingInputText: event.target.value,
              })
            }
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.deleteButton}
            onClick={() => {
              axios.post("/api/deleteMovie", {
                id: props.movie._id,
              });
            }}
          >
            Deletar
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={
              formState.titleInputText === "" ||
              formState.descriptionInputText === "" ||
              formState.coverURLInputText === "" ||
              formState.categoryInputText === "" ||
              formState.streamingInputText === "" ||
              formState.ratingInputText === ""
            }
            onClick={() => {
              axios.post("/api/registerMovie", {
                id: props.movie._id,
                title: formState.titleInputText,
                description: formState.descriptionInputText,
                coverURL: formState.coverURLInputText,
                category: formState.categoryInputText,
                streaming: formState.streamingInputText,
                rating: formState.ratingInputText,
              });
            }}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
