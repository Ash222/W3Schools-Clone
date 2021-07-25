import React, { useState } from "react";
import styles from "./searchbar.module.css";
import { RiSearchLine } from "react-icons/ri";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function searchTextHandler(event) {
    setSearchText(event.target.value);
  }

  function formHandler(event) {
    event.preventDefault();
    console.log(searchText);
    setSearchText("");
  }

  return (
    <>
      <form>
        <div className={styles.form}>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            value={searchText}
            onChange={searchTextHandler}
            placeholder="Enhanced by Google"
          />
          <button className={styles.button} onClick={formHandler}>
            <RiSearchLine />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
