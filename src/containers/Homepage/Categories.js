import styled from "styled-components";

const CategoriesDiv = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
`;

const Categories = () => {
  return <CategoriesDiv></CategoriesDiv>;
};

export default Categories;
