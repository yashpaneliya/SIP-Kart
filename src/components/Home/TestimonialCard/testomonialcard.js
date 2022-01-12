import Card from "../../card";
import styled from "styled-components";
import SIPIcon from "../../../static/icons/awesomeIcons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { css } from "styled-components";

const OuterDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: flex-start;
  margin: 2rem;
  width: 20vw;

  @media only screen and (max-width:500px){
    width:100%;
  }
`;

const ImageSection = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 3rem;
`;

const Stars = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
`;

const Star = styled.div`
  margin-left: 5px;
`;

const Review = styled.span`
  font-size: var(--fz-xl);
  margin-bottom: 1rem;
`;

const TestimonialCard = (props) => {
  return (
    <Card>
      <OuterDiv>
        <ImageSection>
          <Image src={props.data.image} />
          <Stars>
            {Array.apply(0, Array(props.data.stars)).map((x, i) => {
              return (
                <Star>
                  <SIPIcon icon={faStar} color="var(--orange)" size="1x" />
                </Star>
              );
            })}
          </Stars>
        </ImageSection>
        <Review>{props.data.review}</Review>
        <h3>{props.data.name}</h3>
        <span>{props.data.designation}</span>
      </OuterDiv>
    </Card>
  );
};

export default TestimonialCard;
