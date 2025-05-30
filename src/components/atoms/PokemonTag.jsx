import "./atoms.css";

export default function PokemonTagBox() {
  const bgColor = "bg-purple-500";
  const icon = "icon";
  const tagName = "Tag";
  return (
    <div className="pk-card-tag color-type-grass">
      <img
        className="pk-card-tag-img"
        src="src\assets\images\icons\grass.png"
      />
      <div className="pk-card-tag-text">{tagName}</div>
    </div>
  );
}
