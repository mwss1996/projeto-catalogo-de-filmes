import { useEffect, useRef, useState } from "react";
import styles from "./search-bar.module.scss";

export interface SearchBarProps {
  searchText: string;
  onChangeSearchText: (searchText: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
  const [tempSearchText, setTempSearchText] = useState(props.searchText);
  const timeoutRef = useRef<NodeJS.Timeout>();
  function updateText(newText: string) {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      props.onChangeSearchText(newText);
    }, 500);
    setTempSearchText(newText);
  }
  useEffect(() => setTempSearchText(props.searchText), [props.searchText]);
  return (
    <div className={styles.container}>
      <label htmlFor="search">Buscar Filme</label>
      <input
        type="text"
        id="search"
        placeholder="Nome do filme..."
        value={tempSearchText}
        onChange={(event) => updateText(event.target.value)}
      />
    </div>
  );
}
