import { useState } from "react";
import styles from "./ComponentStyles.module.css";
import Checkboxes from "./TagsComponents/checkboxes";
import RadioBtns from "./TagsComponents/RadioBtns";
export default function Tags(props) {
  // const [endTags, setEndTags] = useState(["frontend", "backend"]);
  // const [languageTags, setLanguageTags] = useState([
  //   "javascript",
  //   "python",
  //   "c#",
  // ]);
  // const [toolTags, setToolTags] = useState(["react", "unity", ".net", "none"]);
  // const [generalTags, setGeneralTags] = useState([
  //   "page switch",
  //   "carousel",
  //   "api set up",
  // ]);
  // const [checked, setChecked] = useState([false, false, false]);
  // const [radioSelect, setRadioSelect] = useState({
  //   end: "",
  //   language: "",
  //   tool: "",
  // });
  return (
    <div className={styles.tagDiv}>
      <h2>Select tags for snippet</h2>
      <div className={styles.tagGrid}>
        <RadioBtns
          name="end"
          options={props.endTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
        />
        <RadioBtns
          name="language"
          options={props.languageTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
        />
        <RadioBtns
          name="tool"
          options={props.toolTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
        />
        <div className={styles.gridItem} id={styles.checkboxGridItem}>
          <h3>Tags</h3>
          <Checkboxes
            tags={props.generalTags}
            checked={props.checked}
            setChecked={props.setChecked}
          />
        </div>
      </div>
    </div>
  );
}
