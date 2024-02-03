import styled from "styled-components";
import PlayerForm from "./PlayerForm";

const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function PlayerPage() {
  return (
    <PlayerBox>
      <PlayerForm />
    </PlayerBox>
  );
}

export default PlayerPage;
