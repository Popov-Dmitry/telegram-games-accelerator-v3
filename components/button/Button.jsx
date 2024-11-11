import React from "react";
import styles from "./button.module.css";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";


const Button = ({
  text,
  color = "purple",
  size = "lg",
  type,
  disabled,
  onClick,
  className,
  href,
  newTab
}) => {
  if (href) {
    return (
      <Link
        className={joinClassNames(styles.button, styles[color], styles[size], className)}
        href={href}
        target={newTab ? "_blank" : undefined}
      >
        <div className={styles[`${color}Text`]}>
          {text}
        </div>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={joinClassNames(styles.button, styles[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={styles[`${color}Text`]}>
        {text}
      </div>
    </button>
  );
};

export default Button;