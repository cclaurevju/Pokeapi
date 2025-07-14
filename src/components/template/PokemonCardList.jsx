import { useEffect, useState } from "react";
import PokemonCard from "../organisms/PokemonCard";

function PokemonCardList() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const api = 
  }, [])
  return (
    <div className="container pk-card-list content">
      {cards.map((card) => {
        return <PokemonCard />;
      })}
    </div>
  );
}

export default PokemonCardList;
