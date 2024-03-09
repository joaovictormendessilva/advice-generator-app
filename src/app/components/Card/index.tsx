import styles from "./card.module.css";
import Divider from "../../assets/pattern-divider-desktop.svg";

import Image from "next/image";

export function Card() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ADVICE #117</h1>

      <h2 className={styles.message}>
        &ldquo;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&rdquo;
      </h2>

      <Image src={Divider} className={styles.divider} alt="divisor" />
    </div>
  );
}
