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
        <div className={styles.item}>
          <div className={styles.title}>SECTION 18 - CONTACT INFORMATION</div>
          <div className={styles.text}>
            <div>
              Questions about the Terms of Service should be sent to us at <a href="mailto:support@helika.io" className={styles.underline}>support@helika.io</a>
            </div>
            <div>Our contact information is posted below:</div>
            <div>Helika Corp</div>
            <a href="mailto:support@helika.io" className={styles.underline}>support@helika.io</a>
            <div>2200 Rue Stanley, Montreal, Quebec, Canada, H3A 1R6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;