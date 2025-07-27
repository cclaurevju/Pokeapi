import SearchMenu from "../template/SearchMenu";
import PokemonCardList from "../template/PokemonCardList";
import axiosInstance from "../../api/axiosInstance";
import { useEffect, useReducer } from "react";
import { formatId } from "../../utils/formatId";

const QUANTITY_LIMIT = 25;

const emptyState = {
  next: null,
  pokemons: [],
  isVirtualScrollActive: true,
  filter: "",
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

    case "set-filter":
      return {
        ...state,
        filter: action.filter,
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

  const handleSearcher = (e) => {
    dispatch({ type: "set-filter", filter: e.target.value });
  };

  const filteredPokemonsByName = listState.pokemons.filter((p) => {
    console.log(p.url.split("/"));
    return (
      p.name.toLowerCase().includes(listState.filter.toLowerCase()) ||
      formatId(p.url.split("/").slice(-2, -1)[0]).includes(listState.filter)
    );
  });

  return (
    <>
      <SearchMenu onChange={handleSearcher} />
      {filteredPokemonsByName.length == 0 ? (
        //TODO change to title style
        <div>Not found</div>
      ) : (
        <PokemonCardList
          handleLoadMore={handleLoadMore}
          pokemons={filteredPokemonsByName}
        />
      )}
    </>
  );
}
