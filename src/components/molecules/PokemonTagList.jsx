import PokemonTagBox from "../atoms/PokemonTag";

export default function PokemonTagList({
  types = [],
  isCircle = false,
  showLabel = true,
  size = "sm",
}) {
  return (
    <div className="pk-card-tag-list">
      {types.map((type) => {
        return (
          <PokemonTagBox
            tag={type.type.name}
            isCircle={isCircle}
            showLabel={showLabel}
            size={size}
          />
        );
      })}
    </div>
  );
}
