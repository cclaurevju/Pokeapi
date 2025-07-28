import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";

export default function PokemonEvolutionImage({ pokemonName }) {
  const { get, data: pokemon } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  useEffect(() => {
    get();
  }, [pokemonName]);
  return pokemon ? (
    <img
      className="pk-evolution-image"
      src={pokemon.sprites.other["official-artwork"].front_default}
      alt=""
    />
  ) : null;
}
