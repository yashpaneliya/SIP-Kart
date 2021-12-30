import styled, { useTheme } from "styled-components";
import { css } from "styled-components";
import CategoryItem from "../../components/CategoryItem/categoryItem";
import CategoriesData from "../../data/categoryData";
import mixins from "../../styles/mixins";

const CategoriesDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  border: 1px solid red;
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
  ${({ theme }) => theme.mixins.flexColumn};
  margin-top: 10vh;
  width: 100%;
`;

const ItemsRow = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 70%;
  margin: 5vh auto;
`;

const Categories = () => {
  return (
    <CategoriesDiv>
      <ContentDiv>
        <Heading>Discover SIPs</Heading>
        <QuoteText>Search SIPs according to your goals</QuoteText>
        <CategoryContainer>
          <ItemsRow>
            <CategoryItem item={CategoriesData.highReturn} />
            <CategoryItem item={CategoriesData.taxSaving} />
            <CategoryItem item={CategoriesData.fd} />
          </ItemsRow>
          <ItemsRow>
            <CategoryItem item={CategoriesData.highReturn} />
            <CategoryItem item={CategoriesData.taxSaving} />
            <CategoryItem item={CategoriesData.fd} />
          </ItemsRow>
        </CategoryContainer>
      <mixins.Button primary>Explore all SIPs</mixins.Button>

      </ContentDiv>
    </CategoriesDiv>
  );
};

export default Categories;
