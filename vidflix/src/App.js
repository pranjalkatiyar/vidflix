import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {Home,Browse,SignIn,SignUp} from './pages';
import * as ROUTES from './constants/routes';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footers';
import { FaqsContainer } from './containers/faqs';

const App = () => {
  return (
      <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      </Routes>
      </BrowserRouter> 
      
       
      
  );
}


export default App;