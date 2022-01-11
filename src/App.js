import { ThemeProvider } from "styled-components";
import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./styles";
import { lightTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Home/Navbar/navbar";
import RouteBuilder from "./routeBuilder";
import SIPListContextProvider from "./containers/SIPListPage/store/siplistreducer";
import LoginModal from "./components/Auth/loginModal";

function App() {
  const [modalVisible, setmodalVisible] = useState(false);

  const showModal = () => {
    setmodalVisible(true);
  };

  const hideModal = () => {
    setmodalVisible(false);
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <NavBar showModal={showModal} hideModal={hideModal} />
          {modalVisible && <LoginModal onHide={hideModal}></LoginModal>}
          <SIPListContextProvider>
            <RouteBuilder />
          </SIPListContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
