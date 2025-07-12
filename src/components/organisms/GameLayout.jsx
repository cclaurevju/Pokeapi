import { useEffect, useState } from "react";
import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";
import axiosInstance from "../../api/axiosInstance";
import { getRandomIds, getRandomIndex } from "../../utils/random";

const MAX_OPTIONS = 4;

export default function GameLayout() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isPokemonHidden, setIsPokemonHidden] = useState(true);
  const [uniqueRandomIds, setUniqueRandomIds] = useState(() =>
    getRandomIds(MAX_OPTIONS)
  );
  const [randomPokemonId, setRandomPokemonId] = useState(() =>
    getRandomIndex(MAX_OPTIONS)
  );
  const [shake, setShake] = useState(false);

  const fetchPokemonInfo = async (id) => {
    const response = await axiosInstance.get(`/pokemon-species/${id}`);
    const pokemonResponse = response.data;
    setPokemons((prev) =>
      prev.length < MAX_OPTIONS && !prev.some((p) => p.id == pokemonResponse.id)
        ? [
            ...prev,
            {
              id: pokemonResponse.id,
              names: pokemonResponse.names,
            },
          ]
        : prev
    );
  };

  const fetchSelectedPokemon = async (id) => {
    const response = await axiosInstance.get(`/pokemon/${id}`);
    const pokemonResponse = response.data;
    setSelectedPokemon({
      id: pokemonResponse.id,
      label: pokemonResponse.name,
      sprites: pokemonResponse.sprites,
    });
  };

  useEffect(() => {
    if (pokemons.length == 0) {
      uniqueRandomIds.forEach((id) => {
        fetchPokemonInfo(id);
      });
      fetchSelectedPokemon(uniqueRandomIds[randomPokemonId]);
    }
  }, [pokemons]);

  const handleReset = () => {
    setUniqueRandomIds(() => getRandomIds(MAX_OPTIONS));
    setRandomPokemonId(() => getRandomIndex(MAX_OPTIONS));
    setPokemons([]);
    setIsPokemonHidden(true);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSelection = (option) => {
    if (option.id == selectedPokemon.id) {
      setIsPokemonHidden(false);
      setTimeout(() => {
        handleReset();
      }, 3000);
    } else {
      triggerShake();
    }
  };

  return (
    <div className="content game-layout">
      {selectedPokemon ? (
        <PokemonShadow
          imageUrl={selectedPokemon.sprites.other.home.front_default}
          isHidden={isPokemonHidden}
          shake={shake}
        />
      ) : null}
      <GameButtonList options={pokemons} handleSelection={handleSelection} />
    </div>
  );
}
