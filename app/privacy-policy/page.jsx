import React from "react";
import { privacyPolicy } from "@/data";
import styles from "./privacy-policy.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <div className={joinClassNames(styles.title, styles.textCenter)}>
        Privacy Policy
      </div>
      <div className={styles.list}>
        {privacyPolicy.map(({ title, content }) => (
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