import styled from "styled-components";
import SIPIcon from "../../static/icons/awesomeIcons";
const ItemDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
`;

const Title = styled.p``;

const CategoryItem = (props) => {
  return (
    <ItemDiv>
      <SIPIcon icon={props.item.icon} />
      <Title>{props.item.title}</Title>
    </ItemDiv>
  );
};

export default CategoryItem;
