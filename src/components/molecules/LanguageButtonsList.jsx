import LanguageButton from "../atoms/LanguageButton";

const languages = [
  {
    value: "japanese",
    flag: "japan",
  },
  {
    value: "korean",
    flag: "south-korea",
  },
  {
    value: "english",
    flag: "usa",
  },
  {
    value: "spanish",
    flag: "spain",
  },
];
export default function LanguageButtonsList() {
  return (
    <div className="language-buttons-list">
      {languages.map((lang, i) => {
        return (
          <LanguageButton
            key={`lang-${i}`}
            value={lang.value}
            flag={lang.flag}
          />
        );
      })}
    </div>
  );
}
