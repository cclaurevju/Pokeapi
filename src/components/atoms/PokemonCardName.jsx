export default function PokemonCardName({ color = "dark", name = "Pokemon" }) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={`pk-card-name pk-card-name-${color}`}>
      <p>{formatedName}</p>
    </div>
  );
}
