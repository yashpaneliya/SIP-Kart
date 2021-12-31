import {
  faBalanceScale,
  faBuilding,
  faChartLine,
  faPiggyBank,
  faUmbrella,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const IconMap = {
  balanceIcon: faBalanceScale,
  savingIcon: faPiggyBank,
  graphIcon: faChartLine,
  umbrellaIcon: faUmbrella,
  companyIcon: faBuilding,
  bankIcon: faUniversity,
};

const CategoriesData = {
  highReturn: {
    icon: IconMap.graphIcon,
    title: "HIGH RETURN",
    data: [],
  },
  taxSaving: {
    icon: IconMap.savingIcon,
    title: "TAX SAVING",
    data: [],
  },
  fd: {
    icon: IconMap.umbrellaIcon,
    title: "BETTER THAN FD",
    data: [],
  },
  topcomp: {
    icon: IconMap.companyIcon,
    title: "TOP COMPANIES",
    data: [],
  },
  min500: {
    icon: IconMap.bankIcon,
    title: "SIP WITH ₹500",
    data: [],
  },
  sectorbets: {
    icon: IconMap.balanceIcon,
    title: "SECTOR BETS",
    data: [],
  },
};

export default CategoriesData;
