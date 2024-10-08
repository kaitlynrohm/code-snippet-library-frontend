import styles from "../ComponentStyles.module.css";
export default function RadioBtn({
  name,
  options,
  radioSelect,
  setRadioSelect,
}) {
  const onOptionChange = (e) => {
    const changed = { ...radioSelect };
    changed[name] = e.target.value;
    setRadioSelect(changed);
  };

  const radioBtns = options.map((option, i) => {
    return (
      <label key={i}>
        <input
          type="radio"
          value={option}
          name={name}
          onChange={onOptionChange}
        />{" "}
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </label>
    );
  });
  return <div className={styles.selectDiv}>{radioBtns}</div>;
}
