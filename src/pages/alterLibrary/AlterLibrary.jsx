import styles from "./AlterLibrary.module.css";
import AddSnippet from "./components/AddSnippet";
import Tags from "../../components/Tags";
import { useState } from "react";
export default function AlterLibrary() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [endTags, setEndTags] = useState(["frontend", "backend"]);
  const [languageTags, setLanguageTags] = useState([
    "javascript",
    "python",
    "c#",
  ]);
  const [toolTags, setToolTags] = useState(["react", "unity", ".net", "none"]);
  const [generalTags, setGeneralTags] = useState([
    "page switch",
    "carousel",
    "api set up",
  ]);
  const [checked, setChecked] = useState([false, false, false]);
  const [radioSelect, setRadioSelect] = useState({
    end: "",
    language: "",
    tool: "",
  });
  return (
    <div className={styles.page}>
      <h1>Alter the code snippets library</h1>
      <Tags
        endTags={endTags}
        languageTags={languageTags}
        toolTags={toolTags}
        generalTags={generalTags}
        checked={checked}
        setChecked={setChecked}
        radioSelect={radioSelect}
        setRadioSelect={setRadioSelect}
      />
      <AddSnippet setTitle={setTitle} setSnippet={setSnippet} />
      <button className={styles.addBtn}>Add</button>
    </div>
  );
}
