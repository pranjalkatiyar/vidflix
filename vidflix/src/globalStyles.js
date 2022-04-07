import { createGlobalStyle } from "styled-components";

//GlobalStyles components
export const GlobalStyles=createGlobalStyle`
html,body{
    font-family:'Helvetica Neue',Arial, Helvetica, sans-serif;
    //check this out
    -webkit-font-smoothing:antialiased ;
    /* background-color: black; */
    background: rgb(193,193,222);
  background: linear-gradient(360deg, rgba(193,193,222,1) 6%, rgba(197,227,215,1) 52%, rgba(111,177,190,1) 94%);

    color: #333333;
    font-size: 16px;
}
`;
