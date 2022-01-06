/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FundDetails from "../../components/SIPDetails/fundetails";
import SIPHeaderDetails from "../../components/SIPDetails/headerdetails";
import SIPGraph from "../../components/SIPDetails/sipgraph";
import { SIPListContext } from "../SIPListPage/store/siplistcontext";

const SIPDetailOuterDiv = styled.div`
  width: 100vw;
  height: max-content;
`;

const SIPDetailsMainDiv = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
  align-items: flex-start;
  width: 70%;
  margin: auto;
`;

const Routes = styled.div`
  height: 3rem;
  width: 100%;
  ${({ theme }) => theme.mixins.flexRow};
  align-items: flex-start;
  width: 80%;
  margin: 1rem auto;
`;

const DetailsSection = styled.div`
  width: 70%;
  margin-right: 2rem;
`;

const OrderSection = styled.div`
  width: 30%;
  border: 1px solid blue;
`;

const SIPDetail = () => {
  const { sipid } = useParams();
  const [state, dispatch] = useContext(SIPListContext);
  const sip = state.siplist[sipid];
  console.log(sip);

  return (
    <SIPDetailOuterDiv>
      <Routes>Routes...</Routes>
      <SIPDetailsMainDiv>
        <DetailsSection>
          <SIPHeaderDetails
            image={sip.logo}
            name={sip.name}
            category={sip.category}
            risk={sip.risk}
          />
          <SIPGraph
            oneM={sip.oneM}
            sixM={sip.sixM}
            oneY={sip.oneY}
            threeY={sip.threeY}
            all={sip.all}
          />
          <FundDetails
            currentPrice={sip.currentPrice}
            rating={sip.rating}
            minSIP={sip.minSIP}
            fundSize={sip.fundSize}
          />
        </DetailsSection>
        <OrderSection></OrderSection>
      </SIPDetailsMainDiv>
    </SIPDetailOuterDiv>
  );
};

export default SIPDetail;
