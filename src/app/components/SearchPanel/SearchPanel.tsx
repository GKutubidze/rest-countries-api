import React, { Dispatch, SetStateAction } from "react";
import SearchComponent from "../Search/SearchComponent";
import FilterComponent from "../Filter/FilterComponent";
import styles from "./SearchPanel.module.css";
interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isDark: boolean;
  selectedRegion:string;
  setSelectedRegion:Dispatch<SetStateAction<string>>;
}
const SearchPanel = (props: Props) => {
  const { setSearchQuery, isDark ,selectedRegion,setSelectedRegion} = props;
  return (
    <div className={styles.searchPanel}>
      <SearchComponent setSearchQuery={setSearchQuery} isDark={isDark} />
      <FilterComponent selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}  />
    </div>
  );
};

export default SearchPanel;
