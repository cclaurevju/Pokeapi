import PokemonCardId from "../atoms/PokemonCardId";
import PokemonCardName from "../atoms/PokemonCardName";

export default function PokemonCardInfo({ pokemon }) {
  return (
    <div className="pk-card-info">
      <PokemonCardId id={pokemon.id} />
      <PokemonCardName name={pokemon.name} />
    </div>
  );
}
