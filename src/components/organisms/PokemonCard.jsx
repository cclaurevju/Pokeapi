import PokemonCardInfo from "../molecules/PokemonCardInfo";
import PokemonTagList from "../molecules/PokemonTagList";

import "./organisms.css";

export default function PokemonCard() {
  return (
    <div className="pk-card-container">
      <div className="pk-card bg-color-type-grass">
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
            <PokemonCardInfo />
            <PokemonTagList />
          </div>
          <div className="pk-card-img-container">
            <img className="pk-card-img" src="src\assets\pokemon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
