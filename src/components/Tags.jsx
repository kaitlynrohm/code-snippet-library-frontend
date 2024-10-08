import styles from "./ComponentStyles.module.css";
import Checkboxes from "./TagsComponents/checkboxes";
import RadioBtns from "./TagsComponents/RadioBtns";
export default function Tags() {
  return (
    <div className={styles.tagDiv}>
      <h2>Select tags for snippet</h2>
      <div className={styles.tagGrid}>
        <div className={styles.gridItem}>
          <h3>End</h3>
          <RadioBtns name="end" options={["frontend", "backend"]} />
        </div>
        <div className={styles.gridItem}>
          <h3>Language</h3>
          <RadioBtns name="language" options={["javascript", "python", "c#"]} />
        </div>
        <div className={styles.gridItem}>
          <h3>Tool</h3>
          <RadioBtns name="tool" options={["react", "unity", ".net", "none"]} />
        </div>
        <div className={styles.gridItem} id={styles.checkboxGridItem}>
          <h3>Tags</h3>
          <Checkboxes tags={["page switch", "carousel", "api set up"]} />
        </div>
      </div>
    </div>
  );
}
