import styles from "../ComponentStyles.module.css";
export default function RadioBtns({ name, options }) {
  const radioBtns = options.map((option, i) => {
    return (
      <label key={i}>
        <input type="radio" value={option} name={name} />{" "}
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </label>
    );
  });
  return <div className={styles.selectDiv}>{radioBtns}</div>;
}
