import styled from "styled-components";
import GraphImage from "../../static/images/graph.PNG";

const GraphDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  justify-content: flex-start;
  width: 100%;
`;

const PercentageSection = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
  width: 100%;
  height: min-content;
  justify-content: flex-start;
  line-height: normal;
`;

const Duration = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
  justify-content: center;
  width: 100%;
`;

const Year = styled.span`
  color: grey;
  text-align: center;
  padding:0.2rem 1rem;
  margin: 0.5rem 1rem;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;

const SIPGraph = (props) => {
  return (
    <GraphDiv>
      <PercentageSection>
        <h1 style={{ fontWeight: 500, marginRight: "1rem" }}>
          {props.threeY}%
        </h1>
        <span style={{ color: "var(--shadow-light)", fontWeight: "bolder" }}>
          3Y annualised
        </span>
      </PercentageSection>
      <img src={GraphImage} width="100%" alt="graph" />
      <Duration>
          <Year>1M</Year>
          <Year>6M</Year>
          <Year>1Y</Year>
          <Year>3Y</Year>
          <Year>All</Year>
      </Duration>
    </GraphDiv>
  );
};

export default SIPGraph;
