import { Card } from "./components/Card";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}
