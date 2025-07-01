import PokemonCardId from "../atoms/PokemonCardId";
import PokemonCardName from "../atoms/PokemonCardName";

export default function PokemonCardInfo() {
  return (
    <div className="pk-card-info">
      <PokemonCardId />
      <PokemonCardName />
    </div>
  );
}
