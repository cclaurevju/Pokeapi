import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";

export default function GameLayout() {
  return (
    <div className="content game-layout">
      <PokemonShadow />
      <GameButtonList />
    </div>
  );
}
