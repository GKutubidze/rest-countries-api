"use clinet";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.css";
import darkicon from "../../../../public/assets/dark-mode-icon.svg";
import Image from "next/image";
import Link from "next/link";
type Props = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};
const Header = (props: Props) => {
  const { isDark, setIsDark } = props;
  const mainContainerStyle = {
    backgroundColor: isDark ? "#2B3844" : "white",
  };
  return (
    <div className={styles.header} style={mainContainerStyle}>
      <div className={styles.headerTitle}>Where in the world?</div>
      <div className={styles.darkMode}>
        <Image src={darkicon} alt="" />
        <span
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Dark Mode
        </span>
      </div>
    </div>
  );
};

export default Header;
