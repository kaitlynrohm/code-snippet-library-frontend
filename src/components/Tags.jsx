import { useState } from "react";
import styles from "./ComponentStyles.module.css";
import Checkboxes from "./TagsComponents/checkboxes";
import RadioBtns from "./TagsComponents/RadioBtns";
export default function Tags() {
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
    <div className={styles.tagDiv}>
      <h2>Select tags for snippet</h2>
      <div className={styles.tagGrid}>
        <RadioBtns
          name="end"
          options={endTags}
          radioSelect={radioSelect}
          setRadioSelect={setRadioSelect}
        />
        <RadioBtns
          name="language"
          options={languageTags}
          radioSelect={radioSelect}
          setRadioSelect={setRadioSelect}
        />
        <RadioBtns
          name="tool"
          options={toolTags}
          radioSelect={radioSelect}
          setRadioSelect={setRadioSelect}
        />
        <div className={styles.gridItem} id={styles.checkboxGridItem}>
          <h3>Tags</h3>
          <Checkboxes
            tags={generalTags}
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      </div>
    </div>
  );
}
