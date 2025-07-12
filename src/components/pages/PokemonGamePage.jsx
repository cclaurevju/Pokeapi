import { useState } from "react";
import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";
import GameLayout from "../organisms/GameLayout";
import LanguageSelector from "../organisms/LanguageSelector";
import { LanguageContext } from "../../contexts/languageContext";

export default function PokemonGamePage() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <LanguageSelector />
      <GameLayout />
    </LanguageContext.Provider>
  );
}
