import LanguageButtonsList from "../molecules/LanguageButtonsList";

export default function LanguageSelector() {
  return (
    <div className="subheader language-selector">
      <p>Select a language</p>
      <LanguageButtonsList />
    </div>
  );
}
