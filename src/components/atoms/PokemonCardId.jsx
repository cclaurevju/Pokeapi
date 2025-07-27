import { formatId } from "../../utils/formatId";

export default function PokemonCardId({ color = "white", id = "NaN" }) {
  return (
    <div className={`pk-card-id pk-card-id-${color}`}># {formatId(id)}</div>
  );
}
