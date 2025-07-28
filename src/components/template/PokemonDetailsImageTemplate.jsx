import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import PokemonImage from "../atoms/PokemonImage";
import { formatId } from "../../utils/formatId";

export default function PokemonDetailsImageTemplate({
  type = "grass",
  imageUrl,
  id,
}) {
  const navigate = useNavigate();
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
        {/* <img className="pk-details-image" src="/src/assets/pokemon.png" /> */}
        <img className="pk-details-image" src={imageUrl} />
        <div className="pk-details-button-group">
          {id > 1 ? (
            <Button
              label={`Previous #${formatId(id - 1)}`}
              onClick={() => navigate(`/pokemons/${id - 1}`, { replace: true })}
              color="secondary"
            />
          ) : null}
          <Button
            label={`Next #${formatId(id + 1)}`}
            onClick={() => navigate(`../${id + 1}`, { relative: true })}
          />
        </div>
      </div>
    </div>
  );
}
