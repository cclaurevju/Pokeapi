import BackButton from "../atoms/BackButton";
import PokemonDetailsId from "../atoms/PokemonDetailsId";
import PageTitle from "../atoms/PageTitle";
import PokemonDetailsGeneration from "../atoms/PokemonDetailsGeneration";
import PokemonTagList from "./PokemonTagList";
import PageSubtitle from "../atoms/PageSubtitle";

const mockTypes = [{ type: { name: "grass" } }];

export default function PokemonDetailsMainInfo() {
  return (
    <div className="pk-details-main-info">
      <BackButton />
      <PokemonDetailsId />
      <PageTitle>Pokemon</PageTitle>
      <PageSubtitle>Generation 0</PageSubtitle>
      <PokemonTagList types={mockTypes} size="md" isCircle showLabel={false} />
    </div>
  );
}
