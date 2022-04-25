import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {Home,Browse,SignIn,SignUp} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect,ProtectedRoute } from './helpers/routes';


export default function App() {
  const user=null;
  return(
      <BrowserRouter> 
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
        <Route path={ROUTES.BROWSE} element={<Browse/>}/>
          
        {/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect> */}
        {/* <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>  */}
        </Routes>
      </BrowserRouter>
  )
}
