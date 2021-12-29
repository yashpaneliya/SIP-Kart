import { ThemeProvider } from "styled-components";
import "./App.css";
import HomePage from "./containers/Homepage/Homepage";
import { GlobalStyle } from "./styles";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
