import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  margin-top:5rem;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  column-gap: 10%;
  grid-template-columns: 45% 45%;
`;

const Tile = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  padding: 1rem;
  width: 100%;
`;

const TileTitle = styled.span`
  color: grey;
`;

const TileSubTitle = styled.span`
  font-weight: 500;
`;

const FundDetails = (props) => {
  return (
    <OuterDiv>
      <Grid>
        <Tile>
          <TileTitle>Current Price</TileTitle>
          <TileSubTitle>₹ {props.currentPrice}</TileSubTitle>
        </Tile>
        <Tile>
          <TileTitle>Ratings</TileTitle>
          <TileSubTitle>{props.rating}</TileSubTitle>
        </Tile>
        <Tile>
          <TileTitle>Min. SIP Amount</TileTitle>
          <TileSubTitle>₹ {props.minSIP}</TileSubTitle>
        </Tile>
        <Tile>
          <TileTitle>Fund size</TileTitle>
          <TileSubTitle>₹ {props.fundSize}Cr</TileSubTitle>
        </Tile>
      </Grid>
    </OuterDiv>
  );
};

export default FundDetails;
