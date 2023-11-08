import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./SearchComponent.module.css";
import searchicon from "../../../../public/assets/search-icon.svg";
import Image from "next/image";
interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isDark: boolean;
}
const SearchComponent = (props: Props) => {
  const { setSearchQuery, isDark } = props;
  const mainContainerStyle = {
    backgroundColor: isDark ? "#2B3844" : "white",
    color:isDark ?"white":"black",
    };
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>
        <Image src={searchicon} alt="Search" />
      </span>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for a country…"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        style={mainContainerStyle}
      />
    </div>
  );
};

export default SearchComponent;
