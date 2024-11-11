import styles from "./icon-link.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";

const IconLink = ({ href, text, size = "sm", icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={size === "sm" ? styles.small : styles.large}
    >
      <div>{text}</div>
      {size !== "sm" && (
        <div className={styles.largeIconVisible}>
          <Image
            src={icon}
            alt=""
            height={40}
            width={40}
          />
        </div>
      )}
      {size === "sm" && (
        <div className={styles.smallIconVisible}>
          <Image
            src={icon}
            alt=""
            height={16}
            width={16}
          />
        </div>
      )}
      <div className={styles.mobileIconVisible}>
        <Image
          src={icon}
          alt=""
          height={14}
          width={14}
        />
      </div>
    </Link>
  );
};

export default IconLink;