import Image from "next/image";
import Dice from "@/app/assets/icon-dice.svg";

import styles from "./button.module.css";

export function ChangeMessageButton({
  onHandleReSearchMessage,
}: {
  onHandleReSearchMessage: () => void;
}) {
  const handleReSearchMessage = () => {
    onHandleReSearchMessage();
  };

  return (
    <button className={styles.button} onClick={handleReSearchMessage}>
      <Image src={Dice} className={styles.diceImage} alt="Imagem de dado" />
    </button>
  );
}
