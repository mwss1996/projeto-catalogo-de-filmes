import { useState } from "react";
import styles from "./form.module.scss";
import { Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";
import axios from "axios";

interface FormProps {}
export default function Form(props: FormProps) {
  const [formState, setFormState] = useState({
    titleInputText: "",
    descriptionInputText: "",
    coverURLInputText: "",
    categoryInputText: "",
    streamingInputText: "",
    ratingInputText: "",
  });
  return (
    <div className={styles.container}>
      <h1>Cadastrar novo filme</h1>
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
      </form>
    </div>
  );
}
