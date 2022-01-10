import styled, { css } from "styled-components";
const TabsDiv = styled.div``;

const TabList = styled.ol`
  padding-left: 0;
`;

const TabListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  ${(props) =>
    props.primary === true &&
    css`
      color: ${({ theme }) => theme.color};
      background-color: ${({ theme }) => theme.shade};
      font-weight: 500;
      border-radius: 20px;
    `}
`;

const Tab = ({ label, activeTab, onClick }) => {
  return (
    <TabListItem onClick={onClick} primary={activeTab === label ? true : false}>
      {label}
    </TabListItem>
  );
};

const Tabs = ({ onTabChange, labels, activeTab }) => {
  return (
    <TabsDiv>
      <TabList>
        {labels.map((label) => (
          <Tab
            label={label}
            activeTab={activeTab}
            onClick={(e) => onTabChange(label)}
            key={label}
          />
        ))}
      </TabList>
    </TabsDiv>
  );
};

export default Tabs;
