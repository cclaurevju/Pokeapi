import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import CardData from "../molecules/CardData";
import CardEvolution from "../molecules/CardEvolution";
import CardStats from "../molecules/CardStats";
import PokemonDetailsMainInfo from "../molecules/PokemonDetailsMainInfo";
import CardDetails from "../organisms/CardDetails";
import TabMenu from "../organisms/TabMenu";

export default function PokemonDetailsInfoTemplate({ pokemon }) {
  const { get, data: pokemonSpecies } = useApi(pokemon.species.url);
  useEffect(() => {
    get();
  }, [pokemon]);
  const options = [
    {
      label: "Pokedex Data",
      content: (
        <CardDetails>
          <CardData pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </CardDetails>
      ),
    },
    {
      label: "Stats",
      content: (
        <CardDetails>
          <CardStats pokemon={pokemon} />
        </CardDetails>
      ),
    },
    {
      label: "Evolution",
      content: (
        <CardDetails>
          <CardEvolution pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </CardDetails>
      ),
    },
  ];
  return pokemonSpecies ? (
    <div className="pk-details-info-template">
      <PokemonDetailsMainInfo
        pokemon={pokemon}
        pokemonSpecies={pokemonSpecies}
      />
      <TabMenu options={options} />
    </div>
  ) : null;
}
