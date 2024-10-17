import styles from "../ComponentStyles.module.css";
import Checkbox from "./Checkbox";
import AddTag from "./addTag";
export default function Checkboxes({ tags, checked, setChecked, type }) {
  return (
    <div className={styles.checkboxDiv}>
      {tags.map((tag, i) => {
        return (
          <Checkbox
            key={i}
            tag={tag}
            index={i}
            checked={checked}
            setChecked={setChecked}
          />
        );
      })}
      {type == "add" ? <AddTag section="tags" /> : null}
    </div>
  );
}
