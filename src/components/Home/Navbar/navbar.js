import styled from "styled-components";
import { theme } from "../../../styles"; 

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};

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
`;

const Logo = (
  <div className="logo">
    <span className="highlight">SIP</span>Kart
  </div>
);

const AuthButton = styled.div`
  ${({ theme }) => theme.mixins.flexAround};
  height: 50%;
`;

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        {Logo}
        <StyledInput>
          <theme.mixins.Input placeholder="Search SIPs" />
        </StyledInput>
        <AuthButton>
          <theme.mixins.Button>Sign up</theme.mixins.Button>
          <theme.mixins.Button primary>Login</theme.mixins.Button>
        </AuthButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default NavBar;
