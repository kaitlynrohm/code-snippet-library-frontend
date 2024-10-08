import styles from "../ComponentStyles.module.css";
import RadioBtn from "./RadioBtn";
export default function RadioBtns({
  name,
  options,
  radioSelect,
  setRadioSelect,
}) {
  return (
    <div className={styles.gridItem}>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      {
        <RadioBtn
          name={name}
          options={options}
          radioSelect={radioSelect}
          setRadioSelect={setRadioSelect}
        />
      }
    </div>
  );
}
