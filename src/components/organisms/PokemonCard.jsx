import PokemonCardInfo from "../molecules/PokemonCardInfo";
import PokemonTagList from "../molecules/PokemonTagList";

import "./organisms.css";

export default function PokemonCard() {
  return (
    <div className="pk-card-container">
      <div className="pk-card bg-color-type-grass">
        <div className="pk-card-properties">
          <PokemonCardInfo />
          <PokemonTagList />
        </div>
        <div className="pk-card-img-container">
          <img className="pk-card-img" src="src\assets\pngwing.com (1).png" />
        </div>
      </div>
    </div>
  );
}
