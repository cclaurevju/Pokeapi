import PokemonDetailsImageTemplate from "../template/PokemonDetailsImageTemplate";
import PokemonDetailsInfoTemplate from "../template/PokemonDetailsInfoTemplate";
import { useApi } from "../../hooks/useApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetailsPage() {
  const { id } = useParams();
  const { get, data: pokemon } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  useEffect(() => {
    get();
  }, [id]);
  return pokemon ? (
    <>
      <div className="pk-details-page">
        <PokemonDetailsInfoTemplate pokemon={pokemon} />
        <PokemonDetailsImageTemplate
          imageUrl={pokemon.sprites.other["official-artwork"].front_default}
          id={pokemon.id}
          type={pokemon.types[0].type.name}
        />
      </div>
    </>
  ) : null;
}
