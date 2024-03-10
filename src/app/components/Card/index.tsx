"use client";
import styles from "./card.module.css";
import Divider from "../../assets/pattern-divider-desktop.svg";

import Image from "next/image";
import { useGetMessages } from "@/app/Hooks/useGetMessages";
import { CardViewModel } from "./CardViewModel";
import { ChangeMessageButton } from "./components/ChangeMessageButton";

export function Card() {
  const { data, loading, setReSearch } = useGetMessages();

  const handleReSearchMessage = () => {
    setReSearch((prev) => (prev += 1));
  };

  const viewModel = new CardViewModel(data);

  return (
    <>
      <div className={styles.container}>
        {!loading ? (
          <>
            <h1 className={styles.title}>ADVICE #{viewModel.getData().id}</h1>

            <h2 className={styles.message}>
              &ldquo;{viewModel.getData().advice}&rdquo;
            </h2>

            <Image src={Divider} className={styles.divider} alt="divisor" />
          </>
        ) : (
          <h1 className={styles.title}>Carregando...</h1>
        )}
      </div>
      <div>
        <ChangeMessageButton onHandleReSearchMessage={handleReSearchMessage} />
      </div>
    </>
  );
}
