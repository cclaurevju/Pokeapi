import GenerationCardImages from "../molecules/GenerationCardImages";
import GenerationCardInfo from "../molecules/GenerationCardInfo";

export default function GenerationCard() {
  return (
    <div className="gn-card">
      <div className="gn-card-bk">
        <div>
          {/* DOTS */}
          {/* DOTS */}
        </div>
        <div>{/* POKEBALL */}</div>
      </div>
      <div className="gn-card-content">
        <GenerationCardInfo />
        <GenerationCardImages />
      </div>
    </div>
  );
}
