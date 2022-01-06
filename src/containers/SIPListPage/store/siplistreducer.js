import { useReducer } from "react";
import SIPRepository from "../repository";
import { FETCH_SIPLIST, START } from "./siplistactions";
import { SIPListContext } from "./siplistcontext";

const initialState = {
  siplist: [],
  loading: true,
  error: null,
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const siplistReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SIPLIST:
      console.log("State list before fetching", state.siplist);
      var fetchedList = new SIPRepository().SIPList;
      console.log("fetched list:", fetchedList);
      const updatedList = fetchedList;
      console.log("Updated list : ", updatedList);
      return {
        siplist: updatedList,
        loading: false,
      };
    case START:
      sleep(2000);
      return {
        ...state,
        loading: true,
      };
    default:
      throw new Error("Something went wrong!!");
  }
};

const SIPListContextProvider = (props) => {
  const [state, dispatch] = useReducer(siplistReducer, initialState);

  return (
    <SIPListContext.Provider value={[state, dispatch]}>
      {props.children}
    </SIPListContext.Provider>
  );
};

export default SIPListContextProvider;
