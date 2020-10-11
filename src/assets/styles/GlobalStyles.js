import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #000;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}
h1,
h2,
h3,
h4 {
  font-family: 'Courgette', cursive;
}
ul {
    padding: 0;
    margin:0;
}
`;
export default GlobalStyle;
