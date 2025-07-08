import Button from "../atoms/Button";

export default function GameButtonList({}) {
  const options = [
    {
      label: "Pikachu",
      value: "1",
    },
    {
      label: "Charizard",
      value: "2",
    },
    {
      label: "Gengar",
      value: "3",
    },
    {
      label: "Articuno",
      value: "4",
    },
  ];

  const handleSelection = (option) => {
    console.log(option);
  };

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
