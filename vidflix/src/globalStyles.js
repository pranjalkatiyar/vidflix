import { createGlobalStyle } from "styled-components";

//GlobalStyles components
export const GlobalStyles=createGlobalStyle`
html,body{
    font-family:'Helvetica Neue',Arial, Helvetica, sans-serif;
    //check this out
    -webkit-font-smoothing:antialiased ;
    background-color: black;
    color: #333333;
    font-size: 16px;
}
`;
