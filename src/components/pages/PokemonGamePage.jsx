import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";
import GameLayout from "../organisms/GameLayout";
import LanguageSelector from "../organisms/LanguageSelector";

export default function PokemonGamePage() {
  return (
    <>
      <LanguageSelector />
      <GameLayout />
    </>
  );
}
