import styles from "./ComponentStyles.module.css";
import Checkboxes from "./TagsComponents/checkboxes";
import RadioBtns from "./TagsComponents/RadioBtns";
export default function Tags(props) {
  return (
    <div className={styles.tagDiv}>
      <h2>Select tags for snippet</h2>
      <div className={styles.tagGrid}>
        <RadioBtns
          name="end"
          options={props.endTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
          type={props.type}
          section={"ends"}
        />
        <RadioBtns
          name="language"
          options={props.languageTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
          type={props.type}
          section={"languages"}
        />
        <RadioBtns
          name="tool"
          options={props.toolTags}
          radioSelect={props.radioSelect}
          setRadioSelect={props.setRadioSelect}
          type={props.type}
          section={"tools"}
        />
        <div className={styles.gridItem} id={styles.checkboxGridItem}>
          <h3>Tags</h3>
          <Checkboxes
            tags={props.generalTags}
            checked={props.checked}
            setChecked={props.setChecked}
            type={props.type}
          />
        </div>
      </div>
    </div>
  );
}
