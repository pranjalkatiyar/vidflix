import React from "react";
import { Inner } from "./styles/jumbotron";

 function Jumbotron({direction='row', ...restProps}){
 return (<Inner direction={direction}>
 <p> Jumbotron page</p>
 </Inner>
 );
}

export default Jumbotron;