import styles from "../AlterLibrary.module.css";
export default function AddSnippet() {
  return (
    <div className={styles.inputDiv}>
      <h2>Code snippet</h2>
      <div className={styles.textInputDiv}>
        <label>Title: </label>
        <input type="text" name="title" id="title" />
      </div>
      <div className={styles.textInputDiv}>
        <label>Enter snippet:</label>
        <br />
        <textarea name="snippet" id="snippet"></textarea>
      </div>
    </div>
  );
}
