import { useEffect, useReducer, useState } from "react";
import PokemonShadow from "../atoms/PokemonShadow";
import GameButtonList from "../molecules/GameButtonList";
import axiosInstance from "../../api/axiosInstance";
import { getRandomIds, getRandomIndex } from "../../utils/random";
import GameScoreLayout from "../molecules/GameInfoLayout";

const MAX_OPTIONS = 4;
const MAX_ATTEMPTS = 2;

const getDefaultGame = () => {
  return {
    streak: 0,
    attempt: 0,
    pokemons: [],
    selectedPokemon: null,
    isPokemonHidden: true,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-pokemon":
      if (
        !state.pokemons.some((p) => p.id == action.pokemon.id) &&
        state.pokemons.length < MAX_OPTIONS
      )
        return { ...state, pokemons: [...state.pokemons, action.pokemon] };
      else return state;

    case "set-selected-pokemon":
      return { ...state, selectedPokemon: action.pokemon };

    case "win":
      return { ...getDefaultGame(), streak: state.streak + 1 };

    case "fail":
      if (state.attempt == MAX_ATTEMPTS)
        return reducer(state, { type: "lose" });
      else return { ...state, attempt: state.attempt + 1 };

    case "lose":
      return getDefaultGame();

    default:
      console.error("Unknown action type: ", action.type);
      break;
  }
};

export default function GameLayout() {
  const [isPokemonHidden, setIsPokemonHidden] = useState(true);
  const [shake, setShake] = useState(false);
  const [game, dispatch] = useReducer(reducer, getDefaultGame());

  const fetchPokemonInfo = async (id) => {
    const response = await axiosInstance.get(`/pokemon-species/${id}`);
    const pokemonResponse = response.data;
    const mappedPokemon = {
      id: pokemonResponse.id,
      names: pokemonResponse.names,
    };
    dispatch({ type: "add-pokemon", pokemon: mappedPokemon });
  };

  const fetchSelectedPokemon = async (id) => {
    const response = await axiosInstance.get(`/pokemon/${id}`);
    const pokemonResponse = response.data;
    const mappedPokemon = {
      id: pokemonResponse.id,
      label: pokemonResponse.name,
      sprites: pokemonResponse.sprites,
    };
    dispatch({ type: "set-selected-pokemon", pokemon: mappedPokemon });
  };

  useEffect(() => {
    if (game.pokemons.length == 0) {
      const uniqueRandomIds = getRandomIds(MAX_OPTIONS);
      uniqueRandomIds.forEach((id) => {
        fetchPokemonInfo(id);
      });
      fetchSelectedPokemon(uniqueRandomIds[getRandomIndex(MAX_OPTIONS)]);
    }
  }, [game.pokemons]);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSelection = (option) => {
    if (option.id == game.selectedPokemon.id) {
      setIsPokemonHidden(false);
      setTimeout(() => {
        dispatch({ type: "win" });
        setIsPokemonHidden(true);
      }, 3000);
    } else {
      dispatch({ type: "fail" });
      triggerShake();
    }
  };

  return (
    <div className="content game-layout">
      {game.selectedPokemon ? (
        <>
          <GameScoreLayout
            streak={game.streak}
            attempt={game.attempt}
            pokemonName={game.selectedPokemon.label}
            isPokemonHidden={isPokemonHidden}
          />
          <PokemonShadow
            imageUrl={game.selectedPokemon.sprites.other.home.front_default}
            isHidden={isPokemonHidden}
            shake={shake}
          />
        </>
      ) : null}
      <GameButtonList
        options={game.pokemons}
        handleSelection={handleSelection}
      />
    </div>
  );
}
