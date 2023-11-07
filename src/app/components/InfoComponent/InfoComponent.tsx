import React from "react";
import styles from "./InfoComponent.module.css";
import "../CountryInfo/interface";
const InfoComponent = (props: Props) => {
  const {
    flagUrl,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props;
  return (
    <div className={styles.main}>
      <div className={styles.infoContainer}>
        <div className={styles.nativeName}>
          <span className={styles.info}>Native Name: </span>
          <span>{nativeName}</span>
        </div>
        <div className={styles.population}>
          <span className={styles.info}>Population: </span>
          <span>{population}</span>
        </div>
        <div className={styles.region}>
          <span className={styles.info}>Region: </span>
          <span>{region}</span>
        </div>
        <div className={styles.subregion}>
          <span className={styles.info}>Sub Region: </span>
          <span>{subregion}</span>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.domain}>
          <span className={styles.info}>Top Level Domain: </span>
          <span>{topLevelDomain[0]}</span>
        </div>
        <div className={styles.currencies}>
          <span className={styles.info}>Currencies: </span>
          <span>{currencies[0].code}</span>
        </div>
        <div className={styles.languages}>
          <span className={styles.info}>Languages: </span>
          {languages.map((item, index) => {
            return <span key={index}>{item.name},</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
