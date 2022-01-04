import styled from "styled-components";

const Circle = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  box-shadow: 0px 0px 10px lightgrey;
`;

const PartnerLogo = (props) => {
  return (
    <Circle>
      <img alt={props.item.name} src={props.item.image} width="50em" />
    </Circle>
  );
};

export default PartnerLogo;
