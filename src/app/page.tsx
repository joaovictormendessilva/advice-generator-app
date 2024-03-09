import { Card } from "./components/Card";
import { ChangeMessageButton } from "./components/ChangeMessageButton";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card />
      <ChangeMessageButton />
    </div>
  );
}
