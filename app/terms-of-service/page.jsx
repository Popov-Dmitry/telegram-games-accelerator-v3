import React from "react";
import { termsOfService } from "@/data";
import styles from "./terms-of-service.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <div className={joinClassNames(styles.title, styles.textCenter)}>
        TERMS OF SERVICE
      </div>
      <div className={styles.list}>
        {termsOfService.map(({ title, content }) => (
          <div key={title} className={styles.item}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;