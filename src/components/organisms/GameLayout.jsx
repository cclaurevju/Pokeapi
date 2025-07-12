import { useEffect, useState } from "react";
import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";
import axiosInstance from "../../api/axiosInstance";

export default function GameLayout() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isPokemonHidden, setIsPokemonHidden] = useState(true);
  const randomPokemonId = Math.floor(Math.random() * 4);

  const fetchPokemonInfo = async (id) => {
    const response = await axiosInstance.get(`/pokemon/${id}`);
    const pokemonResponse = response.data;
    setPokemons((prev) =>
      prev.length < 4
        ? [
            ...prev,
            {
              id: pokemonResponse.id,
              label: pokemonResponse.name,
              sprites: pokemonResponse.sprites,
            },
          ]
        : prev
    );
  };

  useEffect(() => {
    const uniqueRandomIds = [];
    while (uniqueRandomIds.length < 4 && pokemons.length < 4) {
      const randId = Math.floor(Math.random() * 150);
      if (!uniqueRandomIds.includes(randId)) {
        fetchPokemonInfo(randId);
        uniqueRandomIds.push(randId);
      }
    }
    setSelectedPokemon(pokemons[randomPokemonId]);
  }, [pokemons]);

  const handleSelection = (option) => {
    if (option.id == selectedPokemon.id) setIsPokemonHidden(false);
  };

  return (
    <div className="content game-layout">
      {selectedPokemon ? (
        <PokemonShadow
          imageUrl={selectedPokemon.sprites.other.home.front_default}
          isHidden={isPokemonHidden}
        />
      ) : null}
      <GameButtonList options={pokemons} handleSelection={handleSelection} />
    </div>
  );
}
