import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

​*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
 background-color: #cce4f5;
  font-size: 16px;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  margin:0;
  padding:0;
  list-style: none;
}

​a {
  margin:0;
  padding:0;
  text-decoration: none;
}

button {
border:none;
background-color: transparent;
}

button:hover {
  cursor: pointer;
}

input:focus,
input:active,
button:active,
button:focus {
  outline: none;
}
`;
