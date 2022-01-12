import styled from "styled-components";
import TestimonialCard from "../../components/Home/TestimonialCard/testomonialcard";
import TestimonialsData from "../../data/testimonialData";

const TestimonialDiv = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100vh;
`;

const Tile = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  background-color: #f6f6f7;
  height: 70vh;
  padding: 2rem 0rem;
  width: 100%;
  margin: auto;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  width: 70%;
  margin: auto;
  align-items: stretch;
`;

const Heading = styled.span`
  font-size: var(--fz-heading);
  font-weight: bold;
  text-align: left;
`;

const SubHeading = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};

  font-size: var(--fz-xxl);
`;

const More = styled.a`
  color: ${({ theme }) => theme.color};
  cursor: pointer;
`;

const CardRow = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  margin: 1rem 0rem;
`;

const Testimonials = () => {
  return (
    <TestimonialDiv>
      <Tile>
        <Content>
          <Heading>Developing great Investment stories.</Heading>
          <SubHeading>
            <div>Our users tell what we are and who we are. #PoW </div>
            <More>View more</More>
          </SubHeading>
          <CardRow>
            {TestimonialsData.map((data) => (
              <TestimonialCard data={data} key={data.name} />
            ))}
          </CardRow>
        </Content>
      </Tile>
    </TestimonialDiv>
  );
};

export default Testimonials;
