import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SIPIcon from "../../static/icons/awesomeIcons";

const PointItemDiv = styled.div`
  ${({ theme }) => theme.mixins.flexRow};

  align-items: flex-start;
  margin: 2rem 0px;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  margin-left: 1rem;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: var(--fz-xxl);
  font-weight: bold;
`;

const Subtitle = styled.span`
  padding: 1rem 0px;
  font-size: var(--fz-xl);
`;

const PointItem = (props) => {
  return (
    <PointItemDiv>
      <SIPIcon icon={faCheckCircle} size="2x" />
      <Content>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </Content>
    </PointItemDiv>
  );
};

export default PointItem;
