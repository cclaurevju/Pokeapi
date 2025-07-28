import CardInfoText from "../atoms/CardInfoText";
import CardDetailsRow from "./CardDetailsRow";

export default function CardData() {
  return (
    <div>
      <CardInfoText color="grass">About this Pokemon:</CardInfoText>
      <CardInfoText>Pokemon info content</CardInfoText>
      <CardDetailsRow>
        <CardInfoText>Pokemon info content</CardInfoText>
        <CardInfoText>Pokemon info content</CardInfoText>
      </CardDetailsRow>
    </div>
  );
}
