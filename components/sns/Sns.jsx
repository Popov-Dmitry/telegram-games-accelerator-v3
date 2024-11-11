import React from "react";
import styles from "./sns.module.css";
import Link from "next/link";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";

const Sns = ({ style }) => {
  return (
    <div className={joinClassNames(styles.sns, style)}>
      <Link href="https://x.com/TGAccelerator" target="_blank">
        <Image src="/twitter_icon.svg" alt="" width={14} height={14} />
      </Link>
      <Link href="https://www.linkedin.com/company/telegram-gaming-accelerator" target="_blank">
        <Image src="/linkedin_icon.svg" alt="" width={14} height={14} />
      </Link>
      <Link href="https://t.me/tggamingaccelerator" target="_blank">
        <Image src="/telegram_icon.svg" alt="" width={17} height={14} />
      </Link>
    </div>
  );
};

export default Sns;