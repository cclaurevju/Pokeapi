import { capitalizeText } from "../../utils/capitalizeText";

export default function PokemonTagBox({
  tag = "",
  showLabel = true,
  size = "sm",
  isCircle = false,
}) {
  return (
    <div
      className={`pk-card-tag color-type-${tag} pk-tag-${size} ${
        isCircle ? "pk-card-circle" : ""
      }`}
    >
      <img
        className="pk-card-tag-img"
        src={`src\\assets\\images\\icons\\${tag}.png`}
      />
      {showLabel ? (
        <div className="pk-card-tag-text">{capitalizeText(tag)}</div>
      ) : null}
    </div>
  );
}
