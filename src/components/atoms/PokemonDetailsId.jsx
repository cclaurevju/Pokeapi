import { formatId } from "../../utils/formatId";

export default function PokemonDetailsId({ id = "0" }) {
  return (
    <div className="pk-details-id">
      #<p>{formatId(id)}</p>
    </div>
  );
}
