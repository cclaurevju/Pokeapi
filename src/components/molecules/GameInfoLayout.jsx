export default function GameInfoLayout({
  streak = 0,
  attempt = 0,
  pokemonName = null,
}) {
  return (
    <div className="game-score-layout">
      <div>Streak: {streak}</div>
      <div>{pokemonName ?? "???"}</div>
      <div>Atempt: {attempt}</div>
    </div>
  );
}
