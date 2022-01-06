import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItemDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexRow};
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 5px lightgrey;
`;

const FundLogo = styled.img``;

const FundDetails = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  margin-left: 1rem;
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    padding: 0.2rem;
  }
`;

const Definition = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  justify-content: flex-start;
  align-items: flex-start;
`;

const ReturnRates = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 30%;
`;

const Rates = styled.div`
  width: 100%;

  ${({ theme }) => theme.mixins.flexAround};
`;

const Durations = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexAround};
`;

const Title = styled.h3`
  margin: 0.4rem 0rem;
  font-weight: 500;
  letter-spacing: 0.16px;
  line-height: 34px;
`;

const SubTitle = styled.span`
  font-weight: normal;
  font-size: 12px;
  color: grey;
  letter-spacing: 0.2px;
  line-height: 19.2px;
`;

const SIPListItem = ({ item }) => {
  return (
    <Link
      to={`/siplist/${item.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItemDiv key={item.id}>
        <FundLogo src={item.logo} alt={item.id} width="30px" />
        <FundDetails>
          <Definition>
            <Title>{item.name}</Title>
            <SubTitle>
              {item.risk} | {item.category}
            </SubTitle>
          </Definition>
          <ReturnRates>
            <Rates>
              <Title>{item.oneM}%</Title>
              <Title>{item.sixM}%</Title>
              <Title>{item.oneY}%</Title>
            </Rates>
            <Durations>
              <SubTitle>1M</SubTitle>
              <SubTitle>6M</SubTitle>
              <SubTitle>1Y</SubTitle>
            </Durations>
          </ReturnRates>
        </FundDetails>
      </ListItemDiv>
    </Link>
  );
};

export default SIPListItem;
