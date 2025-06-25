import PokemonCard from "../organisms/PokemonCard";
import "./template.css";

function PokemonCardList() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  return (
    <div className="container pk-card-list">
      {cards.map((card) => {
        return <PokemonCard />;
      })}
    </div>
  );
}

export default PokemonCardList;
