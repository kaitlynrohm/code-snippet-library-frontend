import styles from "../AlterLibrary.module.css";
export default function AddSnippet({ title, setTitle, snippet, setSnippet }) {
  const handleInputChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "snippet") setSnippet(e.target.value);
  };
  return (
    <div className={styles.inputDiv}>
      <h2>Code snippet</h2>
      <div className={styles.textInputDiv}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.textInputDiv}>
        <label>Enter snippet:</label>
        <br />
        <textarea
          name="snippet"
          id="snippet"
          onChange={handleInputChange}
        ></textarea>
      </div>
    </div>
  );
}
