import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ISearchInputProps } from "../../../core/interfaces/ISearchInput.props";
import styles from "./search-input.module.css";

const SearchInput = (props: ISearchInputProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(props.initialValue || "");
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    props.handleChange(searchText);
  };

  return (
    <section className={styles.SearchBar}>
      <Form.Control
        onChange={handleChange}
        value={searchText}
        type="text"
        aria-describedby="passwordHelpBlock"
      />
      <div className={styles.IconClose} onClick={() => setSearchText("")}>
        <img src="/icons/close.svg" alt="" />
      </div>
      <div className={styles.IconSearch} onClick={() => handleClick()}>
        <img src="/icons/search.svg" alt="" />
      </div>
    </section>
  );
};

export default SearchInput;
