import React from "react";
import styles from "./InfoComponent.module.css";
import "../CountryInfo/interface";
interface NewProps extends Props{
  darkmode:boolean;
}
const InfoComponent = (props: NewProps) => {
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
    darkmode
  } = props;
  const mainContainerStyle = {
     color:darkmode ? "white":"black"

  };
  return (
    <div className={styles.main} style={mainContainerStyle}>
      <div className={styles.infoContainer} >
        <div className={styles.nativeName} style={mainContainerStyle}>
          <span className={styles.info} >Native Name: </span>
          <span>{nativeName} </span>
        </div>
        <div className={styles.population} style={mainContainerStyle}>
          <span className={styles.info}>Population: </span>
          <span>{population}</span>
        </div>
        <div className={styles.region} style={mainContainerStyle}>
          <span className={styles.info}>Region: </span>
          <span>{region}</span>
        </div>
        <div className={styles.subregion} style={mainContainerStyle}>
          <span className={styles.info}>Sub Region: </span>
          <span>{subregion}</span>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.domain} style={mainContainerStyle}>
          <span className={styles.info}>Top Level Domain: </span>
          <span>{topLevelDomain[0]}</span>
        </div>
        <div className={styles.currencies} style={mainContainerStyle} >
          <span className={styles.info}>Currencies: </span>
          <span>{currencies?.[0].code}</span>
        </div>
        <div className={styles.languages} style={mainContainerStyle}>
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
