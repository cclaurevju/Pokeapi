import TabOptions from "../molecules/TabOptions";
import CardData from "../molecules/CardData";
import CardEvolution from "../molecules/CardEvolution";
import CardStats from "../molecules/CardStats";
import CardDetails from "./CardDetails";
import { useState } from "react";
import TabOption from "../atoms/TabOption";

export default function TabMenu({ options = [] }) {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="tab-menu">
      <div className="tab-options">
        {options.map((op, index) => (
          <TabOption
            key={index}
            option={op.label}
            isSelected={index == selectedOption}
            onClick={() => setSelectedOption(index)}
          />
        ))}
      </div>
      {options[selectedOption].content}
    </div>
  );
}
