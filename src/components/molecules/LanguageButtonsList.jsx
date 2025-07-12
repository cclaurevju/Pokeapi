import LanguageButton from "../atoms/LanguageButton";
import { LanguageContext } from "../../contexts/languageContext";
import { useContext } from "react";

const languages = [
  {
    value: "ja",
    flag: "japan",
  },
  {
    value: "ko",
    flag: "south-korea",
  },
  {
    value: "en",
    flag: "usa",
  },
  {
    value: "es",
    flag: "spain",
  },
];
export default function LanguageButtonsList() {
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <div className="language-buttons-list">
      {languages.map((lang, i) => {
        return (
          <LanguageButton
            key={`lang-${i}`}
            value={lang.value}
            flag={lang.flag}
            onClick={() => setLanguage(lang.value)}
            isSelected={language == lang.value}
          />
        );
      })}
    </div>
  );
}
