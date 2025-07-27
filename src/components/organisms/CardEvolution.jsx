import CardInfoText from "../atoms/CardInfoText";
import PokemonEvolutionImage from "../molecules/PokemonEvolutionImage";
import PokemonEvolutionMainInfo from "../molecules/PokemonEvolutionMainInfo";

export default function CardEvolution() {
  return (
    <div>
      <CardInfoText />
      <PokemonEvolutionImage />
      <PokemonEvolutionMainInfo />
    </div>
  );
}
