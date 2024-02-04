import styled from "styled-components";
import PlayerForm from "./PlayerForm";
import LetterList from "./LetterList";

const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function PlayerPage({ letterValue }) {
  return (
    <PlayerBox>
      <PlayerForm />
      <LetterList letterValue={letterValue} />
    </PlayerBox>
  );
}

export default PlayerPage;
