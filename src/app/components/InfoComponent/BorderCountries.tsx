import React from "react";
import styles from "./BorderCountries.module.css";
type Props = {
  borders: string[] | undefined;
  darkmode:boolean;
};
const BorderCountries = (props: Props) => {
  const { borders,darkmode } = props;
  const mainContainerStyle = {
     color:darkmode ? "white":"black"

  };
  return (
    <div className={styles.borderCountries}>
      <div className={styles.borderInfo} style={mainContainerStyle}>Border Countries: </div>
      <div className={styles.countries}>
        {borders
          ? borders.map((item, index) => (
              <span key={index} className={styles.country}>
                {item}
              </span>
            ))
          : "No bordering countries found"}
      </div>
    </div>
  );
};

export default BorderCountries;
