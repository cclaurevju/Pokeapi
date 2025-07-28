import { useEffect } from "react";
import CardInfoText from "../atoms/CardInfoText";
import CardDetailsRow from "./CardDetailsRow";
import { useApi } from "../../hooks/useApi";

export default function CardData({ pokemon }) {
  const { get, data } = useApi(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
  );
  useEffect(() => {
    get();
  }, [pokemon]);
  return data ? (
    <div>
      <CardInfoText color={pokemon.types[0].type.name}>
        About this Pokemon:
      </CardInfoText>
      <CardInfoText>
        {data.flavor_text_entries[0].flavor_text.replace(/\f/g, " ")}
      </CardInfoText>
      <CardDetailsRow>
        <CardInfoText>Pokemon info content</CardInfoText>
        <CardInfoText>Pokemon info content</CardInfoText>
      </CardDetailsRow>
    </div>
  ) : null;
}
