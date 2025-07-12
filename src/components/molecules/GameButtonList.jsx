import Button from "../atoms/Button";

export default function GameButtonList({
  options,
  handleSelection = () => {},
}) {
  return (
    <div className="game-button-list">
      {options.map((option, i) => (
        <Button
          key={i}
          label={option.label}
          onClick={() => handleSelection(option)}
        />
      ))}
    </div>
  );
}
