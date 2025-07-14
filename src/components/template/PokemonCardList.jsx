import { useEffect, useReducer } from "react";
import PokemonCard from "../organisms/PokemonCard";
import axiosInstance from "../../api/axiosInstance";
import Button from "../atoms/Button";

const QUANTITY_LIMIT = 25;

const emptyState = {
  next: null,
  pokemons: [],
  isVirtualScrollActive: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-pokemons": {
      const combinedArrays = [...state.pokemons, ...action.pokemons];
      const pokemons = Array.from(
        new Map(combinedArrays.map((p) => [p.name, p])).values()
      );
      return {
        ...state,
        pokemons: pokemons,
        next: action.next,
      };
    }

    case "activate-fetch":
      return {
        ...state,
        isVirtualScrollActive: true,
      };

    case "deactivate-fetch":
      return {
        ...state,
        isVirtualScrollActive: false,
      };

    default:
      console.error("Unknown action type: ", action.type);
      return state;
  }
};

function PokemonCardList() {
  const [listState, dispatch] = useReducer(reducer, emptyState);

  const fetchPokemons = async () => {
    if (!listState.next) {
      const response = await axiosInstance(`/pokemon?limit=${QUANTITY_LIMIT}`);
      const pokemons = response.data.results;
      dispatch({
        type: "add-pokemons",
        pokemons: pokemons,
        next: response.data.next,
      });
    } else {
      const endpoint = listState.next.split("v2")[1];
      const response = await axiosInstance(endpoint);
      const pokemons = response.data.results;
      dispatch({
        type: "add-pokemons",
        pokemons: pokemons,
        next: response.data.next,
      });
    }
    dispatch({ type: "deactivate-fetch" });
  };

  useEffect(() => {
    if (listState.isVirtualScrollActive) {
      fetchPokemons();
    }
  }, [listState.isVirtualScrollActive]);
  return (
    <div className="container pk-card-list content">
      {listState.pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} />;
      })}
      <div className="virtual-scroll">
        <Button
          color="secondary"
          onClick={() => {
            dispatch({ type: "activate-fetch" });
          }}
          label="Load more"
        />
      </div>
    </div>
  );
}

export default PokemonCardList;
