import BackButton from "../atoms/BackButton";
import PokemonDetailsId from "../atoms/PokemonDetailsId";
import PageTitle from "../atoms/PageTitle";
import PokemonDetailsGeneration from "../atoms/PokemonDetailsGeneration";
import PokemonTagList from "./PokemonTagList";

export default function PokemonDetailsMainInfo() {
  return (
    <div>
      <BackButton />
      <PokemonDetailsId />
      <PageTitle />
      <PokemonDetailsGeneration />
      <PokemonTagList />
    </div>
  );
}
