import PokemonDetailsImageTemplate from "../template/PokemonDetailsImageTemplate";
import PokemonDetailsInfoTemplate from "../template/PokemonDetailsInfoTemplate";

export default function PokemonDetailsPage() {
  return (
    <div className="pk-details-page">
      <PokemonDetailsInfoTemplate />
      <PokemonDetailsImageTemplate />
    </div>
  );
}
