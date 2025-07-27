import Button from "../atoms/Button";
import PokemonImage from "../atoms/PokemonImage";

export default function PokemonDetailsImageTemplate() {
  return (
    <div>
      <PokemonImage />
      <Button label="before" color="secondary" />
      <Button label="next" />
    </div>
  );
}
