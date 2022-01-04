import styled from "styled-components";

const CardDiv = styled.div`
  border-radius: 5px;
  margin: 10px;
  background-color: ${({ theme }) => theme.background};
`;

const Card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default Card;
