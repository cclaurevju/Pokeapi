import { capitalizeText } from "../../utils/capitalizeText";

export default function PokemonCardName({ color = "dark", name = "Pokemon" }) {
  return (
    <div className={`pk-card-name pk-card-name-${color}`}>
      <p>{capitalizeText(name)}</p>
    </div>
  );
}
