"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./FilterComponent.module.css";
type Props={
  selectedRegion:string;
  setSelectedRegion:Dispatch<SetStateAction<string>>;
}
const FilterComponent = (props:Props) => {
const {selectedRegion,setSelectedRegion}=props;
  const handleRegionChange = (e: any) => {
    const newSelectedRegion = e.target.value === " " ? "" : e.target.value;

    setSelectedRegion(newSelectedRegion);
    // You can use this selectedRegion value to filter data or perform other actions.
  };
   return (
    <div className={styles.filter}>
      <label htmlFor="region"></label>
      <select
        className={styles.region}
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <option value=" ">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
                <option value="Antarctic Ocean">Antarctic Ocean</option> {/* Add this line */}

      </select>
    </div>
  );
};

export default FilterComponent;
