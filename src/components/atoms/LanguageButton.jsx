export default function LanguageButton({
  value,
  flag,
  isSelected,
  onClick = () => {},
}) {
  return (
    <img
      className={`lang-button ${isSelected ? "lang-selected" : ""}`}
      src={`src/assets/images/flags/${flag}.png`}
      alt={value}
      onClick={onClick}
    />
  );
}
