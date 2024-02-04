import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.7rem;
  width: 5rem;
  border: 6px solid ${(props) => (props.selected ? "#8d7a57e4" : "gray")};
  border-radius: 0.5rem;
  color: #8d7a57e4;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 1.5rem;
`;
