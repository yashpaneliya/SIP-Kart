import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables};

html{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
}

body{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.text};
    font-family: var(--font-sans);

    @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }
}

`;

export default GlobalStyle;
