import React from "react";
import Image from "next/image";
import styles from "./FlagComponent.module.css";
type Props = {
  flagUrl: string;
};
const FlagComponent = (props: Props) => {
  const { flagUrl } = props;
  console.log(flagUrl);
  return (
    <div className={styles.flag}>
      <Image
        src={flagUrl}
        alt=""
        width={320}
        height={229}
        layout="responsive"
      />
    </div>
  );
};

export default FlagComponent;
