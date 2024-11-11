import React from "react";
import styles from "./icon.module.css";
import { joinClassNames } from "@/utils/join-class-names";
import Image from "next/image";

const Icon = ({ size = "sm", color = "white", src }) => {
  return (
    <div className={joinClassNames(styles.iconContainer, styles[size], styles[color])}>
      <Image
        className={styles.icon}
        src={src}
        alt=""
        width={0}
        height={0}
      />
    </div>
  );
};

export default Icon;