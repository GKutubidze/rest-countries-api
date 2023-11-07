import React, { Dispatch, SetStateAction } from "react";
import styles from "./CountriesComponent.module.css";
import { Country } from "./Country";
import data from "../../data.json";
import Link from "next/link"; // Import Link from Next.js

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isDark: boolean;
}

const CountriesComponent = (props: Props) => {
  const { searchQuery, setSearchQuery, isDark } = props;
  const filteredData = data.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.countriesContainer}>
      {filteredData.map((country, index) => (
        <div key={index}>
          <Link className={styles.link} href={`/${country.name}`}>
            <Country
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flagUrl={country.flags.svg}
              isDark={isDark}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountriesComponent;
