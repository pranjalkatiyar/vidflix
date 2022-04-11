import React from 'react'
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import {Home,Browse,SignIn,SignUp} from './pages';
import * as ROUTES from './constants/routes';



export default function App() {
  return(
      <BrowserRouter> 
     <Routes>
     <Route path={ROUTES.HOME} element={< Home />}></Route>
     <Route path={ROUTES.BROWSE} element={< Browse />}></Route>
     <Route path={ROUTES.SIGN_IN} element={< SignIn />}></Route>
     <Route path={ROUTES.SIGN_UP} element={< SignUp />}></Route>
     </Routes>
      </BrowserRouter>
  )
}
