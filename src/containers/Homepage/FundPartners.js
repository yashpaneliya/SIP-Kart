import styled from "styled-components";
import PartnerLogo from "../../components/Home/FunPartners/PartnerLogo";
import FundPartnersData from "../../data/fundPartnerdata";

const FundPartnerDiv = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 50vh;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 60%;
  margin: auto;
  align-items: center;
`;

const Heading = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: flex-start;
`;
const More = styled.a`
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  font-size: var(--fz-lg);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem;
  justify-content: center;
`;

const FundPartners = () => {
  return (
    <FundPartnerDiv>
      <Content>
        <Heading>
          <h1>43+ Fund Partners</h1>
          <More>View all fund partners</More>
        </Heading>
        <Grid>
          {FundPartnersData.map((item) => (
            <PartnerLogo key={item.name} item={item} />
          ))}
        </Grid>
      </Content>
    </FundPartnerDiv>
  );
};

export default FundPartners;
