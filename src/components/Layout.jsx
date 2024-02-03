import styled from "styled-components";
// import PlayerButton from "../PlayerButton";

const imagePath = "/images/Gen.jpg";

const StyledHeader = styled.header`
  font-size: 2rem;
`;

const StyledLayout = styled.div`
  background-image: url(${imagePath});
  background-size: 30%;
  width: 100%;
  height: 18rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  color: white;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <StyledHeader>젠지 선수 응원 페이지</StyledHeader>
      <nav>{/* <PlayerButton /> */}</nav>
    </StyledLayout>
  );
};

export default Layout;
