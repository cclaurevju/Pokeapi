import BackButton from "../atoms/BackButton";
import PokemonDetailsId from "../atoms/PokemonDetailsId";
import PageTitle from "../atoms/PageTitle";
import PokemonDetailsGeneration from "../atoms/PokemonDetailsGeneration";
import PokemonTagList from "./PokemonTagList";
import PageSubtitle from "../atoms/PageSubtitle";
import { capitalizeText } from "../../utils/capitalizeText";

export default function PokemonDetailsMainInfo({ pokemon }) {
  return (
    <div className="pk-details-main-info">
      <BackButton />
      <PokemonDetailsId id={pokemon.id} />
      <PageTitle>{capitalizeText(pokemon.name)}</PageTitle>
      <PageSubtitle>Generation 0</PageSubtitle>
      <PokemonTagList
        types={pokemon.types}
        size="md"
        isCircle
        showLabel={false}
      />
    </div>
  );
}
