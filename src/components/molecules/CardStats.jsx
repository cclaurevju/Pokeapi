import { capitalizeText } from "../../utils/capitalizeText";
import CardInfoText from "../atoms/CardInfoText";
import CardDetailRow from "./CardDetailsRow";
import CardDetailsRow from "./CardDetailsRow";

export default function CardStats({ pokemon }) {
  return (
    <>
      {pokemon.stats.map((stat) => {
        return (
          <CardDetailRow>
            <div>{capitalizeText(stat.stat.name)}</div>{" "}
            <div>{stat.base_stat}</div> <div>{stat.effort}</div>
          </CardDetailRow>
        );
      })}
    </>
  );
}
