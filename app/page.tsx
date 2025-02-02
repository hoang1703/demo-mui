import styles from "./page.module.css";
import Menu1 from "@/lib/components/menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Menu1 />
      </main>
    </div>
  );
}
