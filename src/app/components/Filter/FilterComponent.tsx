"use client";
import React, { useState } from "react";
import styles from "./FilterComponent.module.css";
const FilterComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const handleRegionChange = (e: any) => {
    setSelectedRegion(e.target.value);
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
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterComponent;
