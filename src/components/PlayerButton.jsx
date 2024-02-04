import { StyledButton, StyledDiv } from "./StyledPlayerButton";
import React, { useState, useEffect } from "react";
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

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  useEffect(() => {
    const SelectedPlayer = players.find((player) => player.name === "Kiin");
    if (SelectedPlayer) {
      setSelectedPlayerId(SelectedPlayer.id);
    }
  }, []);

  const handleButtonClick = (id) => {
    setSelectedPlayerId(id);
  };

  const playerButtons = players.map((item) => {
    return (
      <StyledButton
        key={item.id}
        onClick={() => handleButtonClick(item.id)}
        selected={selectedPlayerId === item.id}
      >
        {item.name}
      </StyledButton>
    );
  });

  return <StyledDiv>{playerButtons}</StyledDiv>;
}

export default PlayerButton;
