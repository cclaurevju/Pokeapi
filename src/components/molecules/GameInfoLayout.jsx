export default function GameInfoLayout({
  streak = 0,
  attempt = 0,
  pokemonName = null,
  isPokemonHidden = true,
}) {
  return (
    <div className="game-score-layout">
      <div>Streak: {streak}</div>
      <div>{isPokemonHidden ? "???" : pokemonName}</div>
      <div>Atempt: {attempt}</div>
    </div>
  );
}
