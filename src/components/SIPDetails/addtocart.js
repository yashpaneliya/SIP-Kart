import styled from "styled-components";
import Tabs from "../tabs";
import { useState } from "react";
import { theme } from "../../styles";

const Card = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  box-shadow: 0px 0px 5px lightgrey;
  align-items: flex-start;
`;

const TabContainer = styled.div`
  width: 96%;
  padding-left: 4%;
  border-bottom: 1px solid lightgrey;
`;

const SIPAmount = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  padding: 1rem;
  width: 90%;
`;

const Input = styled.input`
  width: 30%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.shade};
  padding: 0.5rem;
  font-weight: bold;
`;

const CTA = styled.div`
  width: 100%;
  margin-top: 5rem;
  text-align: center;
`;

const AddToCart = (props) => {
  const [activeTab, setActivetab] = useState("Monthly SIP");

  return (
    <Card>
      <TabContainer>
        <Tabs
          labels={["Monthly SIP", "Onetime"]}
          activeTab={activeTab}
          onTabChange={(val) => {
            setActivetab(val);
          }}
          style={{ paddingLeft: "10px" }}
        ></Tabs>
      </TabContainer>
      <SIPAmount>
        <label>{activeTab === "Monthly SIP" ? "SIP Amount" : "Amount"}</label>
        <Input placeholder="0" />
      </SIPAmount>
      {activeTab === "Monthly SIP" && (
        <SIPAmount>
          <label>Monthly Date</label>
          <Input placeholder="17th" />
        </SIPAmount>
      )}
      <CTA>
        { activeTab === "Monthly SIP" && <p>Next SIP installment on 17th</p>}
        <theme.mixins.Button>ADD TO CART</theme.mixins.Button>
        <theme.mixins.Button primary>{activeTab === "Monthly SIP" ? "START SIP" : "INVEST"}</theme.mixins.Button>
      </CTA>
    </Card>
  );
};

export default AddToCart;
