import PokemonCardId from "../atoms/PokemonCardId";
import PokemonCardName from "../atoms/PokemonCardName";
import "./molecules.css";

export default function PokemonCardInfo() {
  return (
    <div className="pk-card-info">
      <PokemonCardId />
      <PokemonCardName />
    </div>
  );
}
