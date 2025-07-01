import PokemonTagBox from "../atoms/PokemonTag";

export default function PokemonTagList() {
  const tags = [1, 2];
  return (
    <div className="pk-card-tag-list">
      {tags.map((tag) => {
        return <PokemonTagBox />;
      })}
    </div>
  );
}
