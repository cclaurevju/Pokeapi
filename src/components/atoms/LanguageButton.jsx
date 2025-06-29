import "./atoms.css";

export default function LanguageButton({ value, flag }) {
  return (
    // <div className="lang-button">
    <img
      className="lang-button"
      src={`src/assets/images/flags/${flag}.png`}
      alt=""
    />
    // </div>
  );
}
