import SearchMenu from "../template/SearchMenu";
import PokemonCardList from "../template/PokemonCardList";
import axiosInstance from "../../api/axiosInstance";
import { useEffect, useReducer } from "react";

const QUANTITY_LIMIT = 25;

const emptyState = {
  next: null,
  pokemons: [],
  isVirtualScrollActive: true,
};

const reducer = (state, action) => {
  console.log("prev state", state, "action", action);

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

export default function PokemonSearcher() {
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

  const handleLoadMore = () => {
    dispatch({ type: "activate-fetch" });
  };
  return (
    <>
      <SearchMenu />
      <PokemonCardList
        handleLoadMore={handleLoadMore}
        pokemons={listState.pokemons}
      />
    </>
  );
}
