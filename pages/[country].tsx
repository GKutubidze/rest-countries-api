// pages/[country].tsx
import { useRouter } from "next/router";
import Header from "@/app/components/Layout/Header";
import styles from "./[country].module.css";
import "../src/app/globals.css";
import { Nunito_Sans } from "next/font/google";
import ButtonComponent from "@/app/components/Button/ButtonComponent";
import data from "../src/app/data.json";
import Link from "next/link";
import CountryInfo from "@/app/components/CountryInfo/CountryInfo";
import { useState } from "react";
const nunito = Nunito_Sans({ subsets: ["latin"] });

const Country = () => {
  const router = useRouter();
  const { country } = router.query;
  const countryName = Array.isArray(country) ? country[0] : country;
  const countryData = data.find((item) => item.name === countryName);
  const [darkmode,setDarmode]=useState<boolean>(false);
  if (countryData) {
    const mainContainerStyle = {
      backgroundColor: darkmode ? "#202C36" : "white",
      color:darkmode ? "white":"black"
    };
    return (
<div className={`${styles.main} ${nunito.className}`} style={mainContainerStyle}>
        <Header isDark={darkmode} setIsDark={setDarmode} />
        <Link href="/" className={styles.link}>
          <ButtonComponent />
        </Link>
        <CountryInfo  darkmode={darkmode}
          flagUrl={countryData.flags.svg}
          name={countryData.name}
          nativeName={countryData.nativeName}
          population={countryData.population}
          region={countryData.region}
          subregion={countryData.subregion}
          capital={countryData.capital}
          topLevelDomain={countryData.topLevelDomain}
          currencies={countryData.currencies}
          languages={countryData.languages}
          borders={countryData.borders}
        />
      </div>
    );
  }
};
export default Country;
