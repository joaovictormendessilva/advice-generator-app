import Image from "next/image";
import Dice from "@/app/assets/icon-dice.svg";

import styles from "./button.module.css";

export function ChangeMessageButton() {
  return (
    <button className={styles.button}>
      <Image src={Dice} className={styles.diceImage} alt="Imagem de dado" />
    </button>
  );
}
