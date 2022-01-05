import styled from "styled-components";
import Advantages from "./Advantages";
import Categories from "./Categories";
import FundPartners from "./FundPartners";
import InitialLanding from "./InitialLanding";
import MobileApp from "./MobileApp";
import Testimonials from "./Testimonials";

const HomePageDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
`;

const HomePage = () => {
  return (
    <HomePageDiv>
      <InitialLanding />
      <Categories />
      <Advantages />
      <Testimonials />
      <FundPartners />
      <MobileApp />
    </HomePageDiv>
  );
};

export default HomePage;
