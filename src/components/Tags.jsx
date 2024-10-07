import styles from "./ComponentStyles.module.css";
export default function Tags() {
  return (
    <div className={styles.tagDiv}>
      <h2>Select tags for snippet</h2>
      <div className={styles.tagGrid}>
        <div className={styles.gridItem}>
          <h3>End</h3>
          <div className={styles.selectDiv}>
            <label>
              <input type="radio" value="frontend" name="end" /> Frontend
            </label>
            <label>
              <input type="radio" value="backend" name="end" /> Backend
            </label>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>Language</h3>
          <div className={styles.selectDiv}>
            <label>
              <input type="radio" value="javascript" name="language" />{" "}
              Javascript
            </label>
            <label>
              <input type="radio" value="c#" name="language" /> C#
            </label>
            <label>
              <input type="radio" value="python" name="language" /> Python
            </label>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>Tool</h3>
          <div className={styles.selectDiv}>
            <label>
              <input type="radio" value="react" name="Tool" /> React
            </label>
            <label>
              <input type="radio" value="unity" name="Tool" /> Unity
            </label>
            <label>
              <input type="radio" value="dotNet" name="Tool" /> .Net
            </label>
          </div>
        </div>
        <div className={styles.gridItem} id={styles.checkboxGridItem}>
          <h3>Tags</h3>
          <div className={styles.checkboxDiv}>
            <label>
              <input type="checkbox" value={false} /> Page switch
            </label>
            <label>
              <input type="checkbox" value={false} /> Carousel
            </label>
            <label>
              <input type="checkbox" value={false} /> Api set up
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
