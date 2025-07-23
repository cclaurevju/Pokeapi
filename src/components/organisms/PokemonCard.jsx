import { useEffect } from "react";
import PokemonCardInfo from "../molecules/PokemonCardInfo";
import PokemonTagList from "../molecules/PokemonTagList";
import { useApi } from "../../hooks/useApi";

export default function PokemonCard({ pokemonUrl }) {
  const { data: pokemon, get } = useApi(pokemonUrl);
  useEffect(() => {
    if (!pokemon) {
      get();
    }
  }, []);
  return pokemon ? (
    <div className="pk-card-container">
      <div className={`pk-card bg-color-type-${pokemon.types[0].type.name}`}>
        <div className="pk-card-mask">
          <img
            className="pk-card-pokeball-mask"
            src="src\assets\images\masks\pokeball.png"
          />
          <img
            className="pk-card-dots-mask"
            src="src\assets\images\masks\dots-horizontal.png"
          />
        </div>
        <div className="pk-card-content">
          <div className="pk-card-properties">
            <PokemonCardInfo pokemon={pokemon} />
            <PokemonTagList types={pokemon.types} />
          </div>
          <div className="pk-card-img-container">
            <img
              className="pk-card-img"
              src={pokemon.sprites.other.home.front_default}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
