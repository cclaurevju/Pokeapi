export default function Button({
  color = "primary",
  label = "",
  onClick = () => {},
}) {
  return (
    <button className={`button btn-${color}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}
