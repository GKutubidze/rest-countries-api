import React from "react";
import styles from "./ButtonComponent.module.css";
import Image from "next/image";
import arrowicon from "../../../../public/assets/arrow.svg";
const ButtonComponent = () => {
  return (
    <div className={styles.button}>
      <button>
        <Image src={arrowicon} alt="" className={styles.image} />
        Back
      </button>
    </div>
  );
};

export default ButtonComponent;
