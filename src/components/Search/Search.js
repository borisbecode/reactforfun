import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form classNameName="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        classNameName={styles.input}
      />
      <button
        onClick={(e) => e.preventDefault()}
        id="btn"
        classNameName="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
