import styled from "styled-components";
import NavBar from "../../components/Navbar/navbar";
import InitialLanding from "./InitialLanding";

const HomePageDiv = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
`;

const HomePage = () => {
  return (
    <HomePageDiv>
      <NavBar />
      <InitialLanding />
    </HomePageDiv>
  );
};

export default HomePage;
