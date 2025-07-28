import CardData from "../molecules/CardData";
import CardEvolution from "../molecules/CardEvolution";
import CardStats from "../molecules/CardStats";
import PokemonDetailsMainInfo from "../molecules/PokemonDetailsMainInfo";
import CardDetails from "../organisms/CardDetails";
import TabMenu from "../organisms/TabMenu";

const options = [
  {
    label: "Pokedex Data",
    content: (
      <CardDetails>
        <CardData />
      </CardDetails>
    ),
  },
  {
    label: "Stats",
    content: (
      <CardDetails>
        <CardStats />
      </CardDetails>
    ),
  },
  {
    label: "Evolution",
    content: (
      <CardDetails>
        <CardEvolution />
      </CardDetails>
    ),
  },
];

export default function PokemonDetailsInfoTemplate() {
  return (
    <div className="pk-details-info-template">
      <PokemonDetailsMainInfo />
      <TabMenu options={options} />
    </div>
  );
}
