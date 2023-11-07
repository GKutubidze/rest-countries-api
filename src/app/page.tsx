"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Layout/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import CountriesComponent from "./components/Country/CountriesComponent";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(false);
  const mainContainerStyle = {
    backgroundColor: isDark ? "#202C36" : "hsl(0, 0%, 98%)",
  };
  console.log(isDark);

  return (
    <main className={styles.main} style={mainContainerStyle}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <SearchPanel setSearchQuery={setSearchQuery} isDark={isDark} />
      <CountriesComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDark={isDark}
      />
    </main>
  );
}
