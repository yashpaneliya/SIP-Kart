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
};

export default CategoriesData;