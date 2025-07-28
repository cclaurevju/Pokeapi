import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { formatId } from "../../utils/formatId";
import { capitalizeText } from "../../utils/capitalizeText";
import PokemonTagList from "./PokemonTagList";

export default function PokemonEvolutionMainInfo({ pokemonName }) {
  const { get, data: pokemon } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  useEffect(() => {
    get();
  }, [pokemonName]);
  return pokemon ? (
    <div className="pk-evolution-info">
      <div>#{formatId(pokemon.id)}</div>
      <div>{capitalizeText(pokemon.name)}</div>
      <PokemonTagList types={pokemon.types} showLabel={false} isCircle />
    </div>
  ) : null;
}
