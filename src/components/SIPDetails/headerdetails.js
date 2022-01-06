import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SIPIcon from "../../static/icons/awesomeIcons";

const HeaderDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
`;

const OptionsDiv = styled.div`
  width: 100%;
  height: max-content;
  ${({ theme }) => theme.mixins.flexBetween};
`;

const Logo = styled.img`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 50px;
`;

const Options = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid var(--shade-grey);
  background-color: ${({ theme }) => theme.background};
  padding: 0.6rem;
  margin-left: 1rem;
`;

const Name = styled.h1`
  font-size: var(--fz-xxxl);
  font-weight: normal;
  text-align: left;
  width: 100%;
`;

const TagBar = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-start;
`;

const Tag = styled.div`
  align-items: center;
  background-color: #f6f6f7;
  border-color: var(--shade-grey);
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  color: #7c7e8c;
  font-size: 12px;
  font-weight: 500;
  margin: 0px 10px 0px 0px;
  padding: 5px 10px;
  text-align: center;
`;

const SIPHeaderDetails = (props) => {
  return (
    <HeaderDiv>
      <OptionsDiv>
        <Logo src={props.image} alt={props.name} />
        <Options>
          <IconWrapper>
            <SIPIcon icon={faBookmark} size="1x" />
          </IconWrapper>
          <IconWrapper>
            <SIPIcon icon={faShareAlt} size="1x" />
          </IconWrapper>
        </Options>
      </OptionsDiv>
      <Name>{props.name}</Name>
      <TagBar>
        <Tag>{props.category}</Tag>
        <Tag>{props.risk} Risk</Tag>
      </TagBar>
    </HeaderDiv>
  );
};

export default SIPHeaderDetails;
