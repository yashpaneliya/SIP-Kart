import { ThemeProvider } from "styled-components";
import "./App.css";
import NavBar from "./components/Navbar/navbar";
import { GlobalStyle } from "./styles";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
