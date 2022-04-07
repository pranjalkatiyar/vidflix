import React from 'react'
//import {BrowserRouter,Route,Routes} from "react-router-dom";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Home,Browse,SignIn,SignUp} from './pages';
import * as ROUTES from './constants/routes';


//const App = () => {
  //return (
    //  <BrowserRouter> 
      //<Routes>
      //<Route path='/' element={<Home/>}>
      //</Route>
      //</Routes>
      //</BrowserRouter> 
      
       
      
//  );
//}
export default function App() {
  return(
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  )
}

//export default App;