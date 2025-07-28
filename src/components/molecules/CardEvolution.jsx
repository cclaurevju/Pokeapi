import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import CardInfoText from "../atoms/CardInfoText";
import PokemonEvolutionImage from "./PokemonEvolutionImage";
import PokemonEvolutionMainInfo from "./PokemonEvolutionMainInfo";

export default function CardEvolution({ pokemon, pokemonSpecies }) {
  const { get, data } = useApi(pokemonSpecies.evolution_chain.url);
  useEffect(() => {
    get();
  }, [pokemon, pokemonSpecies]);

  const pokemonsNames = () => {
    const names = [];

    let current = data.chain;
    while (current) {
      names.push(current.species.name);
      current = current.evolves_to?.[0] || null;
    }

    return names;
  };
  return data ? (
    <div className="card-evolution">
      <CardInfoText color={pokemon.types[0].type.name}>
        Evolution Chart
      </CardInfoText>
      <div className="pk-evolution-image-group">
        {pokemonsNames().map((p) => (
          <div className="pk-evolution-image-container">
            <PokemonEvolutionImage pokemonName={p} />
            <PokemonEvolutionMainInfo pokemonName={p} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
