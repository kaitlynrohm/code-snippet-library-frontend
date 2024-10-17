import { useState } from "react";
import styles from "../ComponentStyles.module.css";
export default function AddTag({ section }) {
  const [newTag, setNewTag] = useState("");

  const handleClick = () => {
    console.log(section, newTag);
    setNewTag("");
  };
  return (
    <div className={styles.addTagDiv}>
      <input
        placeholder="Add new"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
