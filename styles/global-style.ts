import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
import { theme } from "../styles/theme";

export const GlobalStyle = createGlobalStyle`

  :root {
    --font-size-description: 32px;
    --letter-spacing-description: 0.64px;
  }

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    color: #3E3E3E;
    font-family: "Montserrat";
    scroll-behavior: smooth;
    transition: scroll 0.3s cubic-bezier(0.0, 0.0, 0.58, 1.0);
  }

  @media all and (min-width: 1025px){
  }

  @media all and (min-width: 320px) and (max-width: 1024px) {
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }
 
`;

export default GlobalStyle;
