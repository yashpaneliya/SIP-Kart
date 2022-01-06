import { useEffect, useContext } from "react";
import SIPListItem from "../../components/SIPList/siplistitem";
import styled from "styled-components";
import { SIPListContext } from "./store/siplistcontext";
import { FETCH_SIPLIST, START } from "./store/siplistactions";

const SIPListOuterDiv = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
  width: 70%;
  height: 100%;
  margin: 5rem auto;
`;

const FilterSection = styled.div`
  width: 30%;
`;
const ListSection = styled.div`
  width: 70%;
`;

const Loading = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const Heading = styled.h3`
  margin: 0.4rem 0rem;
  font-weight: 500;
  letter-spacing: 0.16px;
  line-height: 34px;
`;
const SIPListPage = () => {
  const [state, dispatch] = useContext(SIPListContext);

  useEffect(() => {
    dispatch({
      type: START,
    });
    dispatch({
      type: FETCH_SIPLIST,
    });
  }, []);

  return (
    <>
      {state.loading && <Loading>Loading...</Loading>}
      {!state.loading && state.siplist.length !== 0 && (
        <SIPListOuterDiv>
          <FilterSection>Filters coming soon...</FilterSection>
          <ListSection>
            <Heading>All SIPs</Heading>
            {state.siplist.map((sip) => {
              return <SIPListItem item={sip} key={sip.id} />;
            })}
          </ListSection>
        </SIPListOuterDiv>
      )}
    </>
  );
};

export default SIPListPage;
