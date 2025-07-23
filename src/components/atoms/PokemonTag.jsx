export default function PokemonTagBox({ tag = "" }) {
  return (
    <div className={`pk-card-tag color-type-${tag}`}>
      <img
        className="pk-card-tag-img"
        src={`src\\assets\\images\\icons\\${tag}.png`}
      />
      <div className="pk-card-tag-text">{tag}</div>
    </div>
  );
}
