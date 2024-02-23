import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

 @media (prefers-color-scheme: dark) {
    :root {
    --primary-color: red; 
    --secondary-color: blue;
    --primary-background: #d3d3d3;
  }
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 2rem;
  }
`;

export default GlobalStyle;
