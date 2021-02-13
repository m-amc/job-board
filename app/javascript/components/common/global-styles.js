import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  img {
    width: 100%;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
