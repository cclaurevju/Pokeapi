export default function TabOption({
  option = "option",
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <div
      onClick={onClick}
      className={`tab-option ${isSelected ? "option-selected" : ""}`}
    >
      <p>{option}</p>
      <div></div>
    </div>
  );
}
