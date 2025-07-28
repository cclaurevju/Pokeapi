import CardInfoText from "../atoms/CardInfoText";
import CardDetailsRow from "./CardDetailsRow";

export default function CardStats({ pokemon }) {
  return (
    <div>
      {pokemon.stats.map((stat) => {
        return (
          <div>
            {stat.stat.name} {stat.base_stat} {stat.effort}
          </div>
        );
      })}
    </div>
  );
}
