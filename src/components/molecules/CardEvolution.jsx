import CardInfoText from "../atoms/CardInfoText";
import PokemonEvolutionImage from "./PokemonEvolutionImage";
import PokemonEvolutionMainInfo from "./PokemonEvolutionMainInfo";

export default function CardEvolution() {
  return (
    <div>
      <CardInfoText />
      <PokemonEvolutionImage />
      <PokemonEvolutionMainInfo />
    </div>
  );
}
