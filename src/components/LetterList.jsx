import styled from "styled-components";

const LetterCard = styled.div`
  border: 2px solid #8d7a57e4;
  border-radius: 1rem;
  margin-top: 2rem;
  width: 31rem;
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const CardContent = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const UserName = styled.p`
  font-weight: bold;
`;

const Letter = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const WriteDate = styled.p`
  margin-top: 0.5rem;
`;

function LetterList() {
  return (
    <section>
      <LetterCard>
        <div>
          <img
            src={process.env.PUBLIC_URL + "images/user.png"}
            width="50"
            alt="profile"
          />
        </div>
        <CardContent>
          <UserName>쵸비맘</UserName>
          <WriteDate>24. 02. 01 오후 01:27</WriteDate>
          <Letter>CS 만들어 먹는 쵸비 화이팅!!</Letter>
        </CardContent>
      </LetterCard>
    </section>
  );
}

export default LetterList;
