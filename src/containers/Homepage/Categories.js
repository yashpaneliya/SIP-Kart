import styled from "styled-components";
import { css } from "styled-components";
import CategoryItem from "../../components/Home/CategoryItem/categoryItem";
import CategoriesData from "../../data/categoryData";
import mixins from "../../styles/mixins";

const CategoriesDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  height: 100vh;
  margin-top: 30px;
  width: 100%;
`;

const ContentDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  width: 80%;
  margin: auto;
  height: 90%;
`;

const Heading = styled.h1`
  margin: 10px;
  color: ${({ theme }) => theme.text};
  font-size: var(--fz-headingxl);

  @media only screen and (max-width: 700px) {
    font-size: var(--fz-headingxlM);
    text-align: center;
  }
`;

const QuoteText = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: var(--fz-lg);

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.color};
      font-weight: bold;
      font-size: var(--fz-heading);
      margin: 10px 0px;
    `};
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 10vh 0px;
  width: 100%;grid-row-gap: 50px;

  @media only screen and (max-width: 500px) {
    grid-template-columns: auto auto;
    grid-row-gap: 50px;
    margin-bottom:5vh;
  }
`;

// const ItemsRow = styled.div`
//   ${({ theme }) => theme.mixins.flexBetween};
//   width: 70%;
//   margin: 5vh auto;
// `;

const Categories = () => {
  return (
    <CategoriesDiv>
      <ContentDiv>
        <Heading>Discover SIPs</Heading>
        <QuoteText>Search SIPs according to your goals</QuoteText>
        <CategoryContainer>
          <CategoryItem item={CategoriesData.highReturn} />
          <CategoryItem item={CategoriesData.taxSaving} />
          <CategoryItem item={CategoriesData.fd} />
          <CategoryItem item={CategoriesData.topcomp} />
          <CategoryItem item={CategoriesData.min500} />
          <CategoryItem item={CategoriesData.sectorbets} />
        </CategoryContainer>
        <mixins.Button primary>Explore all SIPs</mixins.Button>
      </ContentDiv>
    </CategoriesDiv>
  );
};

export default Categories;
