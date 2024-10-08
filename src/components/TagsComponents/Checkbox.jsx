export default function Checkbox({ tag, index, checked, setChecked }) {
  const handleOnClick = () => {
    const changed = [...checked];
    changed[index] = !changed[index];
    setChecked(changed);
  };
  return (
    <label>
      <input type="checkbox" value={checked[index]} onClick={handleOnClick} />{" "}
      {tag.charAt(0).toUpperCase() + tag.slice(1)}
    </label>
  );
}
