import TabOptions from "../molecules/TabOptions";
import CardDetails from "./CardDetails";
import CardEvolution from "./CardEvolution";
import CardStats from "./CardStats";

export default function TabMenu() {
  return (
    <div>
      <TabOptions />
      <CardDetails />
      <CardStats />
      <CardEvolution />
    </div>
  );
}
