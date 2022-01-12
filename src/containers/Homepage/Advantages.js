import styled from "styled-components";
import ProsVectorImage from "../../static/images/pros.png";
import PointItem from "../../components/Home/PointItem/pointitem";
import mixins from "../../styles/mixins";

const AdvantageDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
`;

const ContentDiv = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};

  height: 100%;
  width: 80%;
  margin: auto;
`;

const ProsDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColAround};
  width: 45%;
  text-align: left;

  @media only screen and (max-width:700px){
    width:100%;
  }
`;

const Points = styled.div``;

const ImageDiv = styled.div`
  @media only screen and (min-width: 700px) {
    display: inline;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Advantages = () => {
  return (
    <AdvantageDiv>
      <ContentDiv>
        <ImageDiv>
          <img src={ProsVectorImage} alt="Pros vector" width={"45%"} />
        </ImageDiv>
        <ProsDiv>
          <h1>Take a step forward with Ease and Confidence</h1>
          <Points>
            <PointItem
              title="No hard paper management"
              subtitle="Who likes paperwork anyway? Start your investment journey in just few minutes"
            />
            <PointItem
              title="Analyze and pick the best"
              subtitle="Perform a detailed analysis from past performance and future ajenda and pick the best for you"
            />
            <PointItem
              title="Secure as Fort-Knox"
              subtitle="Your investments and data are safe and secure with our best security shield"
            />
          </Points>
          <mixins.Button primary>Get started</mixins.Button>
        </ProsDiv>
      </ContentDiv>
    </AdvantageDiv>
  );
};

export default Advantages;
