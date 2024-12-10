import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Sns from "@/components/sns/Sns";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Image src="/logo.svg" alt="" width={28} height={23} />
            <div className={styles.footerText}>Telegram Gaming</div>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.helikaLogoWrapper}
              href="https://helika.io"
              target="_blank"
            >
              <Image
                src="/helika-logo.svg"
                alt=""
                fill
                className={styles.helikaLogo}
              />
            </Link>
            <div className={styles.notcoin}>
              <Image src="/notcoin-logo.svg" alt="" width={24} height={24} />
              <Link
                href="https://notco.in"
                target="_blank"
                className={styles.notcoinFooter}
              >
                Notcoin
              </Link>
            </div>
          </div>
        </div>
        <Sns style={styles.footerSns} />
      </div>
    </footer>
  );
};

export default Footer;