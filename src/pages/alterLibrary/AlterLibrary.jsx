import styles from "./AlterLibrary.module.css";
import AddSnippet from "./components/AddSnippet";
import Tags from "../../components/Tags";
export default function AlterLibrary() {
  return (
    <div className={styles.page}>
      <h1>Alter the code snippets library</h1>
      <Tags />
      <AddSnippet />
    </div>
  );
}
