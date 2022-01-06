import React from "react";

export const SIPListContext = React.createContext({
  siplist: [],
  loading: true,
  error: null,
});
