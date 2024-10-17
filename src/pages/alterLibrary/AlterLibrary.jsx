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
  const [toolTags, setToolTags] = useState([
    "react",
    "unity",
    ".net",
    "node.js",
    "none",
  ]);
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

  const handleBtnClick = () => {
    const snippetInfo = { title: title, ...radioSelect, snippet: snippet };
    console.log(snippetInfo);
  };
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
        type={"add"}
      />
      <AddSnippet setTitle={setTitle} setSnippet={setSnippet} />
      <button className={styles.addBtn} onClick={handleBtnClick}>
        Add
      </button>
    </div>
  );
}
