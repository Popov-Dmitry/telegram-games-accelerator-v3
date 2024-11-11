import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const Logo = ({ src, width, height }) => {
  return (
    <div className={styles.logoContainer}>
      <Image src={src} alt="" width={width} height={height} />
    </div>
  );
};

export default Logo;