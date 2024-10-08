import { useState } from "react";
import styles from "../ComponentStyles.module.css";
import Checkbox from "./Checkbox";
export default function Checkboxes({ tags }) {
  const [checked, setChecked] = useState([false, false, false]);

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
    </div>
  );
}
