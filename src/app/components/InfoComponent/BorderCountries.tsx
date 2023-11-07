import React from "react";
import styles from "./BorderCountries.module.css";
type Props = {
  borders: string[] | undefined;
};
const BorderCountries = (props: Props) => {
  const { borders } = props;
  return (
    <div className={styles.borderCountries}>
      <div className={styles.borderInfo}>Border Countries: </div>
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
