import styled from "styled-components";
import { css } from "styled-components";
import LandingImage from "../../static/images/landingImage.png";
import { theme } from "../../styles";
import { Link } from "react-router-dom";

const WrapperDiv = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
  margin: auto;
  height: 90vh;
  width: 100%;
`;

const ContentDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 90%;
  margin: auto;
`;

const BrandingText = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
`;

const QuoteText = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: var(--fz-xxl);

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.color};
      font-weight: bold;
      font-size: var(--fz-heading);
      margin: 10px 0px;
    `};

  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: var(--fz-headingxxxl);

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.color};
      margin: 0px 10px;
    `};

  @media only screen and (max-width: 700px) {
    font-size: var(--fz-headingxl);
  }
`;

const ImageDiv = styled.div`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const InitialLanding = () => {
  return (
    <WrapperDiv>
      <ContentDiv>
        <BrandingText>
          <Heading primary>SIP,</Heading>
          <Heading> Yahi hai</Heading>
        </BrandingText>
        <QuoteText>
          Tell your money to grow even while you are sleeping!
        </QuoteText>
        <QuoteText>Best platform to help you grow your money</QuoteText>
        <QuoteText primary>Invest & Enjoy.</QuoteText>
        <Link to="/siplist">
          <theme.mixins.Button primary>Start exploring</theme.mixins.Button>
        </Link>
      </ContentDiv>
      <ImageDiv>
        <img src={LandingImage} alt="Landing Illustration" height="55%" />
      </ImageDiv>
    </WrapperDiv>
  );
};

export default InitialLanding;
