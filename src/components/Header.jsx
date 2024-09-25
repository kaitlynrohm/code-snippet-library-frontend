import styles from "./ComponentStyles.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Code snippets</p>
    </div>
  );
}
