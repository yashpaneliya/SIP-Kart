import { useState, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";
import Tabs from "../tabs";

const OuterDiv = styled.div`
  margin: 1rem;
  margin-top: 3rem;
  width: 100%;
`;

const InnerDiv = styled.div`
  width: 100%;
  border: 1px solid var(--shade-grey);
  padding: 2rem;
  border-radius: 5px;
`;

const RangeDiv = styled.div`
  width: inherit;
  margin: 3rem 0rem;

  .investrange {
    width: inherit;
  }
  input[type="range"] {
    -webkit-appearance: none;
    margin-right: 15px;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#ff4500, #ff4500);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ff4500;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
`;

const Tag = styled.div`
  width: max-content;
  align-items: center;
  background-color: ${({ theme }) => theme.shade};
  border-color: ${({ theme }) => theme.color};
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  color: ${({ theme }) => theme.color};
  font-size: var(--fz-sm);
  font-weight: 500;
  margin: 0px 10px 0px 0px;
  padding: 5px 10px;
  text-align: center;
`;

const InvestAmountText = styled.p`
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 500;
`;

const TabContainer = styled.div`
  margin-top: 2rem;
`;

const ReturnContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid var(--shade-grey);
`;

const RangeSlider = ({ ...rangeprops }) => {
  return (
    <RangeDiv>
      <input type="range" {...rangeprops} className="investrange" />
    </RangeDiv>
  );
};

const ReturnCalculator = (props) => {
  const [sipamount, setSipamount] = useState(props.minSIP);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [returns, setReturns] = useState(0);
  const [activeTab, setActivetab] = useState("6 Months");

  useEffect(() => {
    console.log("active:", activeTab);
  }, [activeTab]);

  const onSlide = useCallback((e) => {
    setSipamount(e.target.value);
  }, []);

  const calculateReturnAmount = (rate, duration, amount) => {
    var monthlyRate = rate / 12 / 100;
    var term1 = Math.pow(1 + monthlyRate, duration) - 1;
    var term2 = (1 + monthlyRate) / monthlyRate;
    var returnAmount = Math.floor(amount * term1 * term2);
    return returnAmount;
  };

  const calculateReturns = useCallback((investmentAmount, tab) => {
    switch (tab) {
      case "6 Months":
        setTotalInvestment(investmentAmount * 6);
        setReturns(calculateReturnAmount(props.sixM, 6, investmentAmount));
        break;
      case "1 Year":
        setTotalInvestment(investmentAmount * 12);
        setReturns(calculateReturnAmount(props.oneY, 12, investmentAmount));
        break;
      case "3 Years":
        setTotalInvestment(investmentAmount * 36);
        setReturns(calculateReturnAmount(props.threeY, 36, investmentAmount));
        break;
      default:
        break;
    }
  }, []);

  const rangeProps = useMemo(
    () => ({
      min: 0,
      max: 50000,
      value: sipamount,
      step: 500,
      label: "This is a reusable slider",
      onChange: (e) => onSlide(e),
      onMouseUp: (e) => calculateReturns(e.target.value, activeTab),
    }),
    [sipamount]
  );

  return (
    <OuterDiv>
      <h3>Return Calculator</h3>
      <InnerDiv>
        <Tag>Monthly SIP</Tag>
        <InvestAmountText>₹{sipamount} per month</InvestAmountText>
        <RangeSlider {...rangeProps} />
        <TabContainer>
          <Tabs
            labels={["6 Months", "1 Year", "3 Years"]}
            onTabChange={(val) => {
              setActivetab(val);
              calculateReturns(sipamount, val);
            }}
            activeTab={activeTab}
          />
        </TabContainer>
        <ReturnContainer>
          <p>
            Total investment of <b>₹{totalInvestment}</b>
          </p>
          <p style={{fontSize:`var(--fz-lg)`}}>
            <b>Would have become ₹{returns}</b>
          </p>
        </ReturnContainer>
      </InnerDiv>
    </OuterDiv>
  );
};

export default ReturnCalculator;
