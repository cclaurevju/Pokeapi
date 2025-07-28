import Button from "../atoms/Button";
import PokemonImage from "../atoms/PokemonImage";

export default function PokemonDetailsImageTemplate({ type = "grass" }) {
  return (
    <div className={`bg-color-type-${type} pk-details-image-template`}>
      <div className="pk-details-image-mask">
        <div className="pk-details-mask-dots-group">
          <img
            className="pk-details-mask-dots"
            src="/src/assets/images/masks/dots-vertical.png"
          />
          <img
            className="pk-details-mask-dots"
            src="/src/assets/images/masks/dots-vertical.png"
          />
        </div>
        <img
          className="pk-details-mask-pokeball"
          src="/src/assets/images/masks/pokeball.png"
        />
      </div>
      <div className="pk-details-image-layout">
        <img className="pk-details-image" src="/src/assets/pokemon.png" />
        <div className="pk-details-button-group">
          <Button label="before" color="secondary" />
          <Button label="next" />
        </div>
      </div>
    </div>
  );
}
