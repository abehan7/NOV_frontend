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
    color: #000000;
    font-family: "FugazOne";
    scroll-behavior: smooth;
    transition: scroll 0.3s cubic-bezier(0.0, 0.0, 0.58, 1.0);
    background: ${theme.colors.primary};
  }

  ::selection {
  /* background: var(--clr-selection-bg); */
  background: ${theme.colors.primary};
  color:${(props) => props.theme.colors.white};
  }

  .kor__font{
    font-family: "IBMPlexSans";
  }
  .eng__font{
    font-family: "FugazOne";
  }
  .color__primary{
    color: ${theme.colors.primary};
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
