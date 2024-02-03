import { StyledButton, StyledDiv } from "./PlayerButton.styled";

function PlayerButton() {
  const players = [
    {
      id: 1,
      name: "Kiin",
    },
    {
      id: 2,
      name: "Canyon",
    },
    {
      id: 3,
      name: "Chovy",
    },
    {
      id: 4,
      name: "Peyz",
    },
    {
      id: 5,
      name: "Lehends",
    },
  ];

  const playerButtons = players.map((item) => {
    return <StyledButton key={item.id}>{item.name}</StyledButton>;
  });

  return <StyledDiv>{playerButtons}</StyledDiv>;
}

export default PlayerButton;
