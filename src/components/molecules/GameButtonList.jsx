import { useContext } from "react";
import Button from "../atoms/Button";
import { LanguageContext } from "../../contexts/languageContext";

export default function GameButtonList({
  options,
  handleSelection = () => {},
}) {
  const [language] = useContext(LanguageContext);
  const getNameByLanguage = (names) => {
    const name = names.find((n) => {
      return n.language.name == language;
    });
    return name.name;
  };
  return (
    <div className="game-button-list">
      {options.map((option, i) => (
        <Button
          key={i}
          label={getNameByLanguage(option.names)}
          onClick={() => handleSelection(option)}
        />
      ))}
    </div>
  );
}
