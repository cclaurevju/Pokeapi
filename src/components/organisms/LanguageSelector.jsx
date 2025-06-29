import LanguageButtonsList from "../molecules/LanguageButtonsList";
import "./organisms.css";

export default function LanguageSelector() {
  return (
    <div className="subheader language-selector">
      <p>Select a language</p>
      <LanguageButtonsList />
    </div>
  );
}
