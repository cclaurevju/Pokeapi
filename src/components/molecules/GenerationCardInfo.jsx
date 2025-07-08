import PokemonCardId from "../atoms/PokemonCardId";
import PokemonCardName from "../atoms/PokemonCardName";

export default function GenerationCardInfo() {
  return (
    <div className="gn-card-info">
      <PokemonCardName>Generation 1</PokemonCardName>
      <PokemonCardId>#001 - #152</PokemonCardId>
    </div>
  );
}
