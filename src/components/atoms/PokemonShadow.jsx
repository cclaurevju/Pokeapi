export default function PokemonShadow({
  imageUrl,
  isHidden = true,
  shake = false,
}) {
  return (
    <img
      src={imageUrl}
      className={`pk-game-sprite ${isHidden ? "pk-shadow" : ""} ${
        shake ? "shake" : ""
      }`}
    />
  );
}
