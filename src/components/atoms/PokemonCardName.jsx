export default function PokemonCardName({ color = "white" }) {
  return (
    <div className={`pk-card-name pk-card-name-${color}`}>
      <p>Pokemon</p>
    </div>
  );
}
