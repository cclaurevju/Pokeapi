import PokemonTagBox from "../atoms/PokemonTag";

export default function PokemonTagList({ types }) {
  return (
    <div className="pk-card-tag-list">
      {types.map((type) => {
        return <PokemonTagBox tag={type.type.name} />;
      })}
    </div>
  );
}
