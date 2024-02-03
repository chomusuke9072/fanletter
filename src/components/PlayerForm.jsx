import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  box-sizing: border-box;
  margin-top: 2rem;
  width: 30rem;
  background-color: #8d7a57e4;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 22rem;
  padding: 0.5rem;
  margin: 1rem 0rem 1rem 1rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

const StyledSelect = styled.select`
  width: 22rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

const StyledTextarea = styled.input`
  padding: 0.5rem;
  width: 22rem;
  margin: 1rem 0rem 1rem 0.5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

const StyledBtn = styled.button`
  width: 6rem;
  height: 2rem;
  padding: 0.5rem;
  background-color: black;
  color: #8d7a57e4;
  font-weight: bold;
  border: 0rem;
  border-radius: 0.5rem;
`;

const StyledBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

function PlayerForm() {
  return (
    <StyledBox>
      <StyledForm>
        <StyledDiv>
          닉네임 :
          <StyledInput
            type="text"
            placeholder="최대 10글자 입력 가능"
            maxLength="10"
          />
        </StyledDiv>
        <StyledDiv>
          받는 선수 :
          <StyledSelect>
            <option value="kiin">Kiin</option>
            <option value="canyon">Canyon</option>
            <option value="chovy">Chovy</option>
            <option value="peyz">Peyz</option>
            <option value="lehends">Lehends</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          내용 :
          <br />
          <StyledTextarea placeholder="최대 50글자 작성 가능" maxLength="50" />
        </StyledDiv>

        <StyledBtnBox>
          <StyledBtn>등록하기</StyledBtn>
        </StyledBtnBox>
      </StyledForm>
    </StyledBox>
  );
}

export default PlayerForm;
