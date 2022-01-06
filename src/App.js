import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./styles";
import { lightTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Home/Navbar/navbar";
import RouteBuilder from "./routeBuilder";
import SIPListContextProvider from "./containers/SIPListPage/store/siplistreducer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <NavBar />
          <SIPListContextProvider>
            <RouteBuilder />
          </SIPListContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
