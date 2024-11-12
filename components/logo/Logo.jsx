import React from "react";
import styles from "./logo.module.css";

const Logo = ({ src, width, height }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} alt="" width={width} height={height} />
    </div>
  );
};

export default Logo;