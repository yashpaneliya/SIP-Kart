import styled from "styled-components";
import { theme } from "../../../styles";
import { Link } from "react-router-dom";
import SIPIcon from "../../../static/icons/awesomeIcons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  background-color: ${({ theme }) => theme.nav};
  width: 95%;
  margin: auto;
  padding: 0px 40px;
  height: 12vh;
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-family: var(--font-mono);

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    font-size: var(--fz-heading);
    font-weight: bold;
  }

  .logo .highlight {
    color: ${({ theme }) => theme.color};
  }
`;

const StyledInput = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  border-radius: var(--border-radius);
  width: 30%;
  background-color: white;
  height: 50%;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Logo = (
  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
    <div className="logo">
      <span className="highlight">SIP</span>Kart
    </div>
  </Link>
);

const AuthButton = styled.div`
  ${({ theme }) => theme.mixins.flexAround};
  height: 50%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const HamBurger = styled.div`
@media only screen and (min-width: 700px) {
  display: none;
}
  
  @media only screen and (max-width: 700px) {
    display: visible;
  }
`;

const NavBar = (props) => {
  return (
    <StyledHeader>
      <StyledNav>
        {Logo}
        <StyledInput>
          <theme.mixins.Input placeholder="Search SIPs" />
        </StyledInput>
        <HamBurger>
          <SIPIcon icon={faHamburger} size="2x" color="black" />
        </HamBurger>
        <AuthButton>
          <theme.mixins.Button onClick={props.showModal}>
            Sign up
          </theme.mixins.Button>
          <theme.mixins.Button onClick={props.showModal} primary>
            Login
          </theme.mixins.Button>
        </AuthButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default NavBar;
