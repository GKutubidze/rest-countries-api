import React from "react";
import "./interface";
import styles from "./CountryInfo.module.css";
import Image from "next/image";
import InfoComponent from "../InfoComponent/InfoComponent";
import BorderCountries from "../InfoComponent/BorderCountries";
import FlagComponent from "../FlagComponent/FlagComponent";
interface NewProps extends Props{
darkmode:boolean;
}
const CountryInfo = (props: NewProps) => {
 
  const {
    darkmode,
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
  const mainContainerStyle = {
    backgroundColor: darkmode ? "#202C36" : "white",
  };
  return (
    <div className={styles.main} style={mainContainerStyle}> 
      <div className={styles.responsive}>
        <FlagComponent flagUrl={flagUrl} />
        <div className={styles.contant}>
          <div className={styles.name}> {name}</div>
          <InfoComponent {...props} />
          <BorderCountries borders={borders} />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
