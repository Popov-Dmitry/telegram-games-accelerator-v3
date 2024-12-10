import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Sns from "@/components/sns/Sns";
import Button from "@/components/button/Button";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="" width={32} height={32} />
          <div className={styles.text}>Telegram Gaming</div>
        </div>
        <div className={styles.right}>
          <Sns />
          <Button
            text="apply"
            size="sm"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;