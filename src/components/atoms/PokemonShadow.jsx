export default function PokemonShadow({ imageUrl, isHidden = true }) {
  return (
    <img
      src={imageUrl}
      className={`pk-game-sprite ${isHidden ? "pk-shadow" : ""}`}
    />
  );
}
