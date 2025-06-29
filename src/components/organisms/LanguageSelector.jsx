import LanguageButtonsList from "../molecules/LanguageButtonsList";
import "./organisms.css";

export default function LanguageSelector() {
  return (
    <div className="subheader">
      <p>Select a language</p>
      <LanguageButtonsList />
    </div>
  );
}
