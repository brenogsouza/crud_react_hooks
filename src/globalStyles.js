import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#root {
    height: 100%;
}

body {
  background: #e5e6f0;
  -webkit-font-smoothing: antialiased !important;
}

body,
input,
button {
  font-family: 'Roboto', sans-serif;
}
`;
