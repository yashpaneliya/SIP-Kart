import styled from "styled-components";
import NavBar from "../../components/Navbar/navbar";
import Categories from "./Categories";
import InitialLanding from "./InitialLanding";

const HomePageDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
`;

const HomePage = () => {
  return (
    <HomePageDiv>
      <NavBar />
      <InitialLanding />
      <Categories />
    </HomePageDiv>
  );
};

export default HomePage;
