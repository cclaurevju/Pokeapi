import LanguageButton from "../atoms/LanguageButton";
import "./molecules.css";

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
    <div>
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
