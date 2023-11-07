import React from "react";
import styles from "./Country.module.css";
import Image from "next/image";
interface Props {
  name: string;
  population: number;
  region: string;
  capital: string | undefined;
  flagUrl: string;
  isDark: boolean;
}

export const Country = (props: Props) => {
  const { name, population, region, capital, flagUrl, isDark } = props;
  const mainContainerStyle = {
    backgroundColor: isDark ? "#2B3844" : "white",
  };
  return (
    <div className={styles.countryComponent} style={mainContainerStyle}>
      <div className={styles.flag}>
        <Image src={flagUrl} alt="" width={264} height={183} />
      </div>
      <div className={styles.name}>{name}</div>

      <div className={styles.infoContainer}>
        <div className={styles.population}>
          <span className={styles.info}>Population: </span>
          <span>{population}</span>
        </div>
        <div className={styles.region}>
          <span className={styles.info}>Region: </span>
          <span>{region}</span>
        </div>
        <div className={styles.capital}>
          <span className={styles.info}>Capital: </span>
          <span>{capital}</span>
        </div>
      </div>
    </div>
  );
};
