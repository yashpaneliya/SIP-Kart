import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const BalanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
// const SavingIcon = <FontAwesomeIcon icon={faPiggyBank} size="5x" />;
// const GraphIcon = <FontAwesomeIcon icon={faChartLine} />;
// const UmbrellaIcon = <FontAwesomeIcon icon={faUmbrella} />;
// const CompanyIcon = <FontAwesomeIcon icon={faBuilding} />;
// const BankIcon = <FontAwesomeIcon icon={faUniversity} />;

const IconWrapper = styled.div``;

const SIPIcon = (props) => {
  const theme = useTheme();

  console.log(props.icon);
  return (
    <IconWrapper>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size ?? "5x"}
        color={theme.color}
      />
    </IconWrapper>
  );
};

export default SIPIcon;
