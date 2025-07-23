export default function PokemonCardId({ color = "white", id = "NaN" }) {
  const formatedId = id.toString().padStart(4, "0");
  return <div className={`pk-card-id pk-card-id-${color}`}># {formatedId}</div>;
}
