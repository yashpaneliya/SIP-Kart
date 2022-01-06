import { Routes, Route } from "react-router-dom";
import SIPDetail from "./containers/SIPDetail/sipdetail";
import HomePage from "./containers/Homepage/Homepage";
import SIPListPage from "./containers/SIPListPage/siplist";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/siplist" exact element={<SIPListPage />} />
      <Route path="/siplist/:sipid" exact element={<SIPDetail />} />
    </Routes>
  );
};

export default RouteBuilder;
